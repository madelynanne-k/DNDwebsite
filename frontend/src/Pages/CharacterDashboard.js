import Header from '../Components/Header';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Avatar from '../imgs/avatarLogo.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDashboard = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [abilityScores, setAbilityScores] = useState([]);
  const [abilityMods, setAbilityMods] = useState([]);
  const [savingThrows, setSavingThrows] = useState([]);
  const [senses, setSenses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [badges, setBadges] = useState([]);
  const [training, setTraining] = useState([]);

  /*fetching character information */
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.error("Error fetching character:", err));
  }, [id]);

  /*fetching ability scores*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/ability-scores`)
      .then((res) => res.json())
      .then((data) => setAbilityScores(data))
      .catch((err) => console.error("Error fetching ability scores: ", err))
  }, [id]);

  /*fetching ability modifiers*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/ability-modifiers`)
      .then((res) => res.json())
      .then((data) => setAbilityMods(data))
      .catch((err) => console.error("Error fetching ability modifiers: ", err))
  }, [id]);

  /*fetching saving throws*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/saving-throws`)
      .then((res) => res.json())
      .then((data) => setSavingThrows(data))
      .catch((err) => console.error("Error fetching saving throws: ", err))
  }, [id]);

  /*fetching senses*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/senses`)
      .then((res) => res.json())
      .then((data) => setSenses(data))
      .catch((err) => console.error("Error fetching senses: ", err))
  }, [id]);

  /*fetching skills*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills: ", err))
  }, [id]);

   /*fetching badges*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/badges`)
      .then((res) => res.json())
      .then((data) => setBadges(data))
      .catch((err) => console.error("Error fetching badges: ", err))
  }, [id]);

     /*fetching proficiencies and trainings*/
  useEffect(() => {
    fetch(`http://localhost:5000/characters/${id}/proficiencies-and-training`)
      .then((res) => res.json())
      .then((data) => setTraining(data))
      .catch((err) => console.error("Error fetching proficiencies and training: ", err))
  }, [id]);

  /*check for correct character information passing*/
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dashboard'>
      <Header />
      <Row className="titleBox align-items-center">
        {/*profile photo*/}
        <Col md='2' className='text-end'>
          <img 
            src={`/imgs/${character.profile_photo}`} 
            alt={character.name} 
            style={{ width: '125px', height: '125px', borderRadius: '50%', objectFit: 'cover' }} 
            onError={(e) => {
              e.target.onError = null;
              e.target.src = Avatar;
            }}
          />
        </Col>

        {/*basic character info*/}
        <Col md='6'>
          <Row>
            <Col className='text-start'>Character Name: {character.name}</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='text-start'>Level: {character.level}</Col>
          </Row>
          <Row>
            <Col className='text-start'>Class: {character.character_class}</Col>
          </Row>
          <Row>
            <Col className='text-start'>Race: {character.race}</Col>
          </Row>
        </Col>
      </Row>
      <Row className='my-5'>

        {/*Ability Points*/}
        <Col md='4' style={{ paddingLeft: '110px', paddingRight: '100px' }}>
          <Card className='shadow border-info' style={{ height: '225px', backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Ability Points</CardTitle>
            <CardBody style={{ marginTop: '-5px' }}>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Strength</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.strength}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.strength}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Dexterity</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.dexterity}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.dexterity}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Constitution</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.constitution}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.constitution}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Intelligence</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.intelligence}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.intelligence}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Wisdom</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.wisdom}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.wisdom}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Charisma</Col>
                <Col style={{ wordSpacing: '15px' }}>Mod +{abilityMods.charisma}</Col>
                <Col style={{ wordSpacing: '15px' }}>Total {abilityScores.charisma}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        {/*Saving Throws*/}
        <Col md='4' style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <Card className='shadow border-info' style={{ height: '225px', backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Saving Throws</CardTitle>
            <CardBody className='savingThrows'>
              <Row style={{ marginTop: '-23px' }}>
                <Col className='fw-bold text-middle ps-3'>Strength</Col>
                <Col className='numbers'>+ {savingThrows.strength}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Dexterity</Col>
                <Col className='numbers'>+ {savingThrows.dexterity}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Constitution</Col>
                <Col className='numbers'>+ {savingThrows.constitution}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Intelligence</Col>
                <Col className='numbers'>+ {savingThrows.intelligence}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Wisdom</Col>
                <Col className='numbers'>+ {savingThrows.wisdom}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Charisma</Col>
                <Col className='numbers'>+ {savingThrows.charisma}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        {/*Senses*/}
        <Col md='4' style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <Card className='shadow border-info' style={{ height: '225px', backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Senses</CardTitle>
            <CardBody className='pt-4'>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Passive Perception</Col>
                <Col className='numbers'>{senses.perception}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Passive Investigation</Col>
                <Col className='numbers'>{senses.investigation}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Passive Insight</Col>
                <Col className='numbers'>{senses.insight}</Col>
              </Row>
              <Row>
                <Col className='fw-bold text-middle ps-3'>Darkvision</Col>
                <Col className='numbers'>{senses.darkvision} ft</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='mx-5'>
        {/*Skills*/}
        <Col style={{ marginLeft: '40px', marginRight: '30px' }}>
          <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Skills</CardTitle>
            <CardBody>
              <Row className='border-bottom border-light border-opacity-50 pb-3'>
                <Col className='skill text-end ps-5'>Acrobatics</Col>
                <Col className='text-start numbers'>+ {skills.acrobatics}</Col>
                <Col className='skill text-end text-nowrap'>Animal Handling</Col>
                <Col className='text-start numbers'>+ {skills.animal_handling}</Col>
                <Col className='skill text-end'>Arcana</Col>
                <Col className='text-start numbers'>+ {skills.arcana}</Col>
                <Col className='skill text-end'>Athletics</Col>
                <Col className='text-start numbers'>+ {skills.athletics}</Col>
                <Col className='skill text-end'>Deception</Col>
                <Col className='text-start numbers'>+ {skills.deception}</Col>
                <Col className='skill text-end'>History</Col>
                <Col className='text-start numbers'>+ {skills.history}</Col>
                <Col className='skill text-end'>Insight</Col>
                <Col className='text-start numbers'>+ {skills.insight}</Col>
              </Row>
              <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                <Col className='skill text-end ps-5'>Intimidation</Col>
                <Col className='text-start numbers'>+ {skills.intimidation}</Col>
                <Col className='skill text-end'>Investigation</Col>
                <Col className='text-start numbers'>+ {skills.investigation}</Col>
                <Col className='skill text-end'>Medicine</Col>
                <Col className='text-start numbers'>+ {skills.medicine}</Col>
                <Col className='skill text-end'>Nature</Col>
                <Col className='text-start numbers'>+ {skills.nature}</Col>
                <Col className='skill text-end'>Perception</Col>
                <Col className='text-start numbers'>+ {skills.perception}</Col>
                <Col className='skill text-end'>Performance</Col>
                <Col className='text-start numbers'>+ {skills.performance}</Col>
                <Col className='skill text-end'>Persuasion</Col>
                <Col className='text-start numbers'>+ {skills.persuasion}</Col>
              </Row>
              <Row className='mt-3 pb-1'>
                <Col className='skill text-end ps-5'>Religion</Col>
                <Col className='text-start numbers'>+ {skills.religion}</Col>
                <Col className='skill text-end'>Sleight of Hand</Col>
                <Col className='text-start numbers'>+ {skills.sleight_of_hand}</Col>
                <Col className='skill text-end'>Stealth</Col>
                <Col className='text-start numbers'>+ {skills.stealth}</Col>
                <Col className='skill text-end'>Survival</Col>
                <Col className='text-start numbers'>+ {skills.survival}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5' style={{ marginLeft: '80px', marginRight: '80px' }}>
        {/*small boxes*/}
        <Col md='6' style={{ marginTop: '40px' }}>
          <Row>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Initiative</CardTitle>
                <CardBody className='badges'>+ {badges.initiative}</CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Walking Speed</CardTitle>
                <CardBody className='badges'>{badges.walking_speed}</CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Hit Points</CardTitle>
                <CardBody className='badges'>{badges.hit_points}</CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='my-2'>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Proficiency Bonus</CardTitle>
                <CardBody className='badges'>{badges.proficiency_bonus}</CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Armor Class</CardTitle>
                <CardBody className='badges'>{badges.armor_class}</CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Defenses</CardTitle>
                <CardBody style={{fontSize: '20px'}}>{badges.defenses}</CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        {/*proficiencies and training*/}
        <Col md='6'>
          <Card className='shadow border-info' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white border-opacity-75'>Proficiencies and Training</CardTitle>
            <CardBody>
              <Row className='border-bottom border-light border-opacity-50 pb-3'>
                <Col md='2' className='skill'>Armor</Col>
                <Col>{training.armor}</Col>
              </Row>
              <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                <Col md='2' className='skill'>Weapons</Col>
                <Col>{training.weapons}</Col>
              </Row>
              <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                <Col md='2' className='skill'>Tools</Col>
                <Col>{training.tools}</Col>
              </Row>
              <Row className='mt-3'>
                <Col md='2' className='skill'>Languages</Col>
                <Col>{training.languages}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CharacterDashboard