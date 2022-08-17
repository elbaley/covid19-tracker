import styled from "styled-components";

const StatBox = ({ Icon, details }) => {
  return (
    <Wrapper iconColor={details.iconColor}>
      <div className='box-icon blue'>{<Icon />}</div>
      <p className='box-title'>{details.name}</p>
      <h4>
        <span className='box-number'>
          {Intl.NumberFormat().format(details.number)}
        </span>
      </h4>
      <p className='box-updated'>
        Last Updated at :<span className='box-date'>{details.lastUpdated}</span>
      </p>
    </Wrapper>
  );
};

export default StatBox;

const Wrapper = styled.article`
  background: #242529;
  position: relative;
  padding: 0.5rem 1.25rem;

  .box-icon {
    margin-top: 0.5rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    padding: 0.25rem;
    font-size: 2rem;
    color: black;
    text-align: center;
    background-color: ${(props) => props.iconColor};
  }
  .blue {
    /* background-color: #b2d7fe; */
    /* background-color: ${(props) => props.details?.iconColor}; */
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
