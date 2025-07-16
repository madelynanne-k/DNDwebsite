import Header from '../Components/Header';
import SpellsNav from '../Components/SpellsNav';
import { Card, CardBody, CardTitle, Row, Col, CardHeader, Collapse } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useUser } from '../Components/UserContext';

const SpellsLandingPage = () => {

  const [openIndices, setOpenIndices] = useState(new Set());
  const [spells, setSpells] = useState([]);

  const spellLevel = 0;

  const { user } = useUser();

  const toggle = (index) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  /*fetching spells*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${user}/spells/${spellLevel}`)
      .then((res) => res.json())
      .then((data) => setSpells(data))
      .catch((err) => console.error("Error fetching badges: ", err))
  }, [user, spellLevel]);

  return (
    <div className='spellsLanding'>
      <Header />
      <div className='spellsMain'>
        <SpellsNav />
        <div className='spellsContent'>
          <Row>
            <Col>
              {spells.map((spell, index) => (
                <Card className='card border-success' key={index}>
                  <CardHeader onClick={() => toggle(index)} style={{ cursor: 'pointer' }} className='cardHeader border-bottom border-black  border-opacity-75'>
                    <Row>
                      <div style={{ width: '6%', color: 'GrayText' }}>Name:</div>
                      <div className='text-start' style={{ width: '15%', fontWeight: '1000' }}>{spell.spell_name}</div>
                      <div style={{ width: '5%', color: 'GrayText' }}>Time:</div>
                      <div className='text-start' style={{ width: '10%' }}>{spell.time}</div>
                      <div style={{ width: '5%', color: 'GrayText' }}>Range:</div>
                      <div className='text-start' style={{ width: '10%' }}>{spell.area}</div>
                      <div style={{ width: '7%', color: 'GrayText' }}>Duration:</div>
                      <div className='text-start' style={{ width: '12%' }}>{spell.duration}</div>
                      <div style={{ width: '7%', color: 'GrayText' }}>HIT/DC:</div>
                      <div className='text-start' style={{ width: '6%' }}>{spell.dc}</div>
                      <div style={{ width: '6%', color: 'GrayText' }}>Effect:</div>
                      <div className='text-start' style={{ width: '11%' }}>{spell.effect}</div>
                    </Row>
                  </CardHeader>
                  <Collapse isOpen={openIndices.has(index)}>
                    <CardBody className='cardBody text-start'>
                      <CardTitle><strong>{spell.spell_name}</strong></CardTitle>
                      {/* <p className='card-text'>{spell.description}</p> */}
                      {spell.description.split('\n').map((line, index) => (
                        <p className='card-text' key={index}>{line}</p>
                      ))}
                    </CardBody>
                  </Collapse>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SpellsLandingPage;