import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

function Main() {
    return (
        <div>
            <Header />
            <main>
                <section className="side-menu">
                    <SideMenu />
                </section>
                <section className="content">
                    <EmployeeTable />
                </section>
            </main>
        </div>
    );
}

export default Main;