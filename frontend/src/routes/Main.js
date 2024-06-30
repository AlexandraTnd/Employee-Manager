import EmployeeTable from "../components/EmployeeTable";

function Main() {
    return (
        <div>
          <header>
            <h1><span className="text-primary">Employee</span> Manager</h1>
          </header>
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