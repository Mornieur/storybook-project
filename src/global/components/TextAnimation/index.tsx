import React from 'react';
import { motion } from 'framer-motion';
import * as S from './style';

interface ITextAnimation {
  type: 'title' | 'text';
  text: string;
  isOpen?: boolean;
}
export const TextAnimation: React.FC<ITextAnimation> = ({
  isOpen = false,
  text = '',
  type = 'text',
}) => {
  const transitionDuration = (dropdown: boolean) => {
    return dropdown
      ? { delay: 0.2, duration: 0.5 }
      : { delay: 0, duration: 0.2 };
  };

  return (
    <S.Container>
      {type === 'title' && isOpen && (
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionDuration(isOpen)}
          style={{ color: '#000' }}
        >
          {text}
        </motion.h3>
      )}
      {type === 'text' && isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionDuration(isOpen)}
        >
          {text}
        </motion.p>
      )}
    </S.Container>
  );
};
