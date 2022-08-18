import { useEffect, useState } from "react";
import styled from "styled-components";

const CountrySelector = () => {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Global");
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries/")
      .then((res) => res.json())
      .then((data) => {
        const filteredCountries = data.countries.filter(
          (country) => country.iso3 !== undefined
        );
        setCountryList(filteredCountries);
      });
  }, []);
  return (
    <Wrapper>
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
        className='country'
        name='country'
      >
        <option value='Global'>Global</option>
        {countryList?.map((country) => {
          return <option value={country.iso3}>{country.name}</option>;
        })}
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
