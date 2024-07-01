export const getStylesFromTheme = (
    value: 'light' | 'dark',
    lightStyles: Object,
    darkStyles: Object,
) => (value === 'light' ? lightStyles : darkStyles);
