import React, {useEffect} from "react";
import '../index.css'
import MenuTable from "../Components/MenuTable.jsx";
import ChickenBurrito from "../assets/images/ChickenBurrito.jpeg";
import BeefBurrito from "../assets/images/beefburrito.jpeg"
import BeefWellington from "../assets/images/beefwellington.jpeg"
import DogDish from "../assets/images/dogsdish.jpeg"
import DogKennel from "../assets/images/dogkennel.jpeg"

const menuItems = [
    {
        image: ChickenBurrito,
        name: "Chicken Burrito",
        description:
            "Plump chicken with fluffy rice, doused in our homemade broccoli sauce, made perfect for pups.",
        price: 50.0,
    },
    {
        image: BeefBurrito,
        name: "Beef Burrito",
        description:
            "Beefiest of beefs hiding in brown rice. Flooded with our creamy white alfredo sauce, for the good pups.",
        price: 75.0,

    },
    {
        image: BeefWellington,
        name: "Beef Wellington",
        description:
            "For those pups that enjoy the earthy taste of beef and love to dig in the shitake mushroom filling.",
        price: 150.0,
    },
    {
        image: DogDish,
        name: "Dogs Dish",
        description:
            "18oz T-Bone Steak with a side of fries or mashed potatoes. For the Pups to become Dogs.",
        price: 25.0,
    },
    {
        image: DogKennel,
        name: "Dogs Kennel",
        description:
            "Three types of sausages (Chorizo, Bratwurst, and Italian Sausage) served with grilled veggies.",
        price: 45.0,
    }
];

const MenuPage = () => {
    useEffect(() => {
        document.body.classList.remove("Home", "Hiring");
        document.body.classList.add("Menu");

        return () => {
            document.body.classList.remove("Menu");
        };
    }, []);

    return (
        <div>
            <MenuTable items={menuItems} />
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

export default MenuPage;
