

import HeroSection from './Components/HeroSection'
import Navber from './Components/Navber'
import AboutPage from './Pages/AboutPage'
import MyEducation from './Pages/MyEducation'
import MyProjects from './Pages/MyProjects'
import MySkiles from './Pages/MySkiles'

function App() {


  return (
    <div className=''>
     <Navber></Navber>
     <HeroSection></HeroSection>
     <div className='container xl:w-9/12 mx-auto px-6 py-6'>
          <AboutPage></AboutPage>
          <MySkiles></MySkiles>
          <MyEducation></MyEducation>
          <MyProjects></MyProjects>
     </div>
   
    </div>
  )
}

export default App
