import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>COVID-19</h1>
      <p>Covid19 cases and statistics...</p>
      <hr />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  h1 {
    margin: 2rem 0 0;
    font-size: 4rem;
  }
  p {
    margin-top: 0.25rem;
  }
  hr {
    width: 100%;
    border-color: #676b72;
  }
`;
