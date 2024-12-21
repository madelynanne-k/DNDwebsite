import React from 'react'
import { Row, Col, Button, FormGroup, Label } from 'reactstrap';
import elarinPhoto from '../imgs/elarin/elarin.png';
import blizzardPhoto from '../imgs/blizzard/blizz.png';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();

    return (
        <div className="homepage">
            <Row>
                <Col>Select Your Character</Col>
            </Row>
            <Row className='my-5 py-3'>
                <Col md className="m-6"><Link to='/dashboard'><img src={elarinPhoto} alt='elarin photo' className='img shadow' /></Link></Col>
                <Col md className="m-6"><Link to="/dashboard"><img src={blizzardPhoto} alt="blizzard photo" className='img shadow' /></Link></Col>
            </Row>
            <Row>
                <Col>Or Enter Their Name</Col>
            </Row>
            <Row>
                <Col>
                    <Formik>
                        <Form className='formControl'>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Field
                                            name='name'
                                            placeholder='Character Name'
                                            className='form-control'
                                            style={{ width: '300px' }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col>
                                    <Button
                                        className='btn shadow rounded'
                                        style={{ marginLeft: '-300px', width: '250px', fontSize: '25px' }}
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </div>
    )
}

export default Homepage