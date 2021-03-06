import styled from '@datapunt/asc-core'
import { themeColor, themeSpacing } from '../../utils'
import LabelStyle from '../Label/LabelStyle'
import ButtonStyle from '../Button/ButtonStyle'

export type Props = {}

export default styled.div<Props>`
  border: 2px solid ${themeColor('tint', 'level3')};
  padding: 0 ${themeSpacing(5)} ${themeSpacing(5)};

  ${LabelStyle} {
    padding: ${themeSpacing(1)} 0;
  }

  ${ButtonStyle} {
    margin-top: ${themeSpacing(5)};
  }
`

export const FilterBoxHeader = styled.div`
  margin-bottom: ${themeSpacing(5)};
  padding: ${themeSpacing(4)} 0;
  min-height: 88px;
  border-bottom: 2px solid ${themeColor('tint', 'level3')};
`
