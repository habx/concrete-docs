module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'category',
          label: 'Layouts',
          items: [
            'components/ActionBar',
            'components/Card',
            'components/ExpansionPanel',
            'components/Loader',
            'components/LoaderDots',
            'components/LoadingBar',
            'components/SlideShow',
            'components/Stepper',
            'components/TogglePanel',
          ],
        },
      ],
    },
    'modal-like',
    {
      type: 'category',
      label: 'Usage with styled components',
      items: ['styled-components/theme'],
    },
    {
      type: 'category',
      label: 'Helpers',
      items: ['utils/async-prompts', 'utils/notify'],
    },
    {
      type: 'category',
      label: 'Colors',
      items: ['colors/colors', 'colors/ui-colors', 'colors/palette'],
    },
    {
      type: 'category',
      label: 'Guidelines',
      items: [
        'guidelines/grid',
        'guidelines/breakpoints',
        'guidelines/spacing',
      ],
    },
  ],
}
