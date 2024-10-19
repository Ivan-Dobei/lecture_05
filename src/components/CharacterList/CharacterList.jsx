import React from 'react';
import './characterList.css';
import CharacterItem from "../CharacterItem/CharacterItem";

function CharacterList({characterList}) {
    return (
        <ul className="character_list">
            {characterList.map(item =>
                <CharacterItem
                    key={item.id}
                    img={item.image}
                    name={item.name}
                    desc={item.status}
                />
            )}
        </ul>
    );
}

export default CharacterList;