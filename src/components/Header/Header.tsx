'use client'

import React, { useState } from 'react'
import {
  Heart,
  LogOut,
  Settings,
  ShoppingCart,
  User,
  Clapperboard,
  Loader2,
} from 'lucide-react'
import Modal from '../Modal/Modal'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, PasswordInput } from '../Form'
import { Button } from '../ui/button'
import { loginSchema } from './schemas'

type LoginFormInputs = z.infer<typeof loginSchema>

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
  }
  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  // Integrar React Hook Form com Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange', // Validação em tempo real
  })

  const onSubmit = (data: LoginFormInputs) => {
    setLoading(true)
    console.log('Form data:', data)
    // Aqui você pode adicionar a lógica para o login
  }

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-gray-700 rounded-lg">
          <Clapperboard className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Loca<span className="text-yellow-500">DO´R</span>
          </h1>

          <p className="text-sm text-gray-300">
            A sua locadora{' '}
            <span className="text-yellow-500 font-medium">Online</span>!
          </p>
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <ShoppingCart
          className="text-gray-300 text-2xl cursor-pointer"
          aria-label="Carrinho de Compras"
        />

        <div className="relative">
          <User
            className="text-gray-300 text-2xl cursor-pointer"
            aria-label="Abrir menu de usuário"
            aria-expanded={showUserMenu}
            aria-controls="user-menu"
            onClick={toggleUserMenu}
          />

          <div
            id="user-menu"
            role="dialog"
            aria-modal="true"
            className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform ${
              showUserMenu ? 'translate-x-0' : 'translate-x-full'
            } w-64 z-50`}
            tabIndex={-1}
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Menu de Usuário
              </h2>

              <button
                onClick={() => {}}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center"
                aria-label="Configurações"
              >
                <Settings className="mr-2" /> Configurações
              </button>

              <button
                onClick={() => {
                  setShowUserMenu(false)
                }}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center"
                aria-label="Favoritos"
              >
                <Heart className="mr-2" /> Favoritos
              </button>

              <button
                onClick={() => {
                  toggleUserMenu()
                  openLoginModal()
                }}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center"
                aria-label="Login"
              >
                <User className="mr-2" /> Login
              </button>

              <button
                onClick={() => {}}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center"
                aria-label="Logout"
              >
                <LogOut className="mr-2" /> Sair
              </button>
            </div>
          </div>

          {showUserMenu && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleUserMenu}
              aria-label="Fechar modal"
            ></div>
          )}
        </div>
      </nav>

      {showLoginModal && (
        <Modal isOpen={showLoginModal} onClose={closeLoginModal} title="Login">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
            <div>
              <div className="mt-1">
                <Input
                  placeholder="Usuário"
                  className={`h-14 rounded-xl outline-none`}
                  {...register('username')}
                  error={errors.username?.message}
                />
              </div>
            </div>

            <div>
              <PasswordInput
                placeholder="Senha"
                className={`h-14 rounded-xl outline-none `}
                error={errors.password?.message}
                {...register('password')}
              />
            </div>

            <div>
              <Button
                type="submit"
                className={`w-full h-11 text-white bg-blue-500 ${!isValid || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isValid || loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Carregando...' : 'Entrar'}
              </Button>
            </div>

            <span className="w-full cursor-pointer block text-center mt-6 text-gray-400 font-semibold size-4">
              Esqueci minha senha
            </span>
          </form>
        </Modal>
      )}
    </header>
  )
}

export default Header
