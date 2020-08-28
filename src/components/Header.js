import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const StyledH2 = styled.h2`
  padding-top: 10px;
  font-size: 17px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledDiv>
      <h1>Skontaktuj się!</h1>
      <StyledH2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quisquam
        nostrum.
      </StyledH2>
    </StyledDiv>
  );
};

export default Header;
