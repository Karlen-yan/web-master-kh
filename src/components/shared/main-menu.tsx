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
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Maqetación de página web
        </Link>
        <Link
          href='/colores'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Colores
        </Link>
        <Link
          href='/animaciones'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Animaciones
        </Link>
        <Link
          href='/iconos'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Iconos
        </Link>

        <Link
          href='/herramientas-fotos'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Imagenes
        </Link>
        <Link
          href='/servidor-web'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Servidores web
        </Link>
        <Link
          href='/editores-codigo'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Editores
        </Link>

        <Link
          href='/extenciones-chrom'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Extenciones
        </Link>

        <Link
          href='/trabajo-equipo'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Notas y trabajo en equipo
        </Link>

        <Link
          href='/ai'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          AI
        </Link>

        <Link
          href='/others'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Otros
        </Link>
      </li>

      <h1 className='pt-4 text-2xl font-bold'>
        Canales recomendadas para aprender Desarrollar páginas web{' '}
      </h1>
      <li className='flex flex-col lg:flex-row items-center gap-4'>
        <Link
          href='/'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Maqetación página web
        </Link>
        <Link
          href='/colors'
          className=' rounded-md bg-[#3972BF] text-white pt-1 pb-1 pr-3 pl-3 mt-3 hover:bg-[#9cb8df]  hover:text-[#3972BF]'
        >
          Colores
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
