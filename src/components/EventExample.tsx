import React, {useState, useRef} from 'react';

const EventExample: React.FC = () => {
  const [value, setValue] = useState<string>()

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO [9] Типизация событий. В react ивент обернут в синтетик ивент. Название через доку смотрим - ChangeEvent. И указываем джинерик какой тип элемента
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO [10] для событий с мышкой - MouseEvent
    console.log('EventExample - value =', value);

    console.log('inputRef - value =', inputRef.current?.value);
  };
  
  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый инпут'/>
      <button onClick={clickHandler}>Кнопка ИвентЭкземпла</button>

      <input ref={inputRef} type="text" placeholder='НЕ Управляемый инпут'/>
    </div>
  );
};

export default EventExample;