import {BrowserRouter} from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import { Element, scroller } from 'react-scroll';

const App=()=>{


  return (
 <BrowserRouter>
   <div className="relative z-0 bg-primary">
     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
     
     <About />
      <Experience />
      <Works />
     
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
         </div>
      </div>
   </div>
 </BrowserRouter>
  )
}

export default App