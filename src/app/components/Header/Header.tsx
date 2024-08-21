'use client'

import React, { useState } from 'react'
import {
  LogOut,
  Settings,
  ShoppingCart,
  User,
  Clapperboard,
  Loader2,
  Trash2,
  CircleOff,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, PasswordInput } from '../Form'
import { Button } from '../ui/button'
import { loginSchema } from './schemas'
import { LoginModal, AsideModal, SuccessRentalModal } from '../Modal'
import { useCartStore } from '@/core/store/cartStore'
import Image from 'next/image'
import { AvatarIcon } from '@radix-ui/react-icons'

type LoginFormInputs = z.infer<typeof loginSchema>

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cart, removeFromCart, clearCart } = useCartStore()

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  }

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
  }
  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true)
    console.log('Form data:', data)
  }

  const handleRemoveMovie = (id: number) => {
    removeFromCart(id)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const handleConfirmRental = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    toggleCart()
    handleClearCart()
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
            A sua locadora
            <span className="text-yellow-500 font-medium">Online</span>
          </p>
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <ShoppingCart
            className="text-gray-300 text-2xl cursor-pointer"
            aria-label="Carrinho de Compras"
            aria-controls="cart"
          />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full px-2 text-xs">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 spin-slow" />

              {cart.length}
            </span>
          )}
        </div>

        <div className="relative">
          <User
            className="text-gray-300 text-2xl cursor-pointer"
            aria-label="Abrir menu de usuário"
            aria-expanded={showUserMenu}
            aria-controls="user-menu"
            onClick={toggleUserMenu}
          />

          <AsideModal
            isOpen={showUserMenu}
            onClose={() => setShowUserMenu(false)}
            title={
              <>
                <AvatarIcon className="mr-2" />
                <span className="text-gray-600 text-sm font-medium">
                  Washington Luiz
                </span>
              </>
            }
          >
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
          </AsideModal>

          <AsideModal
            isOpen={showCart}
            widthClass="max-w-[400px]"
            onClose={() => setShowCart(false)}
            title={
              <div className="flex items-center gap-2">
                <ShoppingCart className="mr-2" /> Seu Carrinho
              </div>
            }
          >
            {cart.length === 0 ? (
              <p className="flex items-center gap-3 text-gray-400 font-semibold text-base">
                <CircleOff width={24} /> O carrinho está vazio.
              </p>
            ) : (
              <>
                <div className="overflow-y-auto max-h-[calc(512px-96px)] xl:max-h-[calc(512px-60px)] scrollbar">
                  <div className="space-y-4 pr-2">
                    {cart.map((movie, index) => (
                      <div
                        key={movie.id}
                        className={`flex items-center justify-between ${cart.length === index + 1 ? '' : 'border-gray-300 border-b pb-4'}`}
                      >
                        <div className="flex items-start gap-4">
                          <figure className="w-auto">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_URL_IMAGES}${movie.poster_path}`}
                              className="rounded-md w-28"
                              width={112}
                              height={250}
                              alt={movie.title}
                            />
                          </figure>

                          <div className="flex flex-col flex-1 gap-3 text-gray-600">
                            <span className="text-base font-semibold">
                              {movie.title}
                            </span>

                            <p className="text-sm font-medium line-clamp-4">
                              {movie.overview}
                            </p>

                            <div className="flex items-center justify-between gap-1">
                              <span className="text-gray-900 text-lg font-bold">
                                R$ 15,99
                              </span>

                              <Button
                                onClick={() => handleRemoveMovie(movie.id)}
                                className="flex items-center justify-start gap-1 hover:text-gray-900 bg-transparent text-gray-900 border-none shadow-none text-left p-0"
                                aria-label="Remover filme"
                              >
                                <Trash2
                                  width={18}
                                  className="text-xs font-normal"
                                />
                                <span className="hidden xl:block">
                                  Remover Filme
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between my-4 sm:my-2">
                  <span className="text-gray-900 text-lg font-semibold">
                    Total:
                  </span>
                  <span className="text-gray-900 text-lg font-bold">
                    R$ {cart.length * 15.99}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={handleClearCart}
                    className="flex items-center gap-2 bg-red-500 text-white h-10"
                  >
                    <Trash2 /> Limpar Carrinho
                  </Button>

                  <Button
                    onClick={handleConfirmRental}
                    className="bg-green-500 hover:bg-gray-600 text-white h-10"
                  >
                    Alugar Agora
                  </Button>
                </div>
              </>
            )}
          </AsideModal>
        </div>
      </nav>

      <SuccessRentalModal isOpen={isModalOpen} onClose={closeModal} />

      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={closeLoginModal}
          title="Login"
        >
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
        </LoginModal>
      )}
    </header>
  )
}

export default Header
