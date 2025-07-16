import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import defaultProfile from '../imgs/navBarLogo.png';
import { useUser } from '../Components/UserContext';
const Homepage = () => {

    const navigate = useNavigate();

    const [ characters, setCharacters ] = useState([]);
    const [dropdownopen, setDropdownOpen] = useState(false);
    const [ selectedName, setSelectedName ] = useState('Select a Character');

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        fetch("http://localhost:5000/characters")
            .then((res) => res.json())
            .then((data) => setCharacters(data))
            .catch((err) => console.error("Error loading characters: ", err));
    }, []);

    const { setUser } = useUser();

    const handleSelect = (char) => {
        setSelectedName(char.name);
        setUser(char.id);
        navigate(`/dashboard/${char.id}`)
    };



    return (
        <div className="homepage">
            <Row>
                <Col>Select Your Character</Col>
            </Row>
            {/*character selection photos*/}
            <Row className='my-5 py-3'>
                {characters.slice(0, 2).map((char) => (
                    <Col key={char.id} md className="m-6">
                        <img 
                            src={`/imgs/${char.profile_photo}`} 
                            alt={char.name} 
                            className='img shadow' 
                            onClick={() => {
                                setUser(char.id);
                                navigate(`/dashboard/${char.id}`);
                            }}
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = defaultProfile;
                            }}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>Or Select From Dropdown</Col>
            </Row>
            {/* character selection dropdown */}
            <Row>
                <Col>
                    <Dropdown isOpen={dropdownopen} toggle={toggle} className="character-dropdown" style={{ fontWeight: 'bold', fontSize: '30px'}}>
                        <DropdownToggle caret color="secondary" className="shadow px-4 py-2 fs-5">{selectedName}</DropdownToggle>
                        <DropdownMenu style={{ minWidth: '250px'}}>
                            {characters.map((char) => (
                                <DropdownItem key={char.id} onClick={() => handleSelect(char)} style={{ padding: '10px 15px', fontWeight: 'bold', fontSize: '20px'}}>{char.name}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>

        </div>
    )
}

export default Homepage