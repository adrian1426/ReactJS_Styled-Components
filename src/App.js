import styled, { keyframes } from 'styled-components';

const P = styled.p`
  font-size:24px;
  color:red
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color:${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius:4px;

  &:hover{
    box-shadow:1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary{
    background-color:blue
  }
`;

const BlockButton = styled(Button)`
  width:100%;
  font-size:24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}>{props.children}</a>;
};

const StyledLink = styled(Link)`
  color:blue;
`;

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size:20px;
  border:1px solid red;
  color:${props => props.color}
`;

const Pass = styled(Input).attrs({
  type: 'password'
})``;

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to{
    transform: rotate(360deg);
  }
`;

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`;

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo!</P>
      <Button primary className="secondary">Enviar</Button>
      <BlockButton primary as='a' href="#">Enviar</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link 2</StyledLink>
      <Input color="blue" />
      <Pass />
      <br />

      <Rotar>giramdo</Rotar>
    </Content>
  );
}

export default App;
