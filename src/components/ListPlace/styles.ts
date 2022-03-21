import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 668px) {
    width: 100%;
  }
`;

export const CardList = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  padding: 20px;
  background-color: #257146;

  @media screen and (max-width: 668px) {
    width: 100%;
  }
`;

export const Place = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: #fff;
  font-weight: 200;
`;

export const DistrictName = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 5px;
  @media screen and (max-width: 468px) {
    font-size: 25px;
  }
`;

export const StreetName = styled.h5`
  margin: 0;
`;

export const CityName = styled.span`
  margin-top: 40px;
  font-size: 16px;
  strong {
    text-transform: uppercase;
    font-weight: 400;
  }
`;
