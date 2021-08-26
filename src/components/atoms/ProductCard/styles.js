import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 8px 2px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 220px;
  padding: 20px;
  text-align: center;
  width: 480px;

  img {
    border-radius: 6px;
    margin: 12px auto;
    height: 100%;
    width: 100%;
  }

  >span {
    color: #1a1859;
    margin: 3px 0;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    &:first-child {
      width: 70%;
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