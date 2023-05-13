import { styled } from "..";

export const Empty = styled('div', {
    margin: '0 auto',
    width: '50%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    minHeight: "70vh",
 

    p: {
            fontSize: '$2xl',
            fontWeight: "bold",

    },

    a: {
        fontSize: '$xl',
        fontWeight: "bold",
        marginTop: '3rem',
        color: '$green500',
        transition: '0.2s',
        textDecoration: 'none',
        cursor: 'pointer',
        borderBottom: '1px solid transparent',

        '&:hover': {
            color: '$green300',
            borderBottom: '1px solid $green300',
        }
    }

    
})

