import { styled } from "..";

export const ProductContainer = styled("main", {
    gap: "1rem",
    margin: "0 auto",
    maxWidth: 1180,
    display: "flex",

    justifyContent: "flex-start",
    paddingRight: "6rem",
});
export const ImageContainer = styled("div", {
    marginBottom: "1.5rem",
    width: "100%",
    maxWidth: 95,
    height: 95,
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
    maxWidth: 265,
    width: 200,
    maxHeight: 103,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    h4: {
        color: "$gray300",
        fontSize: "$md",
        marginBottom: 1,
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

export const Quantity = styled("div", {
    display: "flex",
    justifyContent: "space-between",


});

export const Total = styled("div", {
    display: "flex",
    justifyContent: "space-between",

    main: {
        fontSize: "$lg",
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
