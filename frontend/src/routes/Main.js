import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

function Main() {
    return (
        <div>
            <Header />
            <main>
                <SideMenu />
                <EmployeeTable />
            </main>
        </div>
    );
}

export default Main;