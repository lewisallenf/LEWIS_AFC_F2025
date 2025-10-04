import HiringForm from "../Components/HiringForm.jsx";
import '../index.css'

import React, { useEffect } from "react";

const HiringPage = () => {
    useEffect(() => {
        document.body.classList.remove("Home", "Menu");
        document.body.classList.add("Hiring");

        return () => {
            document.body.classList.remove("Hiring");
        };
    }, []);

    return (
        <>
            <h1>Welcome To The PuppyChow Application Form!!!!!!</h1>
            <HiringForm/>
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
        </>
    )
}

export default HiringPage