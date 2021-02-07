import React from 'react';


export default function Menu(props) {

    return (
      <ul className="menu">
        {props.links.map(
          (link, index) => {
            return (
              <li key={index}> {link} </li>
            );
          }
        )}
      </ul>
    )
  
  }