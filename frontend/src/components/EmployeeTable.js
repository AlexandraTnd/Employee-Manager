import { useState, useEffect } from 'react';
import Pagination from './Pagination';

function EmployeeTable() {
    const [employees, setEmployees] = useState();
    const [isAscendingByName, setIsAscendingByName] = useState(false);
    const [isAscendingByPosition, setIsAscendingByPosition] = useState(false);
    const [isAscendingByHireDate, setIsAscendingByHireDate] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    function sortByName() {
        if (!isAscendingByName) {
            const orderedEmployees = [...employees].sort((a, b) => {
                if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
                    return -1;
                }
                if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            setIsAscendingByName(true);
            setEmployees(orderedEmployees);
        } else {
            const orderedEmployees = [...employees].sort((a, b) => {
                if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
                    return 1;
                }
                if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
            setIsAscendingByName(false);
            setEmployees(orderedEmployees);
        }
    }

    function sortByPosition() {
        if (!isAscendingByPosition) {
            const orderedEmployees = [...employees].sort((a, b) => {
                if (a.position.toLowerCase() < b.position.toLowerCase()) {
                    return -1;
                }
                if (a.position.toLowerCase() > b.position.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            setIsAscendingByPosition(true);
            setEmployees(orderedEmployees);
        } else {
            const orderedEmployees = [...employees].sort((a, b) => {
                if (a.position.toLowerCase() < b.position.toLowerCase()) {
                    return 1;
                }
                if (a.position.toLowerCase() > b.position.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
            setIsAscendingByPosition(false);
            setEmployees(orderedEmployees);
        }
    }

    function sortByHireDate() {
        if (!isAscendingByHireDate) {
            const orderedEmployees = [...employees].sort((a, b) => new Date(a.hireDate) - new Date(b.hireDate));
            setIsAscendingByHireDate(true);
            setEmployees(orderedEmployees);
        } else {
            const orderedEmployees = [...employees].sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate));
            setIsAscendingByHireDate(false);
            setEmployees(orderedEmployees);
        }
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://localhost:4000/');
            const data = await response.json();
            setEmployees(data.employees);
            setMaxPages(Math.ceil(data.employees.length / 10));
        }
        getData();
    }, []);

    return (
        <section className="content">
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}></th>
                        <th style={{ width: "20%" }}>Name<button onClick={() => sortByName()}><i className="fa-solid fa-sort"></i></button></th>
                        <th style={{ width: "40%" }}>Address</th>
                        <th style={{ width: "10%" }}>Position<button onClick={() => sortByPosition()}><i className="fa-solid fa-sort"></i></button></th>
                        <th style={{ width: "10%" }}>Hire Date<button onClick={() => sortByHireDate()}><i className="fa-solid fa-sort"></i></button></th>
                    </tr>

                </thead>
                <tbody>
                    {employees ?
                        employees.map((employee, index) => {
                            return (
                                index + 1 > (currentPage - 1) * 10 && index < currentPage * 10 ?
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{employee.lastName + " " + employee.firstName}</td>
                                        <td>{employee.address.street + " no. " + employee.address.streetNumber + ", " + employee.address.city}</td>
                                        <td className='text-center'>{employee.position}</td>
                                        <td className='text-center'>{employee.hireDate}</td>
                                    </tr> : ""
                            )
                        }) : <tr><td colSpan={5} className='text-center'>No Data to view</td></tr>
                    }
                </tbody>
            </table>
            {employees ? <Pagination employees={employees} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} /> : ""}
        </section>
    )
}

export default EmployeeTable;