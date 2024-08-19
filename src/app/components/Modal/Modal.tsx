import React from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

          <button onClick={onClose} aria-label="Fechar modal">
            <X className="text-gray-500" />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
