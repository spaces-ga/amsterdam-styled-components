import styled from '@datapunt/asc-core'
import TopBarStyle from '../TopBar/TopBarStyle'
import { themeColor, showAboveBackDrop } from '../../utils'

type Props = {
  attributes?: object
  hasBackDrop?: boolean
}

const ModalStyle = styled.div<Props>`
  background-color: ${themeColor('tint', 'level1')};
  overflow: auto;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${TopBarStyle} {
    min-height: 54px;
  }

  ${showAboveBackDrop()}
`

export const ModalStyleContainer = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
`

export default ModalStyle
