import styled, { css, keyframes } from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'
import { EdgeDetectionTypes } from '../../../utils/hooks/useEdgeDetection'
import { showHide } from '../../../utils'

export type Props = {
  edgeDetection?: EdgeDetectionTypes
}

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export default styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  flex-direction: row;
  font-weight: 400;
  animation: ${show} 0.1s linear;
  background-color: inherit;

  & > ${MenuItemStyle} {
    font-weight: 500;
  }

  ${({ edgeDetection }) =>
    edgeDetection &&
    // @ts-ignore
    Object.entries(edgeDetection).map(([position, value]) => {
      return css`
        ${value ? `${position}: 0;` : ''}
      `
    })}

  ${showHide()}
`
