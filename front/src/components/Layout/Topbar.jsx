import {IoLogoInstagram} from 'react-icons/io'

const Topbar = () => {
    return (
        <div className="bg-yellow-500 text-white">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div className='hidden md:flex items-center space-x-4'> 
                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className='h-5 w-5'/>
                    </a> 
                </div>
                <div className='text-sm text-center flex-grow'>
                    <span>Envios a todo el pais</span>
                </div>
                <div className='text-sm text-white hidden md:block'>
                    <a href="tel:+5493816460328" className='hover:text-gray-300'>381 6 460 328</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
