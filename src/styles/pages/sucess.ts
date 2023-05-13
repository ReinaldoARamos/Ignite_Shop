import {styled } from ".."
 

export const SucessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: '$2xl',
    color: '$gray100',

  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight:  1.4
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$l',
    color:  '$green500',
    fontWeight: 'bold',
    
    '&:hover': {
        color:  '$green300',
        cursor: 'pointer'
    },
  }

});

export const ImagesContainer = styled("main", {

  width: "100%",
  maxWidth: 130,
  height: 145,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
marginTop: '4rem',
  gap: 5
});



export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  borderRadius: "50%",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});