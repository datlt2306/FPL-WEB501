function Header(props) {
    console.log(props);
    return (
        <header>
            {props.title}
            {props.children}
        </header>
    );
}
export default Header;
