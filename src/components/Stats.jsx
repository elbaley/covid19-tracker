import styled from "styled-components";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaSkullCrossbones } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import StatBox from "./StatBox";
import { useSelector } from "react-redux";
import { selectCovid } from "../features/covid/covidSlice";

const Stats = () => {
  const covid = useSelector(selectCovid);
  return (
    <Wrapper>
      <h3 className='section-title'>Stats</h3>
      <div className='box-container'>
        <StatBox
          Icon={RiSurgicalMaskFill}
          details={{
            name: "Infected",
            number: covid?.covidData?.confirmed.value,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#b2d7fe",
          }}
        />
        <StatBox
          Icon={FaSkullCrossbones}
          details={{
            name: "Deaths",
            number: covid?.covidData?.deaths.value,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#f4d7d6",
          }}
        />
        <StatBox
          Icon={BsFillPersonPlusFill}
          details={{
            name: "Active",
            number:
              covid?.covidData?.confirmed.value -
              covid?.covidData?.deaths.value,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#f4e0c9",
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Stats;

const Wrapper = styled.section`
  .section-title {
    margin-top: 1rem;
    font-size: 1.5rem;
    position: relative;
  }
  .section-title:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #676b72;
    left: 4rem;
    top: 47%;
    position: absolute;
  }
  .box-container {
    display: grid;
    margin-top: 2rem;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    gap: 1rem;
  }
`;
