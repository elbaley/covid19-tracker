import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>
        C
        <svg className='covid' xmlns='http://www.w3.org/2000/svg'>
          <path
            class='covidlogo'
            d='M46.5,19A1.49977,1.49977,0,0,0,45,20.5V22H40.87225a16.9,16.9,0,0,0-3.53-8.51367l2.92121-2.92139,1.17582.99561a1.49993,1.49993,0,1,0,2.12134-2.1211l-4.99991-5a1.4999,1.4999,0,0,0-2.12127,2.1211l.99565,1.17578-2.92139,2.92138A16.90205,16.90205,0,0,0,26,7.12793V3h1.5a1.5,1.5,0,0,0,0-3h-7a1.5,1.5,0,0,0,0,3H22V7.12793a16.90205,16.90205,0,0,0-8.51367,3.52978L10.56494,7.73633l.99565-1.17578a1.4999,1.4999,0,0,0-2.12127-2.1211l-4.88475,5a1.49993,1.49993,0,0,0,2.12133,2.1211l1.06067-.99561,2.92121,2.92139A16.9,16.9,0,0,0,7.12775,22H3V20.5a1.5,1.5,0,0,0-3,0v7a1.5,1.5,0,0,0,3,0V26H7.12775a16.9,16.9,0,0,0,3.53,8.51367L7.73657,37.43506l-1.17582-.99561a1.49993,1.49993,0,0,0-2.12134,2.1211l4.99991,5a1.4999,1.4999,0,1,0,2.12127-2.1211l-.99565-1.17578,2.92127-2.92138A16.902,16.902,0,0,0,22,40.87207V45H20.5a1.5,1.5,0,0,0,0,3h7a1.5,1.5,0,0,0,0-3H26V40.87207a16.902,16.902,0,0,0,8.51379-3.52978l2.92127,2.92138-.99565,1.17578a1.4999,1.4999,0,0,0,2.12127,2.1211l4.99991-5a1.49993,1.49993,0,1,0-2.12134-2.1211l-1.17582.99561-2.92121-2.92139A16.9,16.9,0,0,0,40.87225,26H45v1.5a1.5,1.5,0,0,0,3,0v-7A1.49977,1.49977,0,0,0,46.5,19Zm-28,1A3.5,3.5,0,1,1,22,16.5,3.49994,3.49994,0,0,1,18.5,20ZM30,33a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,30,33Z'
          />
        </svg>{" "}
        VID-19
      </h1>
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
  .covid {
    height: 48px;
    width: 48px;
    margin-right: -1rem;
  }
  .covidlogo {
    fill: #418fde;
    display: inline;
    height: 48px;
  }
`;
