import * as S from './style.ts'
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useState } from "react";
import {
  getData
} from './api'
import { CardProps } from "./api/interface";

export const Home = () => {

  const[data, setData] = useState<CardProps>()
  const[username, setUsername] = useState('')
  const[alert, setAlert] = useState('')

  async function clickHandler() {
    if(!username) setAlert('Please, enter a username')
    const userInfos = await getData(username);
    setData(userInfos);
    setAlert('')
  }

  return (
    <S.Container>
      <Header/>
      <Input onClick={clickHandler} setUsername={setUsername}/>
      {data && !alert && <Card {...data} />}
      {alert && <h2>{alert}</h2>}

    </S.Container>
  );
};
