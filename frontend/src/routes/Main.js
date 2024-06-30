import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";

function Main() {
    return (
        <div>
            <Header />
          <main>
            <section className="side-menu">
              <ul>
                <li><a href="/">See employees</a></li>
              </ul>
            </section>
            <section className="content">
              <EmployeeTable />
            </section>
          </main>
        </div>
      );
}

export default Main;