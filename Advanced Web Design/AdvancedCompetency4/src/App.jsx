
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./Components/AppNavbar.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

function App() {

  return (
    <>
        <AppNavbar />
        <HiringPage />
        <SplashPage />
        <MenuPage />
        <ErrorPage />
        IM HERE ON APP


    </>
  )
}

export default App
