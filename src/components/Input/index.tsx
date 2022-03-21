import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import apiUrl from "../../services/api";
import { ButtonSearch, InputContainer } from "./styles";

interface PropsInterface {
  getData: (res: string) => void;
}

const Input: React.FC<PropsInterface> = (props: PropsInterface) => {
  const [cep, setCep] = useState("");

  const getCep = async (e: any) => {
    e.preventDefault();
    const response: any = await apiUrl.get(`${cep}${"/json"}`);

    props.getData(response);
    return null;
  };

  return (
    <InputContainer onSubmit={getCep}>
      <input
        type="text"
        value={cep}
        name="cep"
        onChange={(e) => setCep(e.target.value)}
        maxLength={8}
        placeholder="Digite seu cep...."
      />
      <ButtonSearch>
        <FaSearch />
      </ButtonSearch>
    </InputContainer>
  );
};

export default Input;
