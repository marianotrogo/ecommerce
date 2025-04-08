import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io"
import { Link } from "react-router-dom"
import {FiPhoneCall} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
                    <p className="text-gray-500 mb-4">Be the first to hear about new productos, exlcuisee, events, and online offers</p>
                    <p className="font-medium text-sm text-gray-700">Sign Up a dn get 10% off yout first order</p>

                    {/* newsleetr form */}
                    <form className="flex">
                        <input type="email" placeholder="Enter your Email" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                        <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Suscribete</button>
                    </form>
                </div>
                {/* Shop Links */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Comprar</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Productos</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Contacto</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Nosotros</Link>
                        </li>
                    </ul>
                </div>
                {/* Support Link */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Consultas</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Cambios y Devoluciones</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Envios</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-600 transition-colors">Preguntas frecuentes</Link>
                        </li>
                    </ul>
                </div>
                {/* Redes */}
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Siguenos</h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                            <IoLogoInstagram className="h-4 w-4"/>
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                            <IoLogoWhatsapp className="h-4 w-4"/>
                        </a>
                    </div>
                    <p className="text-gray-500"><FiPhoneCall className="inline-block mr-2 "/>381xxxxx</p>  
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 ">
                <p className="text-gray-500 text-sm tracking-tighter text-center">
                    2025, ETM All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
