import React from 'react'
import { Heart, LogOut, Settings, User } from 'lucide-react'
import MenuButton from './MenuButton'

interface UserMenuProps {
  showUserMenu: boolean
  toggleUserMenu: () => void
  openLoginModal: () => void
}

const UserMenu = ({
  showUserMenu,
  toggleUserMenu,
  openLoginModal,
}: UserMenuProps) => (
  <>
    <div
      id="user-menu"
      role="dialog"
      aria-modal="true"
      className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform ${
        showUserMenu ? 'translate-x-0' : 'translate-x-full'
      } w-64 z-50`}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Menu de Usuário
        </h2>

        <MenuButton
          icon={Settings}
          label="Configurações"
          onClick={() => {}}
          ariaLabel="Configurações"
        />

        <MenuButton
          icon={Heart}
          label="Favoritos"
          onClick={() => {
            toggleUserMenu()
            // openModal({ ...favoriteMovies[0], isFavoritesList: true })
          }}
          ariaLabel="Favoritos"
        />

        <MenuButton
          icon={User}
          label="Login"
          onClick={() => {
            toggleUserMenu()
            openLoginModal()
          }}
          ariaLabel="Login"
        />

        <MenuButton
          icon={LogOut}
          label="Sair"
          onClick={() => {}}
          ariaLabel="Logout"
        />
      </div>
    </div>

    {showUserMenu && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleUserMenu}
        aria-label="Fechar modal"
      ></div>
    )}
  </>
)

export default UserMenu
