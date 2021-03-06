import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
<<<<<<< HEAD
  padding-right: 50px;
=======
  padding: 0 10px 0 10px;
>>>>>>> parent of 5666855 (fix: css style 2)
`;

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;

@media screen and (max-width: 668px) {
    .img {
        display: none
    }
`;

export const TextContainer = styled.div`
    max-width: 600px;
    margin-top: 35px;
    margin-bottom: 45px;
    h1 {
        font-size: 40px;
        font-weight: bold;
        text-transform:uppercase;
        text-align:left;
    }
    small {
        margin-top: 12px;
        font-size: 14px;
        font-weight: 500;
        color: #00000063;
    }
`
export const Row = styled.div`
    gap: 49px;
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
width: 80%;
margin-right: 10px;

svg {
    width: 250px;
    height: 250px
}

@media screen and (max-width: 668px) {
    svg {
        display: none
    }

  }
`;