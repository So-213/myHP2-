export const win95Colors = {
  gray: '#c0c0c0',
  grayDark: '#808080',
  grayLight: '#ffffff',
  blue: '#000080',
  black: '#000000',
} as const

export const win95Shadows = {
  // Outer border for windows
  window: `
    inset -1px -1px 0 ${win95Colors.black},
    inset 1px 1px 0 ${win95Colors.grayLight},
    inset -2px -2px 0 ${win95Colors.grayDark},
    inset 2px 2px 0 ${win95Colors.gray}
  `,
  // Inner border for buttons
  button: `
    inset -1px -1px 0 ${win95Colors.grayDark},
    inset 1px 1px 0 ${win95Colors.grayLight}
  `,
  // Pressed button state
  buttonPressed: `
    inset -1px -1px 0 ${win95Colors.grayLight},
    inset 1px 1px 0 ${win95Colors.grayDark}
  `,
} as const

