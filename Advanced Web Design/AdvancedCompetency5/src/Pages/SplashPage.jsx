import{useEffect} from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SplashPage = () => {
    useEffect(() => {
        // Set background class
        document.body.classList.remove("Menu", "Hiring");
        document.body.classList.add("Home");

        return () => {
            document.body.classList.remove("Home");
        };
    }, []);



    return (
        <div className="Home">
            <div className="container text-center mt-5">
                <h1>Welcome to PuppyChow!</h1>
                <h3 className="row-cols-lg-1 mt-3" >
                    Release your inner dog or pup at our puppy chow kennal cafe. Hang out
                    with fellow friends, make friends, be social, and we even have a
                    non-social corner where you can meet other non-social pups.
                </h3>
            </div>
            <footer className="mt-5 p-4 bg-dark text-white">
                <div className="container d-flex justify-content-between flex-wrap">
                    <div className="location">
                        <h3>Location</h3>
                        <p>30th 15th Street, Lamda TX, 73625</p>
                    </div>
                    <div className="5Stars">
                        <h3>Rate Us 5 Stars</h3>
                    </div>
                    <div className="contact">
                        <h3>Contact Us</h3>
                        <p>+1 (555) 555-5555</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SplashPage;
