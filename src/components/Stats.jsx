import styled from "styled-components";
import { MdSick } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaSkullCrossbones } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import StatBox from "./StatBox";

const Stats = () => {
  return (
    <Wrapper>
      <h3 className='section-title'>Stats</h3>
      <div className='box-container'>
        <StatBox
          Icon={MdSick}
          details={{
            name: "Infected",
            number: 592398146,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#b2d7fe",
          }}
        />
        <StatBox
          Icon={AiFillPlusCircle}
          details={{
            name: "Recovered",
            number: 0,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#dcf7e1",
          }}
        />
        <StatBox
          Icon={FaSkullCrossbones}
          details={{
            name: "Deaths",
            number: 6441842,
            lastUpdated: "Wed Aug 17 2022 2:20:58 PM",
            iconColor: "#f4d7d6",
          }}
        />
        <StatBox
          Icon={BsFillPersonPlusFill}
          details={{
            name: "Active",
            number: 6441842,
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
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));

    gap: 1rem;
  }
`;
