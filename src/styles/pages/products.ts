import { styled } from "..";

export const ProductContainer = styled('main', {
display: 'grid',
gridTemplateColumns: '1fr 1fr',
alignItems: 'stretch',
gap: '4rem',
margin: '0 auto',
maxWidth: 1180

})
export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 'calc(656px - 0.5rem)',
    background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%) ",
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
      img: {
objectFit: 'cover'
  }




})
export const ProductDetails = styled('div', {
    
})