import{Outlet} from "react-router-dom";
import AppNavbar from "./AppNavbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
    return(
        <>
            {/*Navbar shows up on the top of every page*/}
            <AppNavbar/>
            {/*Main content area for each page */}
            <div>
                {/*The child route (SplashPage, ResultsPage, or FormPage) will be displayer here */}
                <Outlet />
            </div>
        </>
    )

}
export default AppLayout;