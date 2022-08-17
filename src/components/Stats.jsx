import styled from "styled-components";
import { MdSick } from "react-icons/md";
const Stats = () => {
  return (
    <Wrapper>
      <h3 className='section-title'>Stats</h3>
      <div className='box-container'>
        <div className='box'>
          <div className='box-icon blue'>
            <MdSick />
          </div>
          <p className='box-title'>Infected</p>
          <h4>
            <span className='box-number'>592,398,146</span>
          </h4>
          <p className='box-updated'>
            Last Updated at :
            <span className='box-date'>Wed Aug 17 2022 2:20:58 PM</span>
          </p>
        </div>
        {/* Box */}
        <div className='box'>
          <div className='box-icon blue'>
            <MdSick />
          </div>
          <p className='box-title'>Infected</p>
          <h4>
            <span className='box-number'>592,398,146</span>
          </h4>
          <p className='box-updated'>
            Last Updated at :
            <span className='box-date'>Wed Aug 17 2022 2:20:58 PM</span>
          </p>
        </div>
        {/* Box */}
        <div className='box'>
          <div className='box-icon blue'>
            <MdSick />
          </div>
          <p className='box-title'>Infected</p>
          <h4>
            <span className='box-number'>592,398,146</span>
          </h4>
          <p className='box-updated'>
            Last Updated at :
            <span className='box-date'>Wed Aug 17 2022 2:20:58 PM</span>
          </p>
        </div>
        {/* Box */}
        <div className='box'>
          <div className='box-icon blue'>
            <MdSick />
          </div>
          <p className='box-title'>Infected</p>
          <h4>
            <span className='box-number'>592,398,146</span>
          </h4>
          <p className='box-updated'>
            Last Updated at :
            <span className='box-date'>Wed Aug 17 2022 2:20:58 PM</span>
          </p>
        </div>
        {/* Box */}
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
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .box {
    background: #242529;
    position: relative;
    padding: 1rem 1.25rem;
  }
  .box-icon {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    padding: 0.25rem;
    font-size: 2rem;
    color: black;
    text-align: center;
  }
  .blue {
    background-color: #b2d7fe;
  }
  .box-title {
    margin-top: 2.5rem;
    text-transform: uppercase;
    font-family: "Source Code Pro", monospace;
    letter-spacing: -1px;
    color: #888c90;
    font-size: 1.2rem;
  }
  .box-number {
    font-size: 2rem;
  }
  .box-updated {
    font-size: 1rem;
  }
  .box-date {
    color: #888c90;
    display: block;
    font-size: 0.85rem;
  }
`;
