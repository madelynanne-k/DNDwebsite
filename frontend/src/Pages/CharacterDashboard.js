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
          <Row>
            <Col className='text-start'>Path: {character.class_path}</Col>
          </Row>
        </Col>
      </Row>
      <Row className='my-5 mx-5 px-4'>
        {/*Ability Points*/}
        <Col xs='12' md='4' className='px-4 mb-4 d-flex'>
          <Card className='shadow border-info w-100 h-100 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Ability Points</CardTitle>
            <CardBody style={{ marginTop: '-5px' }}>
              <Row className='mb-2 extraSpace'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Strength</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.strength}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.strength}</Col>
              </Row>
              <Row className='mb-2 extraSpace'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Dexterity</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.dexterity}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.dexterity}</Col>
              </Row>
              <Row className='mb-2 extraSpace'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Constitution</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.constitution}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.constitution}</Col>
              </Row>
              <Row className='mb-2 extraSpace'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Intelligence</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.intelligence}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.intelligence}</Col>
              </Row>
              <Row className='mb-2 extraSpace'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Wisdom</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.wisdom}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.wisdom}</Col>
              </Row>
              <Row className='mb-2'>
                <Col xs='12' sm='4' className='fw-bold text-middle ps-3 topRowSubtitle'>Charisma</Col>
                <Col xs='6' sm='4' className='text-center'>Mod +{abilityMods.charisma}</Col>
                <Col xs='6' sm='4' className='text-center'>Total {abilityScores.charisma}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        {/*Saving Throws*/}
        <Col xs='12' md='4' className='px-4 mb-4 d-flex'>
          <Card className='shadow border-info w-100 h-100 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Saving Throws</CardTitle>
            <CardBody className='savingThrows m-4'>
              <Row style={{ marginTop: '-23px' }} className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Strength</Col>
                <Col className='numbers'>+ {savingThrows.strength}</Col>
              </Row>
              <Row className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Dexterity</Col>
                <Col className='numbers'>+ {savingThrows.dexterity}</Col>
              </Row>
              <Row className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Constitution</Col>
                <Col className='numbers'>+ {savingThrows.constitution}</Col>
              </Row>
              <Row className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Intelligence</Col>
                <Col className='numbers'>+ {savingThrows.intelligence}</Col>
              </Row>
              <Row className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Wisdom</Col>
                <Col className='numbers'>+ {savingThrows.wisdom}</Col>
              </Row>
              <Row className='extraSpace1'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Charisma</Col>
                <Col className='numbers'>+ {savingThrows.charisma}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        {/*Senses*/}
        <Col xs='12' md='4' className='px-4 mb-4 d-flex'>
          <Card className='shadow border-info w-100 h-100 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
            <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Senses</CardTitle>
            <CardBody className='m-4'>
              <Row className='extraSpace2'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Passive Perception</Col>
                <Col className='numbers'>{senses.perception}</Col>
              </Row>
              <Row className='extraSpace2'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Passive Investigation</Col>
                <Col className='numbers'>{senses.investigation}</Col>
              </Row>
              <Row className='extraSpace2'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Passive Insight</Col>
                <Col className='numbers'>{senses.insight}</Col>
              </Row>
              <Row className='extraSpace2'>
                <Col className='fw-bold text-middle ps-3 topRowSubtitle'>Darkvision</Col>
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
            <CardTitle className='subtitle border-bottom border-white border-opacity-75'>Skills</CardTitle>
            <CardBody style={{marginTop: '-36px'}}>
              <div className='skills-container'>
                <div className='skill-pair'><span className='skill'>Acrobatics</span><span className='mod'>{skills.acrobatics}</span></div>
                <div className='skill-pair'><span className='skill'>Animal Handling</span><span className='mod'>{skills.animal_handling}</span></div>
                <div className='skill-pair'><span className='skill'>Arcana</span><span className='mod'>{skills.arcana}</span></div>
                <div className='skill-pair'><span className='skill'>Athletics</span><span className='mod'>{skills.athletics}</span></div>
                <div className='skill-pair'><span className='skill'>Deception</span><span className='mod'>{skills.deception}</span></div>
                <div className='skill-pair'><span className='skill'>History</span><span className='mod'>{skills.history}</span></div>
                <div className='skill-pair'><span className='skill'>Insight</span><span className='mod'>{skills.insight}</span></div>
                <div className='skill-pair'><span className='skill'>Intimidation</span><span className='mod'>{skills.intimidation}</span></div>
                <div className='skill-pair'><span className='skill'>Investigation</span><span className='mod'>{skills.investigation}</span></div>
                <div className='skill-pair'><span className='skill'>Medicine</span><span className='mod'>{skills.medicine}</span></div>
                <div className='skill-pair'><span className='skill'>Nature</span><span className='mod'>{skills.nature}</span></div>
                <div className='skill-pair'><span className='skill'>Perception</span><span className='mod'>{skills.perception}</span></div>
                <div className='skill-pair'><span className='skill'>Performance</span><span className='mod'>{skills.performance}</span></div>
                <div className='skill-pair'><span className='skill'>Persuasion</span><span className='mod'>{skills.persuasion}</span></div>
                <div className='skill-pair'><span className='skill'>Religion</span><span className='mod'>{skills.religion}</span></div>
                <div className='skill-pair'><span className='skill'>Sleight of Hand</span><span className='mod'>{skills.sleight_of_hand}</span></div>
                <div className='skill-pair'><span className='skill'>Stealth</span><span className='mod'>{skills.stealth}</span></div>
                <div className='skill-pair'><span className='skill'>Survival</span><span className='mod'>{skills.survival}</span></div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5' style={{ marginLeft: '80px', marginRight: '80px' }}>
      {/*small boxes*/}
        <Col md='6' className='mt-4 pt-2'>
          <Row>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Initiative</CardTitle>
                <CardBody className='badges'>+ {badges.initiative}</CardBody>
              </Card>
            </Col>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Walking Speed</CardTitle>
                <CardBody className='badges'>{badges.walking_speed}</CardBody>
              </Card>
            </Col>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Hit Points</CardTitle>
                <CardBody className='badges'>{badges.hit_points}</CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='my-2'>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Proficiency Bonus</CardTitle>
                <CardBody className='badges'>{badges.proficiency_bonus}</CardBody>
              </Card>
            </Col>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Armor Class</CardTitle>
                <CardBody className='badges'>{badges.armor_class}</CardBody>
              </Card>
            </Col>
            <Col md='4' className='d-flex'>
              <Card className='shadow border-info w-100 h-40 d-flex flex-column' style={{ backgroundColor: '#4e696b', color: 'cornsilk' }}>
                <CardTitle className='subtitleBadge border-bottom border-white  border-opacity-75'>Defenses</CardTitle>
                <CardBody style={{ fontSize: 'clamp(14px, 1vw, 20px' }}>{badges.defenses}</CardBody>
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
                <Col md='2' className='trainingSubtitle'>Armor</Col>
                <Col>{training.armor}</Col>
              </Row>
              <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                <Col md='2' className='trainingSubtitle'>Weapons</Col>
                <Col>{training.weapons}</Col>
              </Row>
              <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                <Col md='2' className='trainingSubtitle'>Tools</Col>
                <Col>{training.tools}</Col>
              </Row>
              <Row className='mt-3'>
                <Col md='2' className='trainingSubtitle'>Languages</Col>
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