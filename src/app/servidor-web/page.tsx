import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const ServidorWeb = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
          Herramientas para Trabajar con APIs en el Lado del Servidor
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://www.postman.com/'}>
              <Card
                img='/images/servidor-web/postman.png'
                className='w-[600px] h-[300px]'
                description='Plataforma colaborativa para el desarrollo y pruebas de APIs. Permite crear, probar, documentar y monitorear APIs fácilmente.'
                alt='Logo de postman'
              />
            </Link>
            <Link href={'https://insomnia.rest/'}>
              <Card
                img='/images/servidor-web/insomnia-rest.png'
                className='w-[600px] h-[300px]'
                description='Cliente de API REST que facilita la creación y prueba de solicitudes HTTP, con soporte para autenticación, variables de entorno y más.'
                alt='Logo de Insomnia'
              />
            </Link>
            <Link href={'https://docs.postgrest.org/en/v12/'}>
              <Card
                img='/images/servidor-web/postg-rest.png'
                className='w-[600px] h-[300px]'
                description='Servidor que convierte una base de datos PostgreSQL en una API RESTful automáticamente.'
                alt='Logo de postgRest '
              />
            </Link>
            <Link href={'https://loopback.io/'}>
              <Card
                img='/images/servidor-web/loopBack.png'
                className='w-[600px] h-[300px]'
                description='Framework de Node.js para crear APIs RESTful con conexión a bases de datos, soporte para múltiples bases de datos y generación de SDKs.'
                alt='Logo de loop back'
              />
            </Link>
            <Link href={'https://swagger.io/tools/swagger-codegen/'}>
              <Card
                img='/images/servidor-web/swegger.png'
                className='w-[600px] h-[300px]'
                description='Generador de código que produce clientes y servidores a partir de una especificación OpenAPI.'
                alt='Logo de Swagger Codegen'
              />
            </Link>
            <Link href={'https://www.apicur.io/studio/'}>
              <Card
                img='/images/servidor-web/apiscurio-studio.png'
                className='w-[600px] h-[300px]'
                description=' Editor de diseño de API basado en OpenAPI que facilita la creación y gestión de especificaciones de API.'
                alt='Logo de Apicurio Studio'
              />
            </Link>
           
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServidorWeb
