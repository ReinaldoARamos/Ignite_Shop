import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$green300",
  borderRadius: 8,
  padding: '4px, 8px',
  transition: '0.4s',

  '&:hover' : {
    backgroundColor: "$green500"
  }
  
})

export default function Home() {
  return (
   <Button>Enviar</Button>
  )
}
