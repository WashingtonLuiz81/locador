import React from 'react'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface MenuButtonProps {
  icon: IconType
  label: string
  onClick: () => void
  ariaLabel: string
}

const MenuButton = ({
  icon: Icon,
  label,
  onClick,
  ariaLabel,
}: MenuButtonProps) => (
  <button
    onClick={onClick}
    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center"
    aria-label={ariaLabel}
  >
    <Icon className="mr-2" /> {label}
  </button>
)

export default MenuButton
