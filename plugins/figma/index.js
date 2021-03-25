const fetch = require('node-fetch')
const figmaNodes = require('./figma-nodes')
require('dotenv').config()

const fetchFigmaImage = async (pageId, nodeId) => {
  const figmaResponse = await fetch(`https://api.figma.com/v1/images/${pageId}?ids=${nodeId}&format=svg`, { headers: {
    'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN
    }})
  const jsonResponse = await figmaResponse.json()
  return Object.values(jsonResponse.images)[0]
}

module.exports = () => {
  return {
    name: 'figma',
    async loadContent() {
      const data = {}
      await Promise.all(figmaNodes.map(async figmaNode => {
        const imageUrl = await fetchFigmaImage(figmaNode.pageId, figmaNode.nodeId)
        data[figmaNode.key] = imageUrl
      }))
      return data
    },
    async contentLoaded({content, actions}) {
      const {setGlobalData } = actions;
      await setGlobalData(
        JSON.stringify(content),
      );
    },
  };
};
