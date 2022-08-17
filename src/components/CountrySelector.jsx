import styled from "styled-components";

const CountrySelector = () => {
  return (
    <Wrapper>
      <select className='country' name='country'>
        <option value='TR'>Turkey</option>
        <option value='USA'>United States of America</option>
      </select>
    </Wrapper>
  );
};

export default CountrySelector;

const Wrapper = styled.div`
  margin-top: 2rem;
  .country {
    background: none;
    /* background: #242529; */
    width: 300px;
    padding: 0.25rem 0;
    border-radius: 0.2rem;
    color: white;
    border: none;
    border-bottom: 1px solid #ccc;
    display: block;
    margin: 0 auto;
    font-size: 1.25rem;
  }
  .country:focus-visible {
    outline: none;
  }
`;
