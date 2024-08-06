import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Icons = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Recursos para Descargar Iconos Web
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://fontawesome.com/'}>
              <Card
                img='/images/iconos/font-awesome.png'
                className='w-[600px] h-[300px]'
                description='Ofrece una amplia colección de iconos escalables que se pueden integrar fácilmente mediante CSS o JavaScript.'
                alt='Logo de página de font-awesome'
              />
            </Link>
            <Link href={'https://fonts.google.com/icons'}>
              <Card
                img='/images/iconos/google-material-icons.png'
                className='w-[600px] h-[300px]'
                description='Biblioteca de iconos basada en Material Design de Google, disponibles en diferentes estilos y formatos.'
                alt='Logo de página de google material icons  '
              />
            </Link>
            <Link href={'https://heroicons.com/'}>
              <Card
                img='/images/iconos/heroicons.png'
                className='w-[600px] h-[300px]'
                description='Conjunto de iconos SVG gratuitos, diseñados específicamente para interfaces de usuario, fácil de integrar en proyectos web.'
                alt='Logo de página de hero icons'
              />
            </Link>
            <Link href={'https://feathericons.com/'}>
              <Card
                img='/images/iconos/feather-icons.png'
                className='w-[600px] h-[300px]'
                description=' Conjunto de iconos SVG simples y minimalistas, ideales para interfaces limpias y modernas.'
                alt='Logo de página de feather icons'
              />
            </Link>
            <Link href={'https://icons8.com/line-awesome'}>
              <Card
                img='/images/iconos/line-awesome.png'
                className='w-[600px] h-[300px]'
                description='Alternativa a Font Awesome, con un estilo de línea delgado y moderno.'
                alt='Logo de página de line awesome'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Icons
