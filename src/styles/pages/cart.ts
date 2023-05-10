import { styled } from "..";

export const CartContainer = styled("main", {
    gap: "1rem",
    margin: "0 auto",
    maxWidth: 1180,
    display: "flex",
    flexDirection:'column',

    paddingRight: "35rem",
});

export const ProductContainer = styled("main", {
   display: 'flex',
   gap: '1rem',
});
export const ImageContainer = styled("div", {
    marginBottom: "1.5rem",
    width: 240,
    height: 240,
    background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%) ",
    borderRadius: 8,
    padding: "0.25rem",

    justifyContent: "center",
    alignItems: "center",
    img: {
        objectFit: "cover",
    },
});

export const ProductContent = styled("div", {
 
    paddingLeft: 5,
    maxWidth: 315,

    maxHeight: 240,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    h4: {
        color: "$gray300",
        fontSize: "$2xl",
        marginBottom: 1,
    },

    main: {
        fontSize: "$2xl",
        fontWeight: "bold",
    },

    div: {
        fontSize: "$lg",
        color: "$green300",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
            color: "red",
        },
    },
});

export const Summary = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3rem',

    paddingLeft: '56rem'
})
export const Quantity = styled("div", {
    display: "flex",
    width: '100%' ,
    justifyContent: "space-between",
    fontSize: "$2xl",
    marginTop: '0.5rem'
});

export const Total = styled("div", {
  
    width: '100%' ,
    display: "flex",
    justifyContent: "space-between",
div: {
    fontSize: "$2xl",
},
    main: {
        fontSize: "$2xl",
        fontWeight: "bold",
        
    }


});


export const Purchase = styled("button", {
    marginTop: 20,
    width: 300,
    height: 56,
    borderRadius: 8,
    background: "$green300",
    color: "$gray100",
    fontSize: "$lg",
    fontWeight: 'bold',
    transition: '0.2s',
    cursor: "pointer",

    "&:hover": {
        background: "$green500",

    },
});
