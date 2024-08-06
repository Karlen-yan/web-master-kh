import Container from './container'
import Logo from './logo'
import MainMenu from './main-menu'

const Header = () => {
  return (
    <section>
      <div className='flex flex-col justify-center items-center bg-[#E6EDF7]'>
        <Logo />
      </div>
      <div className=''>
        <Container>
          <MainMenu />
        </Container>
      </div>
    </section>
  )
}

export default Header
