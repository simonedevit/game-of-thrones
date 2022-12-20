import Card from '@mui/material/Card';
import { Typography } from "@mui/material";

type CartProps = {
    //favourites: string[];
    favourites: Array<string>;
}

export const Cart: React.FC<CartProps> = ( { favourites } ) => {
    return (
        <div className='cart-container'>
            <Typography variant="h4" color="black">CARRELLO</Typography>
            <Card>{favourites.map(character => <p key={character}>{character}</p>)}</Card>
        </div>
    )
}

/*
<Card sx={{ width: 50, height: 50 }}>
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
*/