import styled, { css } from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #263238;
  color: #fff;
  border-radius: 7px;
  padding: 4px 5px;
  align-items: center;
  width: 330px;
  input {
    width: 400px;
    flex-basis: 95%;
    background-color: #263238;
    border: none;
    padding: 14px 40px;
    margin-right: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    &::placeholder {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 668px) {
    width: 100%;
  }

  @media screen and (max-width: 468px) {
    input {
      width: 130px;
    }
  }
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ccc;
  }
`;
