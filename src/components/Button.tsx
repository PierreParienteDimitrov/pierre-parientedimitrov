import React from 'react'
import { IButton } from 'types/Ibutton'

const Button: React.FC<IButton> = ({
  children,
  color,
  variant,
  size,
  onclick,
}) => {
  const buttonStyle = () => {
    if (variant === 'contained') {
      switch (color) {
        case 'primary':
          return 'bg-primary-500 text-white'
        default:
          break
      }
    }
    if (variant === 'outlined') {
      switch (color) {
        case 'primary':
          return 'border border-secondary text-primary-500 transition delay-50 duration-300 ease-in-out hover:bg-secondary'
        default:
          break
      }
    }

    return
  }

  return (
    <button className={`rounded-md ${buttonStyle()}`} onClick={onclick}>
      {size === 'large' && <h4 className="px-8 py-2">{children}</h4>}
      {size === 'medium' && <h5 className="px-4 py-2">{children}</h5>}
      {size === 'small' && <h5 className="px-4 py-1">{children}</h5>}
    </button>
  )
}

export default Button
