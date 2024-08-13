import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const TeamWork = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
          Herramientas para Planificación de Proyectos y Colaboración en Equipos
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          <Link href={'https://trello.com/es'}>
              <Card
                img='/images/teamwork/trello.png'
                className='w-[600px] h-[300px]'
                description='Herramienta de gestión de proyectos basada en tableros y tarjetas. Ideal para organizar tareas, establecer prioridades y hacer seguimiento del progreso en equipo.'
                alt='Logo de trello'
              />
            </Link>
            <Link href={'https://asana.com/es'}>
              <Card
                img='/images/teamwork/asana.png'
                className='w-[600px] h-[300px]'
                description='Herramienta de gestión de proyectos que permite planificar, organizar y seguir el trabajo de los equipos. Ofrece funcionalidades para asignar tareas, establecer fechas límite y colaborar en proyectos.'
                alt='Logo de asana'
              />
            </Link>
            <Link href={'https://docs.github.com/es/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects'}>
              <Card
                img='/images/teamwork/github.png'
                className='w-[600px] h-[300px]'
                description='Herramienta integrada en GitHub para la planificación de proyectos, permitiendo a los equipos gestionar tareas y proyectos utilizando tableros kanban y listas de tareas.'
                alt='Logo de github'
              />
            </Link>
            <Link href={'https://about.gitlab.com/'}>
              <Card
                img='/images/teamwork/gitLab.png'
                className='w-[600px] h-[300px]'
                description='Plataforma completa de DevOps que incluye herramientas de planificación, gestión de tareas, integración continua y control de versiones con Git.'
                alt='Logo de gitlab'
              />
            </Link>
            <Link href={'https://clickup.com/'}>
              <Card
                img='/images/teamwork/clickUp.png'
                className='w-[600px] h-[300px]'
                description='Plataforma de productividad y gestión de tareas que permite a los equipos planificar, rastrear y colaborar en proyectos, con características como listas de tareas, tableros kanban, y más.'
                alt='Logo de ClickUp'
              />
            </Link>
            <Link href={'https://monday.com/lang/es'}>
              <Card
                img='/images/teamwork/monday.png'
                className='w-[600px] h-[300px]'
                description='Plataforma de gestión de trabajo que facilita la colaboración en equipo, la planificación de proyectos y la asignación de tareas con una interfaz visual y personalizable.'
                alt='Logo de monday'
              />
            </Link>
            <Link href={'https://www.notion.so/es-es'}>
              <Card
                img='/images/teamwork/Nation.png'
                className='w-[600px] h-[300px]'
                description='Herramienta todo-en-uno para la organización del trabajo, que combina notas, bases de datos, tareas y wikis, ideal para planificar y documentar proyectos en equipo.'
                alt='Logo de Nation'
              />
            </Link>
            <Link href={'https://miro.com/es/'}>
              <Card
                img='/images/teamwork/miro.jpg'
                className='w-[600px] h-[300px]'
                description='Herramienta de pizarra digital colaborativa que facilita la lluvia de ideas, la planificación de proyectos y la colaboración en tiempo real en equipos distribuidos.'
                alt='Logo de miro'
              />
            </Link>
            <Link href={'https://toggl.com/plan/index'}>
              <Card
                img='/images/teamwork/Toggl-Plan.png'
                className='w-[600px] h-[300px]'
                description='Herramienta de planificación de proyectos visual que permite gestionar tareas, cronogramas y recursos de manera simple y efectiva.'
                alt='Logo de toggl'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TeamWork
