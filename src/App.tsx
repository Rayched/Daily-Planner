import styled from "styled-components";
import Routers from "./Router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App(){
  return (
    <Wrapper>
      <Routers />
    </Wrapper>
  );
}

export default App;