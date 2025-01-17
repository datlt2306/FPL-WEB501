// function component
// trước 16.8

import Nav from "./Nav";
const Header = () => {
    return (
        <header>
            <div className="text-center py-3">
                <img src="./logo.svg" alt="" width="150" height="40" />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
