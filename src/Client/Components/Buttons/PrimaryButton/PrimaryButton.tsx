import React, { FunctionComponent } from 'react';
import s from "./primary.module.scss"
interface OwnProps {
  title: string
  action: ()=>void
}

type Props = OwnProps;

const PrimaryButton: FunctionComponent<Props> = (props) => {

  const onButtonClick = () => {
    props.action()
  }
  return (
      <button className={s.primary} onClick={onButtonClick}>Начать проект</button>
  );
};

export default PrimaryButton;
