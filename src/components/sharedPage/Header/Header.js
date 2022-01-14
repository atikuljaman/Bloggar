import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsSearch, BsCart } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import './Header.css';

const Header = () => {

    return (
        <header className='navbar-section container'>
            {/* navbar left side */}
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='img-fluid logo' src='http://axilthemes.com/themes/blogar/wp-content/themes/blogar/assets/images/logo/logo.png' alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' ><RiMenu2Line /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='navbar-link' to="/home">Home</NavLink>
                            <NavLink className='navbar-link' to="/posts">Posts</NavLink>
                            <NavLink className='navbar-link' to="/megaMenu">
                                Mega Menu
                                <ul className='categories-dropdown'>
                                    <div className='categories-left-container'>
                                        <li><NavLink className='navbar-link' to="/phone">Accessibility</NavLink></li>
                                        <li><NavLink className='navbar-link' to="">Android & Dev</NavLink></li>
                                        <li><NavLink className='navbar-link' to="">Designs</NavLink></li>
                                        <li><NavLink className='navbar-link' to="">Tech & Review</NavLink></li>
                                        <li><NavLink className='navbar-link' to="">Creative</NavLink></li>
                                    </div>
                                    <div className='categories-right-container'>
                                        <div className='post-container'>
                                            <div className='post-content'>
                                                <img className='category-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-1-600x338.jpg" alt="" />
                                                <p className='category-name'>Technology</p>
                                                <p className='category-post-tile'>Beauty of deep space. Billions of galaxies in</p>
                                            </div>
                                        </div>
                                        <div className='post-container'>
                                            <div className='post-content'>
                                                <img className='category-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-13-390x260.jpg" alt="" />
                                                <p className='category-name'>Technology</p>
                                                <p className='category-post-tile'>Rocket Lab mission fails shortly after launch</p>
                                            </div>
                                        </div>
                                        <div className='post-container'>
                                            <div className='post-content'>
                                                <img className='category-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-14-390x260.jpg" alt="" />
                                                <p className='category-name'>Technology</p>
                                                <p className='category-post-tile'>The Morning After: Uber sets its sights on Postmates</p>
                                            </div>
                                        </div>
                                        <div className='post-container'>
                                            <div className='post-content'>
                                                <img className='category-img' src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-12-390x260.jpg" alt="" />
                                                <p className='category-name'>Technology</p>
                                                <p className='category-post-tile'>Virtual Reality or Artificial Intelligence Technology</p>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </NavLink>
                            <NavLink className='navbar-link' to="/contactUs">Shop</NavLink>
                            <NavLink className='navbar-link' to="/aboutUs">About Us</NavLink>
                            <NavLink className='navbar-link' to="/contactUs">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Navbar right side */}
            <div className='navbar-right'>
                <div className='search-container'>
                    <BsSearch />
                    <input placeholder='Search ...' type='text' />
                </div>
                <div className='cart-container'>
                    <BsCart className='cart-icon' />
                    <div>0</div>
                </div>
            </div>
        </header>
    );
};

export default Header;

