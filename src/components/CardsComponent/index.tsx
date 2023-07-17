import { useState } from 'react';
import * as S from './styles';

interface CardListProps {
  size: number;
}

const CardList: React.FC<CardListProps> = ({ size }) => {
  const list = Array.from({ length: size }, () => 0);
  const [selectedCard, setSelectedCard] = useState<number>(-1);

  const handleSelect = (index: number) => {
    console.log(index);
    setSelectedCard(index);
  };

  return (
    <S.Container>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleSelect(index)}>
            {selectedCard === index ? 'up' : 'down'}
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default CardList;
