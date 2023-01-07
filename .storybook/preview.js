const customViewports = {
  smallUgly: {
    name: 'smallUgly',
    styles: {
      width: '360px',
      height: '540px'
    }
  },
  mediumUgly: {
    name: 'mediumUgly',
    styles: {
      width: '1024px',
      height: '1200px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
  viewport: {
    viewports: customViewports,
    defaultViwport: 'someDefault'
  }
}