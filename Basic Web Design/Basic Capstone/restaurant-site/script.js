const menuItems = [
        {
            name: "Chicken Burrito",
            description: "Plump chicken with fluffy rice, doused in our homemade broccoli sauce, made perfect for pups.",
            price: 50.0,
            image: "Images/ChickenBurrito.jpeg"
        },
        {
            name: "Beef Burrito",
            description: "Beefiest of beefs hiding in brown rice. Flooded with our creamy white alfredo sauce, for the good pups.",
            price: 75.0,
            image: "Images/beefburrito.jpeg"
        },
        {
            name: "Beef Wellington",
            description: "For those pups that enjoy the earthy taste of beef and love to dig in the shitake mushroom filling.",
            price: 150.0,
            image: "Images/beefwellington.jpeg"
        },
        {
            name: "The Cats Specialty",
            description: "Cesar Salad with slices of ham and a side of ranch.",
            price: 20.0,
            image: "Images/catsspecialty.jpeg"
        },
        {
            name: "Dogs Dish",
            description: "18oz T-Bone Steak with a side of fries or mashed potatoes. For the Pups to become Dogs.",
            price: 25.0,
            image: "Images/dogsdish.jpeg"
        },
        {
            name: "Dogs Kennel",
            description: "Three types of sausages (Chorizo, Bratwurst, and Italian Sausage) served with grilled veggies.",
            price: 45.0,
            image: "Images/dogkennel.jpeg"
        }
    ];

    const dollarSign = (price) =>
        Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(price);

    let currentIndex = 0;

    function menuTable(index) {
        const item = menuItems[index];
        document.getElementById("menu-image").src = item.image;
        document.getElementById("menu-image").alt = item.name;
        document.getElementById("menu-name").textContent = item.name;
        document.getElementById("menu-description").textContent = item.description;
        document.getElementById("menu-price").textContent = dollarSign(item.price);
    }

    const prevBtn = document.getElementById('Prev')
    const nextBtn = document.getElementById('Next')

    menuTable(currentIndex);

    prevBtn.addEventListener('click', prevImage)
    nextBtn.addEventListener('click', nextImage)

    function prevImage() {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        menuTable(currentIndex)
    }

    function nextImage() {
        currentIndex = (currentIndex + 1 + menuItems.length) % menuItems.length;
        menuTable(currentIndex)
    }


