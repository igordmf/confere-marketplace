import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Content = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 140px auto;

  >div:nth-child(2) {
    align-items: center;
    display:flex;
    justify-content: space-between;
    width: 180px;

    button {
      background-color: #e8ebf1;
      border-radius: 8px;
      padding: 8px 10px;
    }
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  margin: 20px auto;
  max-width: 1800px;
`;

