import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Botao = styled.button`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

function Teste() {
  return <Botao>Clique aqui</Botao>
}

export default Teste
