import { Navbar, Container, NavItem, Nav, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const SpellsNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Toggle button for small screens */}
            <Button
                className='spellsNavToggle d-md-none'
                onClick={toggleNav}
                style={{ position: 'fixed', top: '90px', left: '10px', zIndex: 1100 }}
            >
                ☰ Spells
            </Button>

            {/* Sidebar Nav */}
            <div className={`spellsNav ${isOpen ? 'open' : ''}`}>
                <Navbar>
                    <Container>
                        <Nav vertical>
                            <NavItem>
                                <NavLink className='nav-link' to='/spellsLanding'>
                                    <button className='btn' type='button'>Cantrips</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/spellsLevel1'>
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
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Level 5 Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Level 6 Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Level 7 Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Level 8 Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <button className='btn' type='button'>Level 9 Spells</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/allSpells'>
                                    <button className='btn' type='button'>All Spells</button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
       
    )
}

export default SpellsNav