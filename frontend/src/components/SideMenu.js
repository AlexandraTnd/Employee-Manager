import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <ul>
            <li>
                <Link to="/">See employees</Link>
            </li>
            <li>
                <Link to="addNewEmployee">Add new employee</Link>
            </li>
            <li>
                <Link to="statistics">Statistics</Link>
            </li>
        </ul>
    )
}

export default SideMenu;