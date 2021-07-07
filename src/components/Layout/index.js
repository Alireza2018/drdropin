import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    color: #22504e;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  font-size: 20px;
  background-color: #fff;
  position: relative;
`;

export const PageHeader = styled.div`
  height: 150px;
  padding: 45px 0;
  box-sizing: border-box;
  width: calc(100% - 300px);
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const ClinicsWrapper = styled.div`
  width: 700px;
`;

export const ClinicsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;