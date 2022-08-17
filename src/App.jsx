import styled from "styled-components";
import ChartSection from "./components/ChartSection";
import CountrySelector from "./components/CountrySelector";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Stats />
        <CountrySelector />
      </Wrapper>
      <ChartSection />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;
