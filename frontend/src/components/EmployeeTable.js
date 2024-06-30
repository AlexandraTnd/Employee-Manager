import { useState, useEffect } from 'react';

function EmployeeTable() {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://localhost:4000/');
            const data = await response.json();
            console.log(data.employees);
            setEmployees(data.employees);
        }
        getData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th style={{width: "5%"}}></th>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Address</th>
                    <th style={{width: "10%"}}>Position</th>
                    <th style={{width: "10%"}}>Hire Date</th>
                </tr>

            </thead>
            <tbody>
                { employees ? 
                employees.map((employee, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{employee.firstName + " " + employee.lastName}</td>
                            <td>{employee.address.street + " no. " + employee.address.streetNumber + ", " + employee.address.city}</td>
                            <td className='text-center'>{employee.position}</td>
                            <td className='text-center'>{employee.hireDate}</td>
                        </tr>
                    )}) : <tr><td colSpan={5} className='text-center'>No Data to view</td></tr>
            }
            </tbody>
        </table>
    )
}

export default EmployeeTable;