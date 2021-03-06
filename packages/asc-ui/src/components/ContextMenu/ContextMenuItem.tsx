import React from 'react'
import { KeyboardKeys } from '../../types'
import ContextMenuItemStyle from './ContextMenuItemStyle'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  divider?: boolean
}

class ContextMenuItem extends React.Component<Props> {
  root = React.createRef<HTMLDivElement>()

  componentDidUpdate() {
    const { focused } = this.props
    const ref = this.getReference('root')
    if (ref && focused) {
      ref.focus()
    }
  }

  onClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    const { onClick } = this.props
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      this.onClick(e)
    }
  }

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const { children, focused, icon, ...otherProps }: any = this.props
    return (
      <ContextMenuItemStyle
        ref={this.root}
        focused={focused}
        onClick={this.onClick}
        onKeyDown={this.handleKeyPress}
        tabIndex={focused ? 0 : -1}
        {...otherProps}
      >
        {icon && icon}
        {children}
      </ContextMenuItemStyle>
    )
  }
}

export default ContextMenuItem
