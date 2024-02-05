import NavbarSimple from "./components/NavbarSimple"
import Footer from "./components/Footer"
import Body from "./components/Body"
const App = () => {
  return ( 
    <div className="dark:bg-darky2">
      <NavbarSimple/>
      <Body/>
      <Footer/>
    </div>
  )
}
export default App