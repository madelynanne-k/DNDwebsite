import React from 'react';
import { Navbar, Container, NavItem, Nav, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const SpellsNav = () => {
  return (
    <div className='spellsNav'>
        <Navbar>
            <Container>
                <Nav>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Cantrips</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Level 1 Spells</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Level 2 Spells</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Level 3 Spells</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <button className='btn' type='button'>Level 4 Spells</button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
                
        </Navbar>
    </div>
  )
}

export default SpellsNav