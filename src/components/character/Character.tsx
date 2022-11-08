import { getCharacterById } from '../../api/httpService';
import './styles.css';

// Usa Pick per selezionare solo le proprietà che ci servono dal tipo Character
type CharacterProps = {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
}

export const Character: React.FC<CharacterProps> = ({ id, firstName, lastName, title }) => {
    
    const handleClick = () => {
        getCharacterById(id).then(character => {
            alert(`Full name: ${character.fullName} - ${character.family}`)
        })
    }

    return (
        <div className="character">
            <div><b>Id:</b> {id}</div>
            <div><b>First name:</b> {firstName}</div>
            <div><b>Last name:</b> {lastName}</div>
            <div><b>Title:</b> {title}</div>
            <button onClick={handleClick}>INFO</button>
        </div>
    )
}