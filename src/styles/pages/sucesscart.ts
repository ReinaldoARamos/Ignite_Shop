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
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
marginTop: '4rem',
  img: {
    objectFit: "cover",
    background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 999,
    marginLeft: '-3rem' 
  
  },
});
