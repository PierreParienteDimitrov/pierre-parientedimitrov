import React from 'react'
import { IButton } from 'types/Ibutton'

const Button: React.FC<IButton> = ({ children, color, variant, size }) => {
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
          return 'border border-primary-500 text-primary-500 transition delay-150 duration-300 ease-in-out hover:bg-primary-100'
        default:
          break
      }
    }

    return
  }

  return (
    <button className={`rounded-md ${buttonStyle()}`}>
      {size === 'medium' && <h5 className="px-4 py-2">{children}</h5>}
    </button>
  )
}

export default Button
