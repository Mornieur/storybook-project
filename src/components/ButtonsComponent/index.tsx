import { Button } from "@/global/components/Button";
import * as S from "./styles";

export const ButtonsComponent = () => {
  return (
    <S.Container>
      <Button theme="primary">Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="save">Save</Button>
      <Button theme="edit">Edit</Button>
      <Button theme="delete">Delete</Button>
    </S.Container>
  );
};
