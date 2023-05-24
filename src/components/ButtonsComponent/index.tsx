import { Button } from '@/global/components/Button';
import * as S from './styles';
import { TextAnimation } from '@/global/components/TextAnimation';

export const ButtonsComponent = () => {
  return (
    <S.Container>
      <TextAnimation type="title" isOpen={true} text="Buttons Examples" />
      <S.ButtonsContainer>
        <Button theme="primary">Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="save">Save</Button>
        <Button theme="edit">Edit</Button>
        <Button theme="delete">Delete</Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};
