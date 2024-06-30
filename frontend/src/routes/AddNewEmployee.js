import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewEmployee() {
    const [newEmployee, setNewEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "address": {
            "street": "",
            "streetNumber": "",
            "city": ""
        },
        "position": "",
        "hireDate": ""
    });
    const [inputsFilled, setInputsFilled] = useState(true);
    const [employeeAdded, setEmployeeAdded] = useState(false);
    const [count, setCount] = useState(3);
    const navigate = useNavigate();

    function handleFnameChange(e) {
        setNewEmployee((prev) => ({ ...prev, "firstName": e.target.value }))
    }

    function handleLnameChange(e) {
        setNewEmployee((prev) => ({ ...prev, "lastName": e.target.value }))
    }

    function handleStreetChange(e) {
        setNewEmployee((prev) => ({ ...prev, "address": { ...prev.address, "street": e.target.value } }))
    }

    function handleStreetNoChange(e) {
        setNewEmployee((prev) => ({ ...prev, "address": { ...prev.address, "streetNumber": e.target.value } }))
    }

    function handleCityChange(e) {
        setNewEmployee((prev) => ({ ...prev, "address": { ...prev.address, "city": e.target.value } }))
    }

    function handlePositionChange(e) {
        setNewEmployee((prev) => ({ ...prev, "position": e.target.value }))
    }

    function handleHireDate(e) {
        setNewEmployee((prev) => ({ ...prev, "hireDate": e.target.value }))
    }

    async function handleAddNewEmployee(e) {
        e.preventDefault();
        if (newEmployee.firstName === "" || newEmployee.lastName === "" ||
            newEmployee.address.street === "" || newEmployee.address.streetNumber === "" ||
            newEmployee.address.city === "" || newEmployee.position === "" ||
            newEmployee.hireDate === ""
        ) {
            setInputsFilled(false);
        } else {
            const response = await fetch("http://localhost:4000/addnewemployee", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newEmployee)
            });
            const result = await response.json();
            if (result.message === "employee added") {
                setEmployeeAdded(true);
            }
        }
    }

    useEffect(() => {
        if (employeeAdded) {
            const interval = setInterval(() => {
                // update the state after 1000ms
                setCount((currentCount) => currentCount - 1);
              }, 1000);
            if (count === 0) {
                navigate("/");
                return () => clearInterval(interval);
            }
        } 
    }, [employeeAdded, count, navigate])

    return (
        <div>
            <Header />
            <main>
                <section className="side-menu">
                    <SideMenu />
                </section>
                <section className={employeeAdded ? "hidden" : "content"}>
                    <h1><span className="text-primary">Add</span> new employee</h1>
                    <form className="add-new">
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            name="fname"
                            placeholder="Enter first name"
                            onChange={(e) => handleFnameChange(e)}
                        ></input>
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            name="lname"
                            placeholder="Enter last name"
                            onChange={(e) => handleLnameChange(e)}
                        ></input>
                        <hr />
                        <h4>Address</h4>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            name="street"
                            placeholder="Enter street name"
                            onChange={(e) => handleStreetChange(e)}
                        ></input>
                        <label htmlFor="streetNo">No.</label>
                        <input
                            type="text"
                            name="streetNo"
                            placeholder="Enter street number"
                            onChange={(e) => handleStreetNoChange(e)}
                        ></input>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            onChange={(e) => handleCityChange(e)}
                        ></input>
                        <hr />
                        <label htmlFor="position">Position:</label>
                        <input
                            type="text"
                            name="position"
                            placeholder="Enter position"
                            onChange={(e) => handlePositionChange(e)}
                        ></input>
                        <label htmlFor="hiredate">Hire Date:</label>
                        <input
                            type="date"
                            name="hiredate"
                            onChange={(e) => handleHireDate(e)}
                        ></input>
                        <button onClick={(e) => handleAddNewEmployee(e)}>Add</button>
                        <div className={inputsFilled ? "hidden" : "warning"}>Please fill all the fields!</div>
                    </form>
                </section>
                <section className={employeeAdded ? "content" : "hidden"}>
                    <h1><span className="text-primary">Employee</span> succesfully added</h1>
                    <p className="text-center">Redirecting you in {count}s</p>
                </section>
            </main>
        </div>
    );
}

export default AddNewEmployee;