import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2893cc',
      light: '#69c3ff',
      dark: '#00659b',
      contrastText: '#000000'
    },
    secondary: {
      main: '#fc9c15',
      light: '#ffcd4f',
      dark: '#c36d00',
      contrastText: '#000000'
    }
  }
})

export default theme
