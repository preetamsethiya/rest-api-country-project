import { Outlet, Route, Routes } from "react-router"
import Header from './Components/CountryProject/Header'
import { useState } from "react"





const App = () => {
   const [isDark, setIsDark]=useState(JSON.parse(localStorage.getItem('theme')))
   return (
      <>
      <Header theme={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/>


      {/* <Routes>
         <Route element={<Header/>}>

         <Route index element={<Country/>}/>
         </Route>
      </Routes> */}

     

      </>
   )
}

export default App