
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Info from './Pages/Info'
import Saved from './Pages/Saved'
import View from './Pages/View'
import Download from './Pages/Download'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer,} from 'react-toastify';
function App() {

  // pages:HomePage,Resume,userInfo,ViewResume,All saved resume,Download resumes,page not found
  // components: Header,Footer,userinfo,Resume Preview,Edit resume
  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/resume' element={<Resume/>}/>
     <Route path='/resume-details' element={<Info/>}/>
     <Route path='/all-resume' element={<Saved/>}/>
     <Route path='/resume/:id' element={<View/>}/>
     <Route path='/downloads' element={<Download/>}/>
     <Route path='/*' element={<Pnf/>}/>
     </Routes>
     <Footer/>
    <ToastContainer position="top-right" theme="colored" autoClose={3000} />
    </>
  )
}

export default App
