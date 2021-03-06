import { position, transparentize } from 'polished'
import styled from '@datapunt/asc-core'
import { BACKDROP_Z_INDEX } from '../shared/constants'

import { themeColor } from '../../utils'

export type Props = {
  backdropOpacity?: number
}

const BackDropStyle = styled.div<Props>`
  display: block;
  ${position('fixed', 0, 0, 0, 0)};
  background-color: ${({ backdropOpacity, theme }) =>
    transparentize(
      backdropOpacity || 0.3,
      themeColor('tint', 'level7')({ theme }),
    )};
  z-index: ${BACKDROP_Z_INDEX};
`

export default BackDropStyle
