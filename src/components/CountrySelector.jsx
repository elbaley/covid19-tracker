import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCovidDataByCountry } from "../features/covid/covidSlice";

const CountrySelector = () => {
  const dispatch = useDispatch();

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Global");

  //set country list
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

  //get country data every time selected country changes
  useEffect(() => {
    dispatch(fetchCovidDataByCountry(selectedCountry));
  }, [selectedCountry]);
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
    -webkit-appearance: none;
    background: none;
    width: 300px;
    padding: 0.25rem 0;
    border-radius: 0rem;
    color: white;
    border: 0;
    border-bottom: 1px solid #ccc;
    display: block;
    margin: 0 auto;
    font-size: 1.25rem;
  }
  .country:focus-visible {
    outline: none;
  }
`;
