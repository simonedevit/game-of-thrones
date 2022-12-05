import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { getCharacterById } from '../../api/httpService';
import './styles.css';
import { useState } from 'react';

// Usa Pick per selezionare solo le proprietà che ci servono dal tipo Character
type CharacterProps = {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    imageUrl: string;
    handleClick: (character: string, isFavourite: boolean) => void;
}

export const Character: React.FC<CharacterProps> = ({ id, firstName, lastName, title, imageUrl, handleClick }) => {

    /*const handleClick = () => {
        getCharacterById(id).then(character => {
            alert(`Full name: ${character.fullName} - ${character.family}`)
        })
    }*/

    const character = `${firstName} ${lastName}`;

    const [isFavourite, setIsFavourite] = useState(false);
    
    const onClick = () => {
        setIsFavourite(!isFavourite);
        handleClick(character, isFavourite);
    }

    return (
        <div>
            <Card sx={{ width: 300, height: 250 }}>
                <CardMedia
                    component="img"
                    alt={character}
                    height="140"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{character}</Typography>
                    <Typography variant="body2" color="text.secondary">{title}</Typography>
                    <FavoriteOutlinedIcon onClick={onClick} htmlColor={isFavourite ? 'red' : 'black'} />
                </CardContent>
            </Card>
        </div>
    )
}