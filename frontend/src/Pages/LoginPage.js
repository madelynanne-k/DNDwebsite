import { useEffect, useState } from 'react';
import { useCharacter } from '../Components/CharacterContext'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { clearCharacter } = useCharacter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        clearCharacter();
    }, [clearCharacter]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try{
            const res = await fetch('htt[://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password})
            });
            if (!res.ok) {
                setError('Invalid login credentials');
                return;
            }

            const data = await res.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            setSuccess('Login successful!');
            navigate('/');
        } catch (err){
            setError('Something went wrong. Please try again.')
        }
    } 

    return (
        <div className='login'>
            <Row className="justify-content-end">
                <Col xs='2'>
                    <Button color='link' className='createButton'>Create An Account</Button>
                </Col>
            </Row>
            <Row className='title mt-3'><Col>Login To Manage Your Characters</Col></Row>
            <Row className='justify-content-center mt-5 pt-5'>
                <Col xs='4'>
                    <Form className='form'>
                        <FormGroup className='mb-4'>
                            <Label for="email">Email</Label>
                            <Input id="email" name="email" placeholder="Enter Email Here" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input id='password' name='password' placeholder='Enter Password Here' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <Button type='submit' className='btn btn-lg mt-5 submitButton' onClick={() => navigate('/')}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage