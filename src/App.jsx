import styled from "styled-components";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <Wrapper>
      <Header />
      <Stats />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;
