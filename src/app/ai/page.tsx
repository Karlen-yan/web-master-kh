import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Ai = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
          Herramientas de Inteligencia Artificial (AI) para Desarrolladores y Equipos
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://openai.com/chatgpt/'}>
              <Card
                img='/images/ai/ChatGPT.png'
                className='w-[600px] h-[300px]'
                description='Modelo de lenguaje avanzado que puede generar texto, ayudar con la escritura de código, resolver dudas técnicas, crear contenido y más. Ideal para soporte en tareas de desarrollo y creación de contenido.'
                alt='Logo de ChatGPT (OpenAI)'
              />
            </Link>
            <Link href={'https://github.com/features/copilot'}>
              <Card
                img='/images/ai/Git-hub-COPILOT.png'
                className='w-[600px] h-[300px]'
                description='Asistente de codificación impulsado por AI, integrado en editores como VS Code. Sugerencias de código, completado automático y ayuda en la escritura de funciones y estructuras complejas.'
                alt='Logo de GitHub Copilot.'
              />
            </Link>
            <Link href={'https://www.figma.com/ai/'}>
              <Card
                img='/images/ai/FigmaAi.png'
                className='w-[600px] h-[300px]'
                description=' Integración de inteligencia artificial en Figma para ayudar en el diseño de interfaces, generar automáticamente componentes de UI y mejorar la colaboración en proyectos de diseño.'
                alt='Logo de Figma Ai.'
              />
            </Link>
            <Link href={'https://runwayml.com/'}>
              <Card
                img='/images/ai/runway.png'
                className='w-[600px] h-[300px]'
                description='Plataforma que permite a los creadores y desarrolladores usar modelos de AI para generar y editar videos, imágenes y texto, facilitando tareas creativas con aprendizaje automático.'
                alt='Logo de Run way.'
              />
            </Link>
            <Link href={'https://www.deepl.com/es/translator'}>
              <Card
                img='/images/ai/deepLText.png'
                className='w-[600px] h-[300px]'
                description='Traductor basado en AI que ofrece traducciones de alta calidad, siendo útil para equipos que trabajan en proyectos multilingües o necesitan adaptar contenido a diferentes idiomas.'
                alt='Logo de Run way.'
              />
            </Link>
            <Link href={'https://www.jasper.ai/'}>
              <Card
                img='/images/ai/jasper.png'
                className='w-[600px] h-[300px]'
                description='Herramienta de escritura asistida por AI que ayuda a crear contenido de marketing, publicaciones de blog, descripciones de productos, y más, optimizando la creación de contenido.'
                alt='Logo de Jasper - Ai.'
              />
            </Link>
         
            <Link href={'https://www.designify.com/'}>
              <Card
                img='/images/ai/designify.png'
                className='w-[600px] h-[300px]'
                description='Herramienta AI para diseñadores que permite automatizar la creación de imágenes, eliminando fondos, ajustando colores y realizando otras ediciones de forma rápida y eficiente.'
                alt='Logo de Designify'
              />
            </Link>

            <Link href={'https://www.copy.ai/'}>
              <Card
                img='/images/ai/copy-Ai.png'
                className='w-[600px] h-[300px]'
                description='Plataforma de generación de texto con AI, diseñada para crear rápidamente contenido de marketing, anuncios, descripciones de productos y más.'
                alt='Logo de Copy Ai'
              />
            </Link>

            <Link href={'https://www.tabnine.com/'}>
              <Card
                img='/images/ai/tabnine.png'
                className='w-[600px] h-[300px]'
                description='Asistente de código basado en AI que proporciona completado automático de código, aprendizaje de patrones de uso y asistencia en múltiples lenguajes de programación.'
                alt='Logo de TabNine'
              />
            </Link>

            <Link href={'https://lumen5.com/'}>
              <Card
                img='/images/ai/lumen5.png'
                className='w-[600px] h-[300px]'
                description='Herramienta AI que convierte texto en videos de manera automática, facilitando la creación de contenido visual atractivo para redes sociales y marketing.'
                alt='Logo de Lumen5'
              />
            </Link>

            <Link href={'https://codewp.ai/'}>
              <Card
                img='/images/ai/CodeWP.png'
                className='w-[600px] h-[300px]'
                description='Plataforma AI diseñada para generar y optimizar código para sitios web WordPress, ayudando a desarrolladores a mejorar la eficiencia en la construcción de sitios.'
                alt='Logo de CodeWP'
              />
            </Link>

            <Link href={'https://scribehow.com/'}>
              <Card
                img='/images/ai/Scribe.png'
                className='w-[600px] h-[300px]'
                description='Herramienta que genera tutoriales y guías paso a paso automáticamente, capturando procesos en tu pantalla, ideal para crear documentación y entrenamiento de usuarios.'
                alt='Logo de Scribe'
              />
            </Link>


          </div>
        </div>
      </Container>
    </section>
  )
}

export default Ai
