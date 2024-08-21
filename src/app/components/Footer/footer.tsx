import React from 'react'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold">
            Loca<span className="text-yellow-500">DO´R</span>
          </h2>
          <p className="text-gray-400 text-center">
            A sua plataforma de locação de filmes online com uma vasta coleção
            para todos os gostos.
          </p>
        </div>

        <div className="flex space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-gray-400 hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 text-gray-400 hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-gray-400 hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <Github className="w-6 h-6 text-gray-400 hover:text-yellow-500 transition-colors" />
          </a>
        </div>

        <div className="mt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LocaDO´R. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
