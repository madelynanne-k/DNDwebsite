import { Navbar, Container, NavItem, Nav, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/navBarLogo.png';
import { useUser } from './UserContext';

const Header = () => {

    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='header'>
            <Navbar className='navbar' dark expand='md'>
                <NavbarBrand className='ms-5' href='/'>
                    <img src={Logo} alt='web logo' className='float-start' style={{ height: '80px' }} />
                </NavbarBrand>

                <NavbarToggler onClick={toggle} className='me-3' />

                <Collapse isOpen={isOpen} navbar>
                    <Container>
                        <Nav>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Home</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to={`/dashboard/${user}`}>
                                    <button className='btn' type='button'>Dashboard</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/weapons'>
                                    <button type='button' className='btn'>Weapons</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/spellsLanding'>
                                    <button type='button' className='btn'>Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/inventory'>
                                    <button type='button' className='btn'>Inventory</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/actionsLanding'>
                                    <button type='button' className='btn'>Actions</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/featsTraits'>
                                    <button type='button' className='btn'>Features and Traits</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/backgroundLanding'>
                                    <button type='button' className='btn'>Background</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link text-end' to='/'>
                                    <button type='button' className='btn btn-outline-info px-4'>Logout</button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Collapse>

            </Navbar>
        </div>
    )
}

export default Header
