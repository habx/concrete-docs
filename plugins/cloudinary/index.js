// const fetch = require('node-fetch')

require('dotenv').config()

const fakeResponse = {
  data: {
    cld: {
      resources: {
        nodes: [
          {
            public_id: 'icons/library-outline',
          },
          {
            public_id: 'icons/library',
          },
          {
            public_id: 'icons/book-pile-outline',
          },
          {
            public_id: 'icons/book-pile',
          },
          {
            public_id: 'icons/draw-plan-tma',
          },
          {
            public_id: 'icons/x-mark-outline',
          },
          {
            public_id: 'icons/mail-outline-disable',
          },
          {
            public_id: 'icons/2D-text',
          },
          {
            public_id: 'icons/3D-text',
          },
          {
            public_id: 'icons/shopping-basket-outline',
          },
          {
            public_id: 'icons/shopping-basket',
          },
          {
            public_id: 'icons/price-label',
          },
          {
            public_id: 'icons/price-label-outline',
          },
          {
            public_id: 'icons/push',
          },
          {
            public_id: 'icons/pull',
          },
          {
            public_id: 'icons/ghost-outline',
          },
          {
            public_id: 'icons/ghost',
          },
          {
            public_id: 'icons/slide-west',
          },
          {
            public_id: 'icons/world-outline-1',
          },
          {
            public_id: 'icons/bug-outline',
          },
          {
            public_id: 'icons/bug-report-outline',
          },
          {
            public_id: 'icons/world-outline',
          },
          {
            public_id: 'icons/file-add-outline',
          },
          {
            public_id: 'icons/code',
          },
          {
            public_id: 'icons/code-outline',
          },
          {
            public_id: 'icons/add-round',
          },
          {
            public_id: 'icons/add-outline',
          },
          {
            public_id: 'icons/furniture-beta-outline',
          },
          {
            public_id: 'icons/bell-outline',
          },
          {
            public_id: 'icons/bell',
          },
          {
            public_id: 'icons/check-round-outline',
          },
          {
            public_id: 'icons/star-round-outline',
          },
          {
            public_id: 'icons/question-round-outline',
          },
          {
            public_id: 'icons/play',
          },
          {
            public_id: 'icons/pause',
          },
          {
            public_id: 'icons/slide-east',
          },
          {
            public_id: 'icons/price-label-add-outline',
          },
          {
            public_id: 'icons/loop-back',
          },
          {
            public_id: 'icons/trash-restore-outline',
          },
          {
            public_id: 'icons/trash-restore',
          },
          {
            public_id: 'icons/clock-restore-outline',
          },
          {
            public_id: 'icons/loop-back-small',
          },
          {
            public_id: 'icons/layer-number-outline-0',
          },
          {
            public_id: 'icons/layer-number-outline-1',
          },
          {
            public_id: 'icons/layer-number-outline-2',
          },
          {
            public_id: 'icons/plan-3D',
          },
          {
            public_id: 'icons/floor-last',
          },
          {
            public_id: 'icons/floor-first',
          },
          {
            public_id: 'icons/floor-rdc',
          },
          {
            public_id: 'icons/person-multiple',
          },
          {
            public_id: 'icons/person-multiple-outline',
          },
          {
            public_id: 'icons/mobile-phone',
          },
          {
            public_id: 'icons/landscape-night',
          },
          {
            public_id: 'icons/landscape',
          },
          {
            public_id: 'icons/landscape-outline',
          },
          {
            public_id: 'icons/landscape-night-outline',
          },
          {
            public_id: 'icons/image-information-outline',
          },
          {
            public_id: 'icons/color-invert',
          },
          {
            public_id: 'icons/timer-clock-outline',
          },
          {
            public_id: 'icons/time-laps-outline',
          },
          {
            public_id: 'icons/alarm-clock-outline',
          },
          {
            public_id: 'icons/clock-outline',
          },
          {
            public_id: 'icons/unlock-outline',
          },
          {
            public_id: 'icons/unlock',
          },
          {
            public_id: 'icons/lock',
          },
          {
            public_id: 'icons/lock-outline',
          },
          {
            public_id: 'icons/big-brush-outline',
          },
          {
            public_id: 'icons/paint-pot-outline',
          },
          {
            public_id: 'icons/paint-pot',
          },
          {
            public_id: 'icons/big-brush',
          },
          {
            public_id: 'icons/comment-alert',
          },
          {
            public_id: 'icons/column-open',
          },
          {
            public_id: 'icons/column-to-west',
          },
          {
            public_id: 'icons/column-collapse',
          },
          {
            public_id: 'icons/column-to-east',
          },
          {
            public_id: 'icons/loading-darkblue',
          },
          {
            public_id: 'icons/clock',
          },
          {
            public_id: 'icons/alarm-clock',
          },
          {
            public_id: 'icons/time-laps',
          },
          {
            public_id: 'icons/timer-clock',
          },
          {
            public_id: 'icons/wrench',
          },
          {
            public_id: 'icons/webbrowser',
          },
          {
            public_id: 'icons/web',
          },
          {
            public_id: 'icons/undo',
          },
          {
            public_id: 'icons/touch',
          },
          {
            public_id: 'icons/to-west',
          },
          {
            public_id: 'icons/thumb-up',
          },
          {
            public_id: 'icons/to-east',
          },
          {
            public_id: 'icons/three-dots-vertical',
          },
          {
            public_id: 'icons/text-wrong',
          },
          {
            public_id: 'icons/text-correct',
          },
          {
            public_id: 'icons/tablet',
          },
          {
            public_id: 'icons/swap-west-east',
          },
          {
            public_id: 'icons/swap-north-south',
          },
          {
            public_id: 'icons/shower-head',
          },
          {
            public_id: 'icons/staires-outline',
          },
          {
            public_id: 'icons/settings-2',
          },
          {
            public_id: 'icons/reduce-hover',
          },
          {
            public_id: 'icons/redo',
          },
          {
            public_id: 'icons/printer',
          },
          {
            public_id: 'icons/plan',
          },
          {
            public_id: 'icons/phone-disable',
          },
          {
            public_id: 'icons/phone-1',
          },
          {
            public_id: 'icons/compare-sidebyside',
          },
          {
            public_id: 'icons/comment',
          },
          {
            public_id: 'icons/comment-outline',
          },
          {
            public_id: 'icons/paste',
          },
          {
            public_id: 'icons/paquet',
          },
          {
            public_id: 'icons/comment-delete-outline',
          },
          {
            public_id: 'icons/comment-delete',
          },
          {
            public_id: 'icons/comment-add',
          },
          {
            public_id: 'icons/palette-outline',
          },
          {
            public_id: 'icons/palette',
          },
          {
            public_id: 'icons/comment-add-outline',
          },
          {
            public_id: 'icons/navigation',
          },
          {
            public_id: 'icons/oven',
          },
          {
            public_id: 'icons/orbital-rotate',
          },
          {
            public_id: 'icons/chevron-west-east',
          },
          {
            public_id: 'icons/mail-outline',
          },
          {
            public_id: 'icons/magicstick',
          },
          {
            public_id: 'icons/lot',
          },
          {
            public_id: 'icons/magicstick-outline',
          },
          {
            public_id: 'icons/lot-outline',
          },
          {
            public_id: 'icons/chevron-north-south',
          },
          {
            public_id: 'icons/check-round',
          },
          {
            public_id: 'icons/linkedin-filled',
          },
          {
            public_id: 'icons/link',
          },
          {
            public_id: 'icons/link-oblique',
          },
          {
            public_id: 'icons/like',
          },
          {
            public_id: 'icons/laptop',
          },
          {
            public_id: 'icons/check-list',
          },
          {
            public_id: 'icons/check-list-error',
          },
          {
            public_id: 'icons/check-list-uncompleted-1',
          },
          {
            public_id: 'icons/information-round',
          },
          {
            public_id: 'icons/check-list-uncompleted',
          },
          {
            public_id: 'icons/chain',
          },
          {
            public_id: 'icons/information-round-outline',
          },
          {
            public_id: 'icons/house-wrench',
          },
          {
            public_id: 'icons/house-wrench-outline',
          },
          {
            public_id: 'icons/house-separeted-roof',
          },
          {
            public_id: 'icons/card',
          },
          {
            public_id: 'icons/gps-position',
          },
          {
            public_id: 'icons/from-to-west',
          },
          {
            public_id: 'icons/bug-report',
          },
          {
            public_id: 'icons/back-home',
          },
          {
            public_id: 'icons/from-to-east',
          },
          {
            public_id: 'icons/brush',
          },
          {
            public_id: 'icons/free-draw',
          },
          {
            public_id: 'icons/bug',
          },
          {
            public_id: 'icons/back-home-outline',
          },
          {
            public_id: 'icons/forbidden',
          },
          {
            public_id: 'icons/folder',
          },
          {
            public_id: 'icons/folder-star',
          },
          {
            public_id: 'icons/folder-star-outline',
          },
          {
            public_id: 'icons/folder-outline',
          },
          {
            public_id: 'icons/folder-share-outline',
          },
          {
            public_id: 'icons/folder-share',
          },
          {
            public_id: 'icons/folder-open',
          },
          {
            public_id: 'icons/folder-open-outline',
          },
          {
            public_id: 'icons/folder-move',
          },
          {
            public_id: 'icons/folder-move-outline',
          },
          {
            public_id: 'icons/folder-add',
          },
          {
            public_id: 'icons/folder-add-outline',
          },
          {
            public_id: 'icons/floors',
          },
          {
            public_id: 'icons/floors-outline',
          },
          {
            public_id: 'icons/eye-outline-disable',
          },
          {
            public_id: 'icons/eye-disable',
          },
          {
            public_id: 'icons/app',
          },
          {
            public_id: 'icons/exit-compare',
          },
          {
            public_id: 'icons/app-switch',
          },
          {
            public_id: 'icons/dollar-sign',
          },
          {
            public_id: 'icons/devices',
          },
          {
            public_id: 'icons/3D-rotate',
          },
          {
            public_id: 'icons/AB-test',
          },
          {
            public_id: 'icons/3D-building-outline',
          },
          {
            public_id: 'icons/archivebox',
          },
          {
            public_id: 'icons/living-room',
          },
          {
            public_id: 'icons/compare-plan',
          },
          {
            public_id: 'icons/exit-compare-plan',
          },
          {
            public_id: 'icons/compare',
          },
          {
            public_id: 'icons/layer-number-outline',
          },
          {
            public_id: 'icons/layer',
          },
          {
            public_id: 'icons/layer-outline',
          },
          {
            public_id: 'icons/information',
          },
          {
            public_id: 'icons/car-outlined',
          },
          {
            public_id: 'icons/car',
          },
          {
            public_id: 'icons/house-dotted-roof',
          },
          {
            public_id: 'icons/linkedIn',
          },
          {
            public_id: 'icons/pin-filled',
          },
          {
            public_id: 'icons/star',
          },
          {
            public_id: 'icons/finger-navigation',
          },
          {
            public_id: 'icons/walk',
          },
          {
            public_id: 'icons/printer-outline',
          },
          {
            public_id: 'icons/send-outline',
          },
          {
            public_id: 'icons/swap',
          },
          {
            public_id: 'icons/density-high',
          },
          {
            public_id: 'icons/density-medium',
          },
          {
            public_id: 'icons/density-low',
          },
          {
            public_id: 'icons/plan-draw',
          },
          {
            public_id: 'icons/sheet',
          },
          {
            public_id: 'icons/map-project',
          },
          {
            public_id: 'icons/stairs-outline',
          },
          {
            public_id: 'icons/sunumbrella-outline',
          },
          {
            public_id: 'icons/three-dots',
          },
          {
            public_id: 'icons/magnify-left',
          },
          {
            public_id: 'icons/key-outline',
          },
          {
            public_id: 'icons/mail',
          },
          {
            public_id: 'icons/personn-add',
          },
          {
            public_id: 'icons/stats',
          },
          {
            public_id: 'icons/fanion-outline',
          },
          {
            public_id: 'icons/wrench-outline',
          },
          {
            public_id: 'icons/burger-menu-light-minimize',
          },
          {
            public_id: 'icons/star-outline',
          },
          {
            public_id: 'icons/burger-menu-light',
          },
          {
            public_id: 'icons/house-heart',
          },
          {
            public_id: 'icons/close-large',
          },
          {
            public_id: 'icons/invert',
          },
          {
            public_id: 'icons/exclam-round',
          },
          {
            public_id: 'icons/calendar-event-outline',
          },
          {
            public_id: 'icons/zoom-out',
          },
          {
            public_id: 'icons/zoom-in',
          },
          {
            public_id: 'icons/trash',
          },
          {
            public_id: 'icons/trash-outline',
          },
          {
            public_id: 'icons/text',
          },
          {
            public_id: 'icons/settings',
          },
          {
            public_id: 'icons/ruler-outline',
          },
          {
            public_id: 'icons/ruler',
          },
          {
            public_id: 'icons/reduce',
          },
          {
            public_id: 'icons/pencil',
          },
          {
            public_id: 'icons/pencil-edit',
          },
          {
            public_id: 'icons/pencil-outline',
          },
          {
            public_id: 'icons/paper-plane-filled',
          },
          {
            public_id: 'icons/loading',
          },
          {
            public_id: 'icons/large-close',
          },
          {
            public_id: 'icons/list',
          },
          {
            public_id: 'icons/calendar-check-outline',
          },
          {
            public_id: 'icons/calendar-check',
          },
          {
            public_id: 'icons/calendar-event',
          },
          {
            public_id: 'icons/calendar',
          },
          {
            public_id: 'icons/hard-hat-outline',
          },
          {
            public_id: 'icons/full-screen-exit',
          },
          {
            public_id: 'icons/full-screen',
          },
          {
            public_id: 'icons/flag',
          },
          {
            public_id: 'icons/flag-german',
          },
          {
            public_id: 'icons/fanion',
          },
          {
            public_id: 'icons/exclam',
          },
          {
            public_id: 'icons/exclam-outline',
          },
          {
            public_id: 'icons/export',
          },
          {
            public_id: 'icons/enlarge',
          },
          {
            public_id: 'icons/drag',
          },
          {
            public_id: 'icons/download',
          },
          {
            public_id: 'icons/copy-outline',
          },
          {
            public_id: 'icons/copy',
          },
          {
            public_id: 'icons/compass',
          },
          {
            public_id: 'icons/compass-outline',
          },
          {
            public_id: 'icons/3D-building',
          },
          {
            public_id: 'icons/pin-outline',
          },
          {
            public_id: 'icons/magnify-right',
          },
          {
            public_id: 'icons/whatsapp',
          },
          {
            public_id: 'icons/share',
          },
          {
            public_id: 'icons/house-heart-outline',
          },
          {
            public_id: 'icons/house-outline',
          },
          {
            public_id: 'icons/had-hat-outline',
          },
          {
            public_id: 'icons/eye-outline',
          },
          {
            public_id: 'icons/crane-outline',
          },
          {
            public_id: 'icons/coin-outline',
          },
          {
            public_id: 'icons/cash-outline',
          },
          {
            public_id: 'icons/camera-outline',
          },
          {
            public_id: 'icons/calendar-outline',
          },
          {
            public_id: 'icons/twitter',
          },
          {
            public_id: 'icons/phone-outline',
          },
          {
            public_id: 'icons/paperclip',
          },
          {
            public_id: 'icons/person-outline',
          },
          {
            public_id: 'icons/ico',
          },
          {
            public_id: 'icons/house-building',
          },
          {
            public_id: 'icons/house-building-outline',
          },
          {
            public_id: 'icons/house',
          },
          {
            public_id: 'icons/camera',
          },
          {
            public_id: 'icons/search',
          },
          {
            public_id: 'icons/chevron-east',
          },
          {
            public_id: 'icons/star-round',
          },
          {
            public_id: 'icons/question-round',
          },
          {
            public_id: 'icons/pinterest',
          },
          {
            public_id: 'icons/pin',
          },
          {
            public_id: 'icons/phone',
          },
          {
            public_id: 'icons/messenger',
          },
          {
            public_id: 'icons/person',
          },
          {
            public_id: 'icons/paper-plane',
          },
          {
            public_id: 'icons/medium',
          },
          {
            public_id: 'icons/instagram',
          },
          {
            public_id: 'icons/habx-pin',
          },
          {
            public_id: 'icons/hamburger-menu',
          },
          {
            public_id: 'icons/google-color',
          },
          {
            public_id: 'icons/google',
          },
          {
            public_id: 'icons/eye',
          },
          {
            public_id: 'icons/facebook',
          },
          {
            public_id: 'icons/euro',
          },
          {
            public_id: 'icons/facebook-filled',
          },
          {
            public_id: 'icons/download-document',
          },
          {
            public_id: 'icons/edit',
          },
          {
            public_id: 'icons/chevron-west',
          },
          {
            public_id: 'icons/close',
          },
          {
            public_id: 'icons/chevron',
          },
          {
            public_id: 'icons/chevron-south',
          },
          {
            public_id: 'icons/arrow-south-west',
          },
          {
            public_id: 'icons/check',
          },
          {
            public_id: 'icons/arrow-south',
          },
          {
            public_id: 'icons/chevron-north',
          },
          {
            public_id: 'icons/arrow-west',
          },
          {
            public_id: 'icons/arrow-south-east',
          },
          {
            public_id: 'icons/arrow-north-east',
          },
          {
            public_id: 'icons/add',
          },
          {
            public_id: 'icons/arrow-north',
          },
          {
            public_id: 'icons/arrow-north-west',
          },
          {
            public_id: 'icons/flag-france',
          },
          {
            public_id: 'icons/arrow-east',
          },
        ],
      },
    },
  },
}
const fetchCloudinaryIcons = async () => {
  try {
    // const cloudinaryIcons = await fetch(
    //   'https://www.habx.com/api/cloudinary/graphql',
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'user-agent': 'concrete-docs',
    //       'x-request-from': 'concrete-docs',
    //     },
    //     body:
    //       '{"operationName":"cloudinaryResourceList","variables":{},"query":"query cloudinaryResourceList {\\n  cld {\\n    resources(filters: {directory: \\"icons\\"}, paginate: {limit: 500}) {\\n      nodes {\\n        public_id\\n      }\\n    }\\n  }\\n}\\n"}',
    //     method: 'GET',
    //   }
    // )
    // const jsonResponse = await cloudinaryIcons.json()
    return fakeResponse.data.cld.resources.nodes
      .map((icon) => icon.public_id.replace('icons/', ''))
      .sort()
  } catch {
    console.log('Unable to fetch icons') // eslint-disable-line
    return null
  }
}

module.exports = () => {
  return {
    name: 'cloudinary',
    async loadContent() {
      const icons = await fetchCloudinaryIcons()
      return { icons }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      await setGlobalData(JSON.stringify(content))
    },
  }
}
