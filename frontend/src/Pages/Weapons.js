import Header from '../Components/Header';
import { Card, CardBody, CardTitle, Row, Col, CardHeader, CardFooter, CardSubtitle } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useCharacter } from '../Components/CharacterContext';

const Weapons = () => {

  const { character } = useCharacter();
  const [ weapons, setWeapons ] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/characters/${character}/weapons`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWeapons(data);
        } else {
          console.error('Unexpected response: ', data);
          setWeapons([]);
        }
      })
      .catch((err) => console.error("Error fetching weapons: ", err))
  }, [character]);

  return (
    <div className='weapons'>
        <Header />
        <div className='weaponsMain'>
          <Row className='justify-content-center g-5'>
              {Array.isArray(weapons) && weapons.map((weapon, index) => (
                <Col key={index} md="auto">
                  <Card className='card text-start m-4 h-100'>
                    <CardHeader className='bookends'>{weapon.type}, {weapon.attack_type}, {weapon.notes}</CardHeader>
                    <CardBody className='cardBody'>
                      <CardTitle className='cardTitle'>{weapon.weapon}</CardTitle>
                      <CardSubtitle className='cardSubtitle mb-2'>Properties: {weapon.properties}</CardSubtitle>
                      <div className='content'>
                        <Row className='mb-3'><Col className='ms-3'>Hit/DC: {weapon.dc}</Col><Col xs={8} className='text-end me-3'>Damage: <strong>{weapon.damage}</strong></Col></Row>
                        <Row className='mb-3'><Col className='ms-3'>Reach: 5 ft</Col><Col xs={8} className='text-end me-3'>Range: 20 ft/60 ft</Col></Row>          
                        <Row><Col className='ms-3'>Proficient: Yes</Col><Col></Col></Row>                        
                      </div>
                    </CardBody>
                    <CardFooter className='bookends'>{weapon.description}</CardFooter>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
    </div>
  )
}

export default Weapons