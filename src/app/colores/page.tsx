import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Colors = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Herramientas Gratuitas para Generación de Paletas de Colores
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://coolors.co/'}>
              <Card
                img='/images/colors-page-images/colorss.png'
                className='w-[600px] h-[300px]'
                description='Una herramienta fácil de usar para generar paletas de colores. Se puede generar paletas al azar o explorar combinaciones predefinidas.'
                alt='Logo de página de Colors'
              />
            </Link>
            <Link
              href={'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF'}
            >
              <Card
                img='/images/colors-page-images/paletton.png'
                className='w-[600px] h-[300px]'
                description='Una herramienta avanzada para generar esquemas de colores basados en la teoría del color. Ofrece una interfaz interactiva para experimentar con diferentes combinaciones.'
                alt='Logo de Paletton, pagina de generar esquemas de colores'
              />
            </Link>
            <Link href={'https://colorhunt.co/'}>
              <Card
                img='/images/colors-page-images/color-hunt.png'
                className='w-[600px] h-[300px]'
                description='Una colección curada de paletas de colores modernas y atractivas. Los usuarios pueden explorar y guardar sus paletas favoritas.'
                alt='Logo de Color-hunt, pagina de coleccón de paletas de colores'
              />
            </Link>
            <Link href={'http://colormind.io/'}>
              <Card
                img='/images/colors-page-images/colormind-logo.png'
                className='w-[600px] h-[300px]'
                description='Utiliza inteligencia artificial para generar esquemas de colores. Se puede generar paletas basadas en imágenes o desde cero.'
                alt='Logo de colormind, pagina de coleccón de paletas de colores'
              />
            </Link>
            <Link href={'https://mycolor.space/'}>
              <Card
                img='/images/colors-page-images/color-space.png'
                className='w-[600px] h-[300px]'
                description='Generador de degradados y paletas de colores. Ofrece herramientas adicionales para explorar colores complementarios, triádicos, y más.'
                alt='Logo de ColorSpace, pagina de coleccón de paletas de colores'
              />
            </Link>
            <Link href={'https://www.colorzilla.com/es/'}>
              <Card
                img='/images/colors-page-images/colozilla.png'
                className='w-[600px] h-[300px]'
                description='Una extensión del navegador que permite obtener los colores de cualquier página web. Ofrece un selector de color avanzado y una herramienta de gradientes CSS.'
                alt='Logo de ColorZilla, pagina de coleccón de paletas de colores'
              />
            </Link>
            <Link href={'https://www.colorhexa.com/463636'}>
              <Card
                img='/images/colors-page-images/ColorHexa.png'
                className='w-[600px] h-[300px]'
                description='Proporciona información detallada sobre colores, incluyendo valores HEX, RGB, y HSL. También ofrece herramientas para generar paletas, degradados, y mucho más.'
                alt='Logo de ColorZilla, pagina de coleccón de paletas de colores'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Colors
