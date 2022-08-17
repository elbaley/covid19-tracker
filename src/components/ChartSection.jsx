import React from "react";
import styled from "styled-components";

const ChartSection = () => {
  return (
    <Section>
      <Wrapper>
        <h3 className='section-title'>Chart</h3>
      </Wrapper>
    </Section>
  );
};

export default ChartSection;

const Section = styled.section`
  margin-top: 2rem;
  background: white;
  height: 50vh;
  color: #1a1b1d;
`;
const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1rem;
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
    background: #d7d8de;
    left: 4.25rem;
    top: 47%;
    position: absolute;
  }
`;
