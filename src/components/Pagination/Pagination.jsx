import React from 'react';
import './pagination.css';
import {getPageNumberFromUrl} from "../../utils/getNumberFromUrl";

function Pagination({info, setUrl}) {

    const nextBtnStyles = info.next ? 'next_button btn' : 'next_button btn disabled_btn';
    const prevBtnStyles = info.prev ? 'previous_button btn' : 'previous_button btn disabled_btn';
    const pageNumber = info.next ? getPageNumberFromUrl(info.next) - 1 : info.pages;

    function nextBtnHandler() {
        info.next && setUrl(info.next);
    }

    function prevBtnHandler() {
        info.prev && setUrl(info.prev);
    }

    return (
        <footer className="buttons">
            <button
                disabled={!info.prev}
                className={prevBtnStyles}
                onClick={prevBtnHandler}
            >Previous</button>
            <p className="count_of_pages text">Pages: {pageNumber}</p>
            <button
                disabled={!info.next}
                onClick={nextBtnHandler}
                className={nextBtnStyles}
            >Next</button>
        </footer>
    );
}

export default Pagination;