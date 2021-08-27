import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 8px 2px #00000029;
  display: flex;
  height: 210px;
  justify-content: space-around;
  min-width: 500px;
  padding: 15px;
  text-align: center;
  width: 1200px;

  div:nth-child(1) {
    height: 85%;
  }
  
  img {
    border-radius: 6px;
    height: 100%;
  }

  div:nth-child(4) {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 76px;
    justify-content: center;
  }

  >span {
    color: #1a1859;
    margin: 3px 0;

    button {
      background-color: #e8ebf1;
      border-radius: 6px;
      padding: 2px 10px 0 10px;
      margin: 0 5px;
      transition: 0.2s ease-in-out all;

      &:hover {
        transform: scale(1.08);
      }
    }
  }

  >span:nth-child(6) {
    color: #ff963a;
    font-size: 1.4rem;
    font-weight: 800;
  }

  >button {
    background-color: #816cff;
    border-radius: 8px;
    color: white;
    margin-top: 10px;
    padding: 8px 20px;
    transition: 0.2s ease-in-out all;

    &:hover {
      transform: scale(1.01);
    }
  }
`

export const NoDiscountPrice = styled.span`
  color: #a0a8ba;
  text-decoration: line-through;
`
export const Discount = styled.span`
  background-color: #00e7ba;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  width: 60px;
`
export const FinalPrice = styled.span`
  color: #ff963a;
  font-size: 1.4rem;
  font-weight: 800;
`