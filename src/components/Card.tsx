import React, {PropsWithChildren, useState} from 'react';

export enum CardVariant {
  outlined = 'outlined', // карточка обведена рамкой
  primary = 'primary', // карточка залита цветов
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick: (option: number) => void;
}

// TODO [1] React.FC<PropsWithChildren<CardProps>> - интерфейс для пропсов
const Card: React.FC<PropsWithChildren<CardProps>> = (
  {
    width,
    height,
    variant,
    onClick,
    children,
    }) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '3px solid green' : 'none',
        background: variant === CardVariant.primary ? 'lightyellow' : ''
      }}
      onClick={() => onClick(state)}
    >
      <div>Карточка</div>
      {children}
    </div>
  );
};

export default Card;