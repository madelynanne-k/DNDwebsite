import React from 'react'
import Header from '../Components/Header';
import {Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import Avatar from '../imgs/avatarLogo.png';

const CharacterDashboard = () => {
  return (
    <div className='dashboard'>
        <Header />
        <Row className="titleBox align-items-center">
              <Col md='2' className='text-end'>
                <img src={Avatar} alt='avatar placeholder' style={{width: '125px', height: '125px', borderRadius: '50%', objectFit: 'cover'}} />
              </Col>
              <Col md='6'>
                <Row>
                  <Col className='text-start'>Character Name:</Col>
                </Row>
                <Row>
                  <Col className='text-start'>Level:</Col>
                </Row>
                <Row>
                  <Col className='text-start'>Class:</Col>
                </Row>
                <Row>
                  <Col className='text-start'>Race:</Col>
                </Row>
              </Col>

        </Row>
        <Row className='my-5'>
          <Col md='4' style={{paddingLeft:'110px', paddingRight: '100px'}}>
            <Card className='shadow border-info' style={{height: '225px', backgroundColor: '#4e696b', color: 'cornsilk'}}>
              <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Ability Points</CardTitle>
              <CardBody>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Strength</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Dexterity</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Constitution</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Intelligence</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Wisdom</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Charisma</Col>
                  <Col>Mod</Col>
                  <Col>Total</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md='4' style={{paddingLeft: '100px', paddingRight: '100px'}}>
            <Card className='shadow border-info' style={{height: '225px', backgroundColor: '#4e696b', color: 'cornsilk'}}>
              <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Saving Throws</CardTitle>
              <CardBody>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Strength</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Dexterity</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Constitution</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Intelligence</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Wisdom</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Charisma</Col>
                  <Col>Mod</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md='4' style={{paddingLeft: '100px', paddingRight: '100px'}}>
            <Card className='shadow border-info' style={{height: '225px', backgroundColor: '#4e696b', color: 'cornsilk'}}>
              <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Senses</CardTitle>
              <CardBody className='pt-4'>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Passive Perception</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Passive Investigation</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Passive Insight</Col>
                  <Col>Mod</Col>
                </Row>
                <Row>
                  <Col className='fw-bold text-middle ps-3'>Darkvision</Col>
                  <Col>Mod</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='mx-5'>
          <Col style={{marginLeft: '40px', marginRight: '30px'}}>
            <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
              <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Skills</CardTitle>
              <CardBody>
                <Row className='border-bottom border-light border-opacity-50 pb-3'>
                  <Col className='skill text-end ps-5'>Acrobatics</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end text-nowrap'>Animal Handling</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Arcana</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Athletics</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Deception</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>History</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Insight</Col>
                  <Col className='text-start'>Mod</Col>
                </Row>
                <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                  <Col className='skill text-end ps-5'>Intimidation</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Investigation</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Medicine</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Nature</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Perception</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Performance</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Persuasion</Col>
                  <Col className='text-start'>Mod</Col>
                </Row>
                <Row className='mt-3 pb-1'>
                  <Col className='skill text-end ps-5'>Religion</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Sleight of Hand</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Stealth</Col>
                  <Col className='text-start'>Mod</Col>
                  <Col className='skill text-end'>Survival</Col>
                  <Col className='text-start'>Mod</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5' style={{marginLeft: '80px', marginRight: '80px'}}>
          <Col md='6'style={{marginTop: '40px'}}>
            <Row>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Initiative</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Walking Speed</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Hit Points</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
            </Row>
            <Row className='my-2'>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Proficiency Bonus</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Armor Class</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
                  <CardTitle className='subtitle border-bottom border-white  border-opacity-75'>Defenses</CardTitle>
                  <CardBody>mod</CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md='6'>
            <Card className='shadow border-info' style={{backgroundColor: '#4e696b', color: 'cornsilk'}}>
              <CardTitle className='subtitle border-bottom border-white border-opacity-75'>Proficiencies and Training</CardTitle>
              <CardBody>
                <Row className='border-bottom border-light border-opacity-50 pb-3'>
                  <Col md='2' className='skill'>Armor</Col>
                  <Col>Info</Col>
                </Row>
                <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                  <Col md='2' className='skill'>Weapons</Col>
                  <Col>Info</Col>
                </Row>
                <Row className='mt-3 border-bottom border-light border-opacity-50 pb-3'>
                  <Col md='2' className='skill'>Tools</Col>
                  <Col>Info</Col>
                </Row>
                <Row className='mt-3'>
                  <Col md='2' className='skill'>Languages</Col>
                  <Col>Info</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default CharacterDashboard