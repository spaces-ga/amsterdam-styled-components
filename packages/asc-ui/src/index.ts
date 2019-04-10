import {
  AscCore,
  ascDefaultTheme,
  THEME_NAME,
  StyledComponents,
  Theme,
} from '@datapunt/asc-core'

import IconButton from './components/IconButton'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'

import ThemeProvider from './theme/default'

const { Divider, Icon, ButtonBar, GlobalStyle, ListItem } = AscCore

// Components
export {
  Divider,
  Icon,
  Button,
  ButtonBar,
  IconButton,
  Modal,
  Portal,
  ListItem,
  Typography,
  Radio,
  TopBar,
  ShareBar,
  ShareButton,
  Focus,
}

// Non-components exports
export {
  GlobalStyle,
  StyledComponents,
  Theme,
  ThemeProvider,
  ascDefaultTheme,
  THEME_NAME,
}
