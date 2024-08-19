'use client'

import { Heart, Search, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'

const movies = [
  {
    id: 1,
    title: 'Um Sonho de Liberdade',
    year: '1994',
    image: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    description:
      'Dois homens presos criam um laço ao longo dos anos, encontrando consolo e eventual redenção através de atos de decência comum.',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    rating: '9.3/10',
    duration: '142 min',
  },
  {
    id: 2,
    title: 'O Poderoso Chefão',
    year: '1972',
    image: 'https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg',
    description:
      'O envelhecido patriarca de uma dinastia criminosa transfere o controle de seu império clandestino para seu filho relutante.',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    rating: '9.2/10',
    duration: '175 min',
  },
  {
    id: 3,
    title: 'O Cavaleiro das Trevas',
    year: '2008',
    image: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
    description:
      'Quando o perigo conhecido como Coringa semeia o caos e a desordem em Gotham, Batman deve enfrentar um dos maiores testes psicológicos e físicos de sua capacidade de combater a injustiça.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    rating: '9.0/10',
    duration: '152 min',
  },
  {
    id: 4,
    title: 'Pulp Fiction: Tempo de Violência',
    year: '1994',
    image: 'https://m.media-amazon.com/images/I/51R05DgeQSL._AC_.jpg',
    description:
      'As vidas de dois assassinos de aluguel, um boxeador, um gângster e sua esposa, e um casal de assaltantes de restaurante se entrelaçam em quatro contos de violência e redenção.',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    rating: '8.9/10',
    duration: '154 min',
  },
  {
    id: 5,
    title: 'Forrest Gump: O Contador de Histórias',
    year: '1994',
    image: 'https://m.media-amazon.com/images/I/41ONFDCxVJL._AC_.jpg',
    description:
      'As presidências de Kennedy e Johnson, a Guerra do Vietnã, o escândalo de Watergate e outros eventos históricos se desenrolam da perspectiva de um homem do Alabama com um QI de 75, cujo único desejo é se reunir com sua namorada de infância.',
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    rating: '8.8/10',
    duration: '142 min',
  },
  {
    id: 6,
    title: 'Cidade de Deus',
    year: '2002',
    image: 'https://m.media-amazon.com/images/I/51bgPT6DjJL._AC_.jpg',
    description:
      'Buscapé, um jovem pobre da favela, cresce em meio à violência e criminalidade, mas sonha em se tornar um fotógrafo profissional.',
    director: 'Fernando Meirelles',
    cast: ['Alexandre Rodrigues', 'Leandro Firmino', 'Phellipe Haagensen'],
    rating: '8.6/10',
    duration: '130 min',
  },
  {
    id: 7,
    title: 'Central do Brasil',
    year: '1998',
    image: 'https://m.media-amazon.com/images/I/51bgPT6DjJL._AC_.jpg',
    description:
      'Uma professora aposentada escreve cartas para analfabetos na estação Central do Brasil, até que a jornada com um menino órfão transforma sua vida.',
    director: 'Walter Salles',
    cast: ['Fernanda Montenegro', 'Vinícius de Oliveira', 'Marília Pêra'],
    rating: '8.0/10',
    duration: '113 min',
  },
  {
    id: 8,
    title: 'Tropa de Elite',
    year: '2007',
    image: 'https://m.media-amazon.com/images/I/41A1Wi6JOsL._AC_.jpg',
    description:
      'O Capitão Nascimento, do BOPE, enfrenta a violência das favelas do Rio de Janeiro enquanto treina seu sucessor.',
    director: 'José Padilha',
    cast: ['Wagner Moura', 'André Ramiro', 'Caio Junqueira'],
    rating: '8.1/10',
    duration: '115 min',
  },
  {
    id: 9,
    title: 'O Auto da Compadecida',
    year: '2000',
    image: 'https://m.media-amazon.com/images/I/51l9VqKcTJL._AC_.jpg',
    description:
      'As aventuras do esperto João Grilo e seu amigo Chicó no nordeste brasileiro, culminando em um julgamento celestial.',
    director: 'Guel Arraes',
    cast: ['Matheus Nachtergaele', 'Selton Mello', 'Denise Fraga'],
    rating: '8.5/10',
    duration: '104 min',
  },
  {
    id: 10,
    title: 'O Grande Truque',
    year: '2006',
    image: 'https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg',
    description:
      'Dois mágicos rivais na Londres vitoriana lutam por supremacia, cada um disposto a sacrificar tudo para revelar o truque do outro.',
    director: 'Christopher Nolan',
    cast: ['Hugh Jackman', 'Christian Bale', 'Scarlett Johansson'],
    rating: '8.5/10',
    duration: '130 min',
  },
  {
    id: 11,
    title: 'O Iluminado',
    year: '1980',
    image: 'https://m.media-amazon.com/images/I/41CM0N5WNlL._AC_.jpg',
    description:
      'Um escritor leva sua família para um hotel isolado, onde forças malignas começam a afetar sua sanidade.',
    director: 'Stanley Kubrick',
    cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
    rating: '8.4/10',
    duration: '146 min',
  },
  {
    id: 12,
    title: 'Gladiador',
    year: '2000',
    image: 'https://m.media-amazon.com/images/I/41-sz-jq9tL._AC_.jpg',
    description:
      'Um general romano é traído e reduzido à escravidão, mas luta para vingar sua família e alcançar sua liberdade.',
    director: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    rating: '8.5/10',
    duration: '155 min',
  },
  {
    id: 13,
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    year: '2001',
    image: 'https://m.media-amazon.com/images/I/515ETYelw+L._AC_.jpg',
    description:
      'Um hobbit parte em uma jornada épica para destruir um anel poderoso e salvar a Terra Média das forças do mal.',
    director: 'Peter Jackson',
    cast: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
    rating: '8.8/10',
    duration: '178 min',
  },
  {
    id: 14,
    title: 'Matrix',
    year: '1999',
    image: 'https://m.media-amazon.com/images/I/41ltWJKaOeL._AC_.jpg',
    description:
      'Um hacker descobre a verdade sobre a realidade e lidera a rebelião contra máquinas que escravizaram a humanidade.',
    director: 'Lana Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    rating: '8.7/10',
    duration: '136 min',
  },
  {
    id: 15,
    title: 'O Resgate do Soldado Ryan',
    year: '1998',
    image: 'https://m.media-amazon.com/images/I/51NR49xMQML._AC_.jpg',
    description:
      'Durante a Segunda Guerra Mundial, um grupo de soldados americanos é enviado para resgatar o último sobrevivente de uma família, perdido atrás das linhas inimigas.',
    director: 'Steven Spielberg',
    cast: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
    rating: '8.6/10',
    duration: '169 min',
  },
]

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const handleSearch = (query) => {
    setSearchQuery(query)
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()),
      ),
    )
  }
  const openModal = (movie) => {
    setSelectedMovie(movie)
  }
  const closeModal = () => {
    setSelectedMovie(null)
  }
  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter((id) => id !== movieId)
      } else {
        return [...prevFavorites, movieId]
      }
    })
  }

  const addToCart = (movieId) => {
    setCart((prevCart) => {
      if (prevCart.includes(movieId)) {
        return prevCart
      } else {
        return [...prevCart, movieId]
      }
    })
  }
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id))
  return (
    <div className={`min-h-screen bg-gray-100 p-4`} tabIndex={0}>
      <div className="mb-4">
        <div className="flex items-center bg-white rounded-md shadow-md p-2">
          <Search className="text-gray-400 text-xl mx-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-grow outline-none text-gray-600"
            placeholder="Search for movies..."
            aria-label="Search for movies"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer relative"
          >
            <Image
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover group-hover:opacity-75"
              width={100}
              height={192}
              onClick={() => openModal(movie)}
              priority
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-gray-900 truncate group-hover:text-blue-500">
                {movie.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4"> {movie.year} </p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {movie.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(movie.id)
                }}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
              >
                <Heart
                  className={`text-xl ${favorites.includes(movie.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                  aria-label={
                    favorites.includes(movie.id)
                      ? 'Remove from favorites'
                      : 'Add to favorites'
                  }
                />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  addToCart(movie.id)
                }}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
              >
                Add to Cart <ShoppingCart className="inline-block ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-8">Footer</footer>

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMovie.isFavoritesList ? (
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">Favorite Movies</h2>
                {favoriteMovies.length > 0 ? (
                  <ul className="space-y-4">
                    {favoriteMovies.map((movie) => (
                      <li
                        key={movie.id}
                        className="flex items-center space-x-4"
                      >
                        <Image
                          src={movie.image}
                          alt={movie.title}
                          className="w-16 h-24 object-cover rounded"
                          width={64}
                          height={96}
                          priority
                        />
                        <div>
                          <h3 className="font-semibold">{movie.title}</h3>
                          <p className="text-sm text-gray-600">{movie.year}</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              addToCart(movie.id)
                            }}
                            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-700"
                          >
                            Add to Cart
                            <ShoppingCart className="inline-block ml-2" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>You havent added any favorites yet.</p>
                )}
              </div>
            ) : (
              <>
                <div className="relative">
                  <Image
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    width={100}
                    height={256}
                    className="w-full h-64 object-cover"
                    priority
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <X className="text-xl" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedMovie.id)}
                    className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md"
                  >
                    <Heart
                      className={`text-xl ${favorites.includes(selectedMovie.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                      aria-label={
                        favorites.includes(selectedMovie.id)
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                    />
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedMovie.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedMovie.year} | {selectedMovie.duration} |
                    {selectedMovie.rating}
                  </p>
                  <p className="text-gray-800 mb-4">
                    {selectedMovie.description}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Director:</span>
                    {selectedMovie.director}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Cast:</span>
                    {selectedMovie.cast.join(', ')}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(selectedMovie.id)
                    }}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
                  >
                    Add to Cart <ShoppingCart className="inline-block ml-2" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default Dashboard
