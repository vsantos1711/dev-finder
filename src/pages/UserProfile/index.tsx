import * as S from "./style.ts";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";
import { getData } from "../Home/api";
import { CardProps } from "../Home/api/interface";
import { useParams, useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const [data, setData] = useState<CardProps>();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user } = useParams();

  const request = useCallback(async () => {
    try {
      const userInfos = await getData(user ?? "");
      toast.success("Github user info loaded!");
      setData(userInfos);
    } catch (error) {
      toast.error("User not found!");
    }
  }, [user]);

  useEffect(() => {
    request();
  }, [request]);

  async function clickHandler() {
    if (!username) return toast.warning("Please, enter a username");
    navigate(`/${username}`);
  }

  return (
    <S.Main>
      <S.Container>
        <Header />
        <Input onClick={clickHandler} setUsername={setUsername} />
        {data && <Card {...data} />}
      </S.Container>
    </S.Main>
  );
};
