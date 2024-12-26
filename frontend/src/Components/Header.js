import { Navbar, Container, NavItem, Nav, NavbarBrand } from 'reactstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/navBarLogo.png';


const Header = () => {
  return (
    <div className='header'>
        <Navbar className='sticky-top navbar' dark sticky='top'expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Logo} alt='web logo' className='float-start' style={{height: '80px'}} />
            </NavbarBrand>
            <Container>
                <Nav>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Home</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/dashboard'>
                            <button className='btn' type='button'>Dashboard</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button type='button' className='btn'>Weapons</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button type='button' className='btn'>Spells</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button type='button' className='btn'>Inventory</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button type='button' className='btn'>Actions</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button type='button' className='btn'>Features and Traits</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
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
        </Navbar>
    </div>
  )
}

export default Header
