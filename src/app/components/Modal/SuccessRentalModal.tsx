import React from 'react'
import { Button } from '../ui/button'
import { CheckCircle } from 'lucide-react'

interface SuccessRentalModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SuccessRentalModal = ({
  isOpen,
  onClose,
}: SuccessRentalModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Aluguel realizado com sucesso!
          </h2>
          <p className="text-gray-600 mb-6">
            O filme foi reservado. Só vir buscar na sua{' '}
            <strong>LocaDO´R</strong> mais perto de você!
          </p>

          <Button
            onClick={onClose}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Fechar
          </Button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
