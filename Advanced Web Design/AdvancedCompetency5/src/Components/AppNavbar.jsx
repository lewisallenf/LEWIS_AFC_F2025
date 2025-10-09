import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Logo from '../assets/images/PuppyChowLogo.jpeg';

function AppNavbar(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="black" dark>
                <NavbarBrand href="/" className="me-6 p-2 d-flex align-items-center">
                    <img
                        src={Logo}
                        alt="PuppyChowLogo"
                    style={{height:80,
                    width:80,
                    marginRight:12}}/>
                    <h2 className={"mb-0"}>PUPPYCHOW</h2>

                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/hiring">HiringPage</NavLink>
                            <NavLink href="/menu">MenuPage</NavLink>
                            <NavLink href="/">HomePage</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;