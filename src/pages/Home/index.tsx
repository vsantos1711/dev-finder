import * as S from "./style.ts";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  async function clickHandler() {
    if (!username) return toast.warning("Please, enter a username");
    navigate(`${username}`);
  }

  return (
    <S.Main>
      <S.Container>
        <Header />
        <Input onClick={clickHandler} setUsername={setUsername} />
      </S.Container>
    </S.Main>
  );
};
