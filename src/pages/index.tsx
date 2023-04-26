import { ButtonsComponent } from "@/components/ButtonsComponent";
import { HomeComponent } from "@/components/HomeComponent";
import * as S from "../styles/home";

const Home = () => {
  return (
    <S.Container>
      <HomeComponent />
      <ButtonsComponent />
    </S.Container>
  );
};

export default Home;
