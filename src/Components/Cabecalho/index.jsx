import React from "react";
import styled from "styled-components"
import bank_logo from "../../assets/images/bank_logo.svg";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 0.5px solid white;

  background: #30cfd0;
  color: white;
`;

const StyledCabecalho = styled.nav`
  background: linear-gradient(to right, #30cfd0 , #330867);
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">Ajuda</BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledCabecalho>
  );
};

export default Cabecalho;
