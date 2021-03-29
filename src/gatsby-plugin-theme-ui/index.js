const theme = {
  colors: {
    text: '#111111',
    background: '#fff',
    primary: '#f1f1f1',
    accent: '#111111',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    borderColor:"#ffffff",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons:"#1e7e92",
    socialIconsHover:"#2b9cb3",
    modes: {
      dark: {
        text: '#f5f5f5',
        background: '#1f1f1f',
        primary: '#252525',
        accent: '#2b9cb3',
        muted: 'rgba(255, 255, 255, 0.7)',
        buttonAccent: '#fff',
        cardBg: '#252525',
        borderColor:"#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons:"rgba(255,255,255,0.7)",
        socialIconsHover:"#fff",
      },
    }
  },
  links: {
    postLink: {
      color: 'muted',
      '&:hover': {
        color: 'text'
      }
    },
    button: {
      bg: 'buttonAccent',
      color: 'accent'
    }
  }
}

export default theme
