import React, { useEffect, useState } from 'react';
import { TextContainer, Wrapper, Container, Row, Column } from './styles';
import Input from '../../components/Input'
import Image from '../../components/Image';
import ListPlace from '../../components/ListPlace';
import Header from '../../components/Header';


const HomePage: React.FC = () => {

    const[data, setData] = useState('');
   
    const getData = (dt: string) => {
        setData(dt)
    }

    return (
        
        <>
        <Header/>
            <Row>
                <Wrapper>
                    <TextContainer>
                        <h1>buscar cep</h1>
                    </TextContainer>
                    <Input getData={getData}/>
                    <Container>
                    <Column>
                    <ListPlace data={data} />
                    </Column>
                    <Column className='img'>
                    <Image/>
                    </Column>
                    </Container>
                </Wrapper>
                
                
            </Row>
        </>
    )
}

export default HomePage