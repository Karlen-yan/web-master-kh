import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Animations = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Recursos de Animaciones Web Predefinidas
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://animista.net/'}>
              <Card
                img='/images/animations/animista.png'
                className='w-[600px] h-[300px]'
                description='Proporciona animaciones CSS predefinidas que se pueden personalizar y exportar como código para usar en el sitio web.'
                alt='Logo de animista una página de animationes'
              />
            </Link>
            <Link href={'https://animate.style/'}>
              <Card
                img='/images/animations/animate.png'
                className='w-[600px] h-[300px]'
                description='Una biblioteca de animaciones CSS3 que puedes aplicar fácilmente a elementos del web para crear efectos de entrada, salida y otros.'
                alt='Logo de animate una página de animaciones'
              />
            </Link>
            <Link href={'https://michalsnik.github.io/aos/'}>
              <Card
                img='/images/animations/AOS.png'
                className='w-[600px] h-[300px]'
                description='Biblioteca de JavaScript para animaciones que se activan cuando los elementos entran en el viewport al hacer scroll.'
                alt='Logo de AOS una página de animaciones'
              />
            </Link>
            <Link href={'https://rive.app/'}>
              <Card
                img='/images/animations/Rive.png'
                className='w-[600px] h-[300px]'
                description='Permite explorar y descargar animaciones interactivas vectoriales que se pueden integrar fácilmente en sitios web.'
                alt='Logo de AOS una página de animaciones'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Animations
