import { useState } from 'react';

function Pagination({ employees, currentPage, setCurrentPage }) {
    
    const maxPages = Math.ceil(employees.length / 10);

    function handlePageChange(e) {
        if (e.target.innerText === "Next" && currentPage < maxPages) {
            setCurrentPage(currentPage + 1);
        } else if (e.target.innerText === "Previous" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(+e.target.innerText);
        }
    }

    return (
        <div id="pagination" >
            <ul className="pagination">
                <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                    <button onClick={(e) => handlePageChange(e)} className="page-link">Previous</button>
                </li>
                <li className={currentPage === 1 ? "page-item active" : "page-item"}>
                    <button onClick={(e) => handlePageChange(e)} className="page-link" >{currentPage === 1 ? "1" : currentPage - 1}</button>
                </li>
                <li className={currentPage !== 1 ? "page-item active" : "page-item"} aria-current="page">
                    <button onClick={(e) => handlePageChange(e)} className="page-link" href="/">{currentPage === 1 ? currentPage + 1 : currentPage === 2 ? currentPage : currentPage === maxPages ? maxPages - 1 : currentPage}</button>
                </li>
                {maxPages === 2 ? "" :
                    <li className={currentPage === maxPages ? "page-item active" : "page-item"}>
                        <button className="page-link" href="/">3</button>
                    </li>
                }
                <li className={currentPage === maxPages ? "page-item disabled" : "page-item"}>
                    <button onClick={(e) => handlePageChange(e)} className="page-link" href="/">Next</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;