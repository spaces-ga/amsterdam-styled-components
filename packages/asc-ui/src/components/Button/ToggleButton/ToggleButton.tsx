import React from 'react'
import { Close, Menu } from '@datapunt/asc-assets'
import Icon, { Props as IconProps } from '../../Icon/Icon'
import ToggleButtonStyle, { Props as StyleProps } from './ToggleButtonStyle'
import { TOGGLE_BUTTON_SIZE } from '../../shared/constants'

export type Props = {
  iconOpen?: React.ReactElement
  iconClose?: React.ReactElement
} & StyleProps &
  IconProps

const ToggleHandlerButton: React.FC<Props> = ({
  iconOpen,
  iconClose,
  open,
  rotate,
  size,
  ...otherProps
}) => {
  const IconOpen = iconOpen || <Menu />
  const IconClose = iconClose || <Close />
  return (
    <ToggleButtonStyle
      variant="blank"
      size={TOGGLE_BUTTON_SIZE}
      open={!!open}
      {...otherProps}
    >
      <Icon {...{ rotate, size }}>
        {open && !rotate ? IconClose : IconOpen}
      </Icon>
    </ToggleButtonStyle>
  )
}

export default ToggleHandlerButton
