import { Loading } from "@/global/components/Animation";
import * as S from "./styles";

export const HomeComponent = () => {
  return (
    <S.Container>
      <S.BubblesContainer>
        <S.Bubbles2 speed={30} left={2} color1={"white"} color2={"awhite"} />
        <S.Bubbles2 speed={45} left={4} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={25} left={6} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={48} left={8} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={78} left={10} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={65} left={12} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={48} left={14} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={35} left={16} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={48} left={18} color1={"white"} color2={"white"} />
        <S.Bubbles2 speed={36} left={20} color1={"white"} color2={"white"} />

        <S.Bubbles speed={36} left={80} color1={"white"} color2={"white"} />
        <S.Bubbles speed={48} left={82} color1={"white"} color2={"white"} />
        <S.Bubbles speed={35} left={84} color1={"white"} color2={"white"} />
        <S.Bubbles speed={48} left={86} color1={"white"} color2={"white"} />
        <S.Bubbles speed={65} left={88} color1={"white"} color2={"white"} />
        <S.Bubbles speed={78} left={90} color1={"white"} color2={"white"} />
        <S.Bubbles speed={48} left={92} color1={"white"} color2={"white"} />
        <S.Bubbles speed={25} left={94} color1={"white"} color2={"white"} />
        <S.Bubbles speed={45} left={96} color1={"white"} color2={"white"} />
        <S.Bubbles speed={30} left={98} color1={"white"} color2={"white"} />
      </S.BubblesContainer>
      <Loading label="Carregando" />
    </S.Container>
  );
};
