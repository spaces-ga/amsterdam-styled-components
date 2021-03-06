import React from 'react'
import ContextMenuButtonStyle from './ContextMenuButton'
import MenuList from './ContextMenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'
import { Position } from './types'
import ContextMenuWrapperStyle from './ContextMenuWrapperStyle'
import ContextMenuItem from './ContextMenuItem'

const selectedChildInitial = -1

type Props = {
  position?: Position
  label?: string
  icon?: React.ReactNode
  arrowIcon: React.ReactNode
  open?: boolean
}

type State = {
  open?: boolean
  selectedChild: number
}

class ContextMenu extends React.Component<Props, State> {
  wrapper = React.createRef<HTMLDivElement>()

  list = React.createRef<HTMLDivElement>()

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    open: false,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      open: props.open,
      selectedChild: selectedChildInitial,
    }
  }

  componentDidMount(): void {
    const { children } = this.props
    React.Children.toArray(children).forEach(child => {
      // @ts-ignore
      if (child && child.type !== ContextMenuItem) {
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: you are rendering a different component type in <ContextMenu /> other than <ContextMenuItem />.',
        )
      }
    })
  }

  componentDidUpdate(prevProps: Props) {
    const { open } = this.props

    if (prevProps.open !== open) {
      this.onToggle(open)
    }
  }

  onKeyDown = (event: React.KeyboardEvent) => {
    const { children } = this.props
    const { selectedChild, open } = this.state

    const nrOfChildren = React.Children.count(children)

    if (!open) {
      return
    }

    const firstChild = 0
    const lastChild = nrOfChildren - 1

    if (event.key === KeyboardKeys.ArrowDown) {
      event.preventDefault()
      this.setState({
        selectedChild:
          selectedChild === lastChild ? firstChild : selectedChild + 1,
      })
    }

    if (event.key === KeyboardKeys.ArrowUp) {
      event.preventDefault()
      this.setState({
        selectedChild:
          selectedChild === firstChild || selectedChild === selectedChildInitial
            ? lastChild
            : selectedChild - 1,
      })
    }
  }

  onToggle = (open: Props['open'] | State['open']) => {
    this.setState({ open })
  }

  onClose = () => {
    setTimeout(() => {
      const element = this.getReference('wrapper') as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          this.setState({
            selectedChild: selectedChildInitial,
            open: false,
          })
        }
      }
    })
  }

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const {
      label,
      children,
      position,
      icon,
      arrowIcon,
      ...otherProps
    } = this.props
    const { open, selectedChild } = this.state

    return (
      <ContextMenuWrapperStyle
        ref={this.wrapper}
        onKeyDown={this.onKeyDown}
        onBlur={this.onClose}
        {...otherProps}
      >
        <ContextMenuButtonStyle
          {...{
            icon,
            open,
            position,
            label,
            arrowIcon,
          }}
          onClick={() => this.onToggle(!open)}
        />
        <MenuList
          {...{
            position,
            open,
            selectedChild,
          }}
          onClose={this.onClose}
          ref={this.list}
        >
          {children}
        </MenuList>
      </ContextMenuWrapperStyle>
    )
  }
}

export default ContextMenu
