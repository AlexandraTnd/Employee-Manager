import Header from "./Header";
import SideMenu from "./SideMenu";

function Statistics() {
    return (
        <div>
            <Header />
            <main>
                <section className="side-menu">
                    <SideMenu />
                </section>
                <section className="content">
                    <h1>TO DO</h1>
                </section>
            </main>
        </div>
    );
}

export default Statistics;