import Container from './container'
import Logo from './logo'
import MainMenu from './main-menu'

const Header = () => {
  return (
    <section>
      <div className='flex flex-col justify-center items-center bg-[#E6EDF7] border-b-2 border-[#3972BF]'>
        
        <Logo />

      </div>
      <div className=''>
        <Container>
          <div className='mt-6 mb-12'>
          <MainMenu />

          </div>
        </Container>
      </div>
    </section>
  )
}

export default Header
