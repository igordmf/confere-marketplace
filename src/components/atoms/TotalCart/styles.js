import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 8px 2px #00000029;
  display: flex;
  height: 180px;
  justify-content: space-around;
  min-width: 500px;
  padding: 15px;
  text-align: center;
  width: 1200px;

  @media(max-width: 1250px) {
    width: 80%;
  }

  >div span:nth-child(1) {
    font-weight: 500;
  }

  >div:nth-child(1) span:nth-child(2) {
    font-weight: 500;
  }

  >button {
    background-color: #4998ff;
    border-radius: 8px;
    color: white;
    font-size: large;
    margin-top: 10px;
    padding: 12px 20px;
    transition: 0.2s ease-in-out all;

    &:hover {
      transform: scale(1.04);
    }
  }
`

export const TotalPrice = styled.span`
  color: #ff963a;
  font-size: 1.4rem;
  font-weight: 800;
`