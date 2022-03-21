import React, { useState } from 'react';
import { Container, CardList, Place, DistrictName, StreetName, CityName } from './styles';

interface PropsInterface{
 data?: any
}



const ListPlace: React.FC<PropsInterface> = (props) => {
  const { data } = props.data

  return (
    <>
    <Container>
      <CardList>
        <Place>
        {data  ? (
         <>
         <DistrictName>{data.bairro}</DistrictName>
         <StreetName>{data.logradouro}</StreetName>
         <CityName>{data.localidade} <strong>{data.uf}</strong></CityName></>
        ) :(
          <h4>Por favor digite um cep</h4>
        )}
        </Place>
      </CardList>
    </Container>
    </>
  );
}

export default ListPlace;