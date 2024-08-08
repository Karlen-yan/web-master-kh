import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Fotos = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Recursos para Descargar y Editar Imágenes{' '}
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://unsplash.com/es'}>
              <Card
                img='/images/fotos/unSplash.png'
                className='w-[600px] h-[300px]'
                description='Proporciona una vasta colección de fotos de alta calidad y libres de derechos para uso personal y comercial.'
                alt='Logo de Upsplash'
              />
            </Link>
            <Link href={'https://www.pexels.com/es-es/'}>
              <Card
                img='/images/fotos/pexels.png'
                className='w-[600px] h-[300px]'
                description='Ofrece una amplia variedad de fotos y vídeos gratuitos para uso personal y comercial.'
                alt='Logo de Pexels'
              />
            </Link>
            <Link href={'https://pixabay.com/es/'}>
              <Card
                img='/images/fotos/pixabay.png'
                className='w-[600px] h-[300px]'
                description='Biblioteca de fotos, ilustraciones, vectores y vídeos gratuitos y de alta calidad.'
                alt='Logo de Pixabay'
              />
            </Link>
            <Link href={'https://www.canva.com/'}>
              <Card
                img='/images/fotos/canva.png'
                className='w-[600px] h-[300px]'
                description='Herramienta en línea para diseñar gráficos, editar fotos y crear contenido visual de manera sencilla. Ofrece una versión gratuita y una de pago con características adicionales.'
                alt='Logo de Canva'
              />
            </Link>
            <Link href={'https://www.photopea.com/'}>
              <Card
                img='/images/fotos/photopea.png'
                className='w-[600px] h-[300px]'
                description='Editor de fotos en línea gratuito que admite archivos PSD, XCF, Sketch, XD y CDR, ofreciendo una experiencia similar a Adobe Photoshop.'
                alt='Logo de Photopea'
              />
            </Link>
            <Link href={'https://www.remove.bg/es'}>
              <Card
                img='/images/fotos/remove-bg.png'
                className='w-[600px] h-[300px]'
                description='Herramienta en línea que permite eliminar el fondo de las imágenes de manera rápida y precisa.'
                alt='Logo de remove.bg'
              />
            </Link>
            <Link href={'https://tinypng.com/'}>
              <Card
                img='/images/fotos/tinypng.png'
                className='w-[600px] h-[300px]'
                description='Herramienta para comprimir imágenes PNG y JPEG, reduciendo su tamaño sin perder calidad.'
                alt='Logo de tinypng'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Fotos
