import Link from 'next/link'

const MainMenu = () => {
  return (
    <ul>
      <h1 className='pt-4 text-2xl font-bold'>
        Recursos para desarrolladores web
      </h1>
      <li className='flex flex-col lg:flex-row items-center gap-4'>
        <Link
          href='/maquetacion-web'
          className='menu-booten-link rounded-md  text-white pt-1 pb-1 pr-3 pl-3 mt-3'
        >
          Maqetación de página web
        </Link>
        <Link
          href='/colores'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Colores
        </Link>
        <Link
          href='/animaciones'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Animaciones
        </Link>
        <Link
          href='/iconos'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Iconos
        </Link>

        <Link
          href='/herramientas-fotos'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Imagenes
        </Link>
        <Link
          href='/servidor-web'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Servidores web
        </Link>
        <Link
          href='/editores-codigo'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Editores
        </Link>

        <Link
          href='/extenciones-chrom'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Extenciones
        </Link>

        <Link
          href='/trabajo-equipo'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Notas y trabajo en equipo
        </Link>

        <Link
          href='/ai'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          AI
        </Link>

        <Link
          href='/otros'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Otros
        </Link>
      </li>

      <h1 className='pt-4 text-2xl font-bold'>
        Canales recomendadas para aprender Desarrollar páginas web
      </h1>
      <li className='flex flex-col lg:flex-row items-center gap-4'>
        <Link
          href='/canales-recomendados'
          className='menu-booten-link rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  '
        >
          Canales de Desarrollo app web         
          </Link>
      </li>
    </ul>
  )
}

export default MainMenu
