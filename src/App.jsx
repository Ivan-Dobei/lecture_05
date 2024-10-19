import React, {useEffect, useState} from 'react';
import './index.css';
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import CharacterList from "./components/CharacterList/CharacterList";
import Pagination from "./components/Pagination/Pagination";

function App() {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

    useEffect(() => {
        fetchCharacters(url);
    }, [url])

    async function fetchCharacters(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setInfo(data.info);
            setCharacters(data.results);

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className="main_div">
            <Header/>
            <section className="container main_section">
                {!characters && <Loading/>}
                <CharacterList characterList={characters}/>
            </section>
            <Pagination info={info} setUrl={setUrl}/>
        </div>
    );
}

export default App;