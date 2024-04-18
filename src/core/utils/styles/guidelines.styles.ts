export enum FontSize {
    H1 = '9',
    H2 = '8',
    H3 = '7',
    Onboarding =  '6',
    BoxName = '5',
    Button = '4',
    InputTitle = '3',
    Text = '2',
    Description =  '1'
}

export const guidelines = {
    colors: {
      dark: {
        primary: '#202020',
        secondary: '#2A343C',
        description: '#7D7C7C',
      },
      light: {
        primary: '#FFFFFF',
        secondary: '#DADADA',
        description: '#A7A7A7',
      },
      brandAccent: {
        primary: '#F43F5E',
        secondary: '#FEEECD',
        light: '#FFCED6',
        dark: '#C11B37',
      }
    },
    shadows: {
      card: {
        x: 0,
        y: 2,
        blur: 4,
        color: '#000000',
        opacity: 0.25,
      },
      filter: {
        x: 0,
        y: 1,
        blur: 2,
        color: '#000000',
        opacity: 0.25,
      },
      button: {
        x: 0,
        y: 1,
        blur: 2,
        color: '#101828',
        opacity: 0.05,
      },
      selected: {
        x: 0,
        y: 4,
        blur: 15,
        color: '#F43F5E',
        opacity: 0.25,
      },
      boxDark: {
        x: -1,
        y: -1,
        blur: 4,
        color: '#000000',
        opacity: 0.45,
      },
      boxLight: {
        x: 0,
        y: 2,
        blur: 8,
        color: '#000000',
        opacity: 0.25,
      }
    },
    fonts: {
      sizes: {
        [FontSize.Description]: 14,
        [FontSize.Text]: 15,
        [FontSize.Button]: 16,
        [FontSize.InputTitle]: 16,
        [FontSize.Onboarding]: 17,
        [FontSize.BoxName]: 17,
        [FontSize.H3]: 18,
        [FontSize.H2]: 21,
        [FontSize.H1]: 24,
      },
      lineHeights: {
        [FontSize.Description]: 14,
        [FontSize.Text]: 15,
        [FontSize.Button]: 21,
        [FontSize.InputTitle]: 18,
        [FontSize.Onboarding]: 17,
        [FontSize.BoxName]: 18,
        [FontSize.H3]: 18,
        [FontSize.H2]: 21,
        [FontSize.H1]: 24,
      },
      weights: {
        [FontSize.Description]: '400',
        [FontSize.Text]: '400',
        [FontSize.Button]: '600',
        [FontSize.InputTitle]: '500',
        [FontSize.Onboarding]: '400',
        [FontSize.BoxName]: '500',
        [FontSize.H3]: '600',
        [FontSize.H2]: '600',
        [FontSize.H1]: '600',
      }
    },
    sizes: {
      icon: 20,
      margin: 16,
      padding: 16,
      radius: {
        primary: 8,
        secondary: 12,
        extra: 40
      }
    }
  }