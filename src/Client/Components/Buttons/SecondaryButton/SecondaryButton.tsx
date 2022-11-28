import React, { FunctionComponent } from 'react';
import s from "./secondary.module.scss"
interface OwnProps {
  title: string
  action: ()=>void
}

type Props = OwnProps;

const SecondaryButton: FunctionComponent<Props> = (props) => {

  const onButtonClick = () => {
    props.action()
  }

  return (
      <button onClick={onButtonClick} className={s.secondary}>{props.title}</button>
  );
};

export default SecondaryButton;
