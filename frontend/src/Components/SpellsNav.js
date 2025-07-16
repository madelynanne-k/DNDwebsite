import { Navbar, Container, NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const SpellsNav = () => {
  return (
    <div className='spellsNav'>
        <Navbar>
            <Container>
                <Nav>
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
                </Nav>
            </Container>
                
        </Navbar>
    </div>
  )
}

export default SpellsNav