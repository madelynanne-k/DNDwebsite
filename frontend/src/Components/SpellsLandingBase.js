import Header from '../Components/Header';
import SpellsNav from '../Components/SpellsNav';
import { Card, CardBody, CardTitle, Row, Col, CardHeader, Collapse } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useUser } from '../Components/UserContext';

const SpellsLandingBase = ({ level }) => {

  const [openIndices, setOpenIndices] = useState(new Set());
  const [spells, setSpells] = useState([]);

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
    fetch(`http://localhost:5000/characters/${user}/spells/${level}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSpells(data);
        } else {
          console.error('Unexpected response: ', data);
          setSpells([]);
        }
      })
      .catch((err) => console.error("Error fetching badges: ", err))
  }, [user, level]);

  return (
    <div className='spellsLanding'>
      <Header />
      <div className='spellsMain'>
        <SpellsNav />
        <div className='spellsContent'>
          <Row>
            <Col>
              {Array.isArray(spells) && spells.map((spell, index) => (
                <Card className='card border-success' key={index}>
                  <CardHeader onClick={() => toggle(index)} style={{ cursor: 'pointer' }} className='cardHeader border-bottom border-black  border-opacity-75 px-5'>
                    <div className='spell-row'>
                      <div className='spell-pair'>
                        <span className='spell-field1'>Name:</span>
                        <span className='spell-value1 bold'>{spell.spell_name}</span>
                      </div>
                      <div className='spell-pair'>
                        <span className='spell-field1'>Time:</span>
                        <span className='spell-value1'>{spell.time}</span>
                      </div>
                      <div className='spell-pair'>
                        <span className='spell-field1'>Range:</span>
                        <span className='spell-value1 '>{spell.area}</span>
                      </div>
                      <div className='spell-pair'>
                        <span className='spell-field1'>Duration:</span>
                        <span className='spell-value1 '>{spell.duration}</span>
                      </div>
                      <div className='spell-pair'>
                        <span className='spell-field1'>HII/DC:</span>
                        <span className='spell-value1 '>{spell.dc}</span>
                      </div>
                      <div className='spell-pair'>
                        <span className='spell-field1'>Effect:</span>
                        <span className='spell-value1 '>{spell.effect.includes('+') || spell.effect[1] === 'd' ? <strong>{spell.effect}</strong> : spell.effect}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <Collapse isOpen={openIndices.has(index)}>
                    <CardBody className='cardBody text-start'>
                      <CardTitle><strong>{spell.spell_name}</strong></CardTitle>
                      {spell.description.split('\n').map((line, i) => (
                        <p className='card-text' key={i}>{line}</p>
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

export default SpellsLandingBase;