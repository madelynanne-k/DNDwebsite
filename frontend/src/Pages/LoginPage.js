import { useEffect } from 'react';
import { useCharacter } from '../Components/CharacterContext'

const LoginPage = () => {
    const { clearCharacter } = useCharacter();

    useEffect(() => {
        clearCharacter();
    }, [clearCharacter]);

    return (
        <div className='login'>LoginPage</div>
    )
}

export default LoginPage