import React from 'react';
import './characterItem.css';

function CharacterItem({name, img, desc}) {
    return (
        <li className="character_item">
            <img className="item_img" src={img}/>
            <h3 className="item_name text">{name}</h3>
            <p className="item_description text">{desc}</p>
        </li>
    );
}

export default CharacterItem;