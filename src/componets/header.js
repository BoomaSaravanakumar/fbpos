import '../styles/header.css';
import Logo from "../images/logo.jpg"
import { Link} from "react-router-dom";

function Header() {
    return (
        <div className="Header ">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div align="center">
                        <img src={Logo} class="logo" alt="" style={{ width: "70px" }} />

                        <a class="navbar-brand" id="title" href="#" >FooDie Hub</a>
                    </div>
                    <div class="">

                        <button class="goback mr-2" type="submit"><Link to="/dashboard">Go To Dashboard</Link></button>

                        <button className="prevbtn mr-2" >Go Back</button>
                        <button class="logout " type="submit"><Link to="/login">Logout <i class="bi bi-box-arrow-in-right" /></Link></button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
