module.exports = {
  docs: [
    'getting-started',
    'layouts',
    'typo',
    'modal-like',
    'async-prompts',
    'utils',
    'hooks',
    {
      type: 'category',
      label: 'Styling',
      items: [
        'styling/theme',
        'styling/animations',
        'styling/breakpoints',
        'styling/custom-theme',
      ],
    },
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
