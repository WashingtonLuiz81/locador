import { X } from 'lucide-react'
import React from 'react'

type AsideModalProps = {
  isOpen: boolean
  onClose: () => void
  title: React.ReactNode
  children: React.ReactNode
  widthClass?: string
}

export const AsideModal = ({
  isOpen,
  onClose,
  title,
  children,
  widthClass,
}: AsideModalProps) => {
  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${widthClass || 'w-64'} z-50`}
        tabIndex={-1}
      >
        <div className="p-4">
          <h2 className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-4 border-gray-300 border-b pb-4">
            {title}
            <X onClick={onClose} className="cursor-pointer" />
          </h2>
          {children}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
          aria-label="Fechar modal"
        ></div>
      )}
    </>
  )
}
