import React from 'react';


export default function Menu(props) {

    const listLinks = 
    props.links.map(
        (link, index) => {
          return (
            <li key={index}> {link} </li>
          );
        }
      )

    return (
      <ul className="menu">
        {listLinks}
      </ul>
    )
  
  }