import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Tripadvisor" className="w-10 h-10 mr-2" />
            <span className="text-xl font-bold text-green-500">Tripadvisor</span>
          </div>

          {/* Navegación principal */}
          <nav className="hidden md:flex space-x-6">
          </nav>

          {/* Botones de usuario */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-500">
              <img src="/api/placeholder/24/24" alt="Language" className="w-6 h-6" />
            </button>
            <span className="font-semibold">PEN</span>
            <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* Barra de búsqueda 
      
      
            <a href="#" className="text-gray-600 hover:text-green-500">Descubrir</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Viajes</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Escribir opinión</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Más</a>

      
      
      
      
      */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">¿Adónde?</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-500 font-semibold">Buscar todo</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-500">Hoteles</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-500">Cosas que hacer</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-500">Restaurantes</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-500">Vuelos</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-500">Alquileres de vacaciones</Button>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Lugares para visitar, cosas que hacer, hoteles..."
              className="w-full pl-10 pr-20 py-3 rounded-full border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;