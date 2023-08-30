import * as S from './style.ts'
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useState } from "react";
import { getData } from './api'
import { CardProps } from "./api/interface";
import { toast } from "react-toastify";
import { Alert } from "../../components/Alert";

export const Home = () => {

  const[data, setData] = useState<CardProps>()
  const[username, setUsername] = useState('')

  async function clickHandler() {
    if(!username) return toast.warning('Please, enter a username')
    try {
      const userInfos = await getData(username);
      toast.success('Github user info loaded!');
      setData(userInfos);
    } catch (error) {
      toast.error('User not found!');
    }

  }

  return (
    <S.Container>
      <Header/>
      <Input onClick={clickHandler} setUsername={setUsername}/>
      {data && <Card {...data} />}
      <Alert />
    </S.Container>
  );
};
