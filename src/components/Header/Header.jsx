import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

export default function Header(props) {
  console.log('props', props);

  return (
    <header className="color">
      <h1> {props.title} </h1>
      <Menu links={props.links}></Menu>
    </header>
  );

}



