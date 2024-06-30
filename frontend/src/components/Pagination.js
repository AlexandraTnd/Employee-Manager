import {useEffect, useState} from 'react';

function Pagination({ employees }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1);

    useEffect(() => {
        if (employees) {
            setMaxPages(employees.length % 10);
            console.log(employees.length % 10);
        }
    }, [])
    return (
        <div id="pagination" >
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;