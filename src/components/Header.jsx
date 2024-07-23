import logo from "../assets/investment-calculator-logo.png"
function Header() {
    return <header>
        <div id="header">
            <img src={logo} alt="showing logo" ></img>
            <h1>Investment calculator</h1>
        </div>
    </header>
}

export default Header