const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
};
const App = () => {
    return (
        <Layout>
            <h2>Main Content Area</h2>
            <p>This is the main content of the page.</p>
        </Layout>
    );
};
export default App;
