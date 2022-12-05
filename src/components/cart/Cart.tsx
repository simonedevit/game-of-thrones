import { Typography } from "@mui/material";

type CartProps = {
    //favourites: string[];
    favourites: Array<string>;
}

export const Cart: React.FC<CartProps> = ( { favourites } ) => {
    return (
        <div className='cart-container'>
            <Typography variant="h4" color="black">CARRELLO</Typography>
            <div>{favourites.map(character => <p key={character}>{character}</p>)}</div>
        </div>
    )
}