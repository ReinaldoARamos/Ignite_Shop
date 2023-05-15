import { styled } from "..";

export const MiniCartContainer = styled("main", {
    gap: "1rem",
    margin: "0 auto",
    maxWidth: 320,
    maxHeight: 320,
    display: "flex",
    flexDirection:'column',
    paddingRight: "35rem",
});

export const MiniProductContainer = styled("main", {
   display: 'flex',
   gap: '1rem',
});
export const MiniImageContainer = styled("div", {
    marginBottom: "1.5rem",
    width: 120,
    height: 120,
    background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%) ",
    borderRadius: 8,
    padding: "0.25rem",

    justifyContent: "center",
    alignItems: "center",
    img: {
        objectFit: "cover",
    },
});

export const MiniProductContent = styled("div", {
 
    paddingLeft: 5,
    maxWidth: 360,
    maxHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: {
        color: "$gray100",
        fontSize: 16,
        marginBottom: 2,
        width: 130 ,
        fontWeight: 'bold'
    },

    main: {
        fontSize: "$lg",
        fontWeight: "bold",
    },

    div: {
        fontSize: "$md",
        color: "$green300",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
            color: "red",
        },
    },
});


export const GoToCart = styled("button", {
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
