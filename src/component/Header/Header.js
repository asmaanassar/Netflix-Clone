import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <>
            <div className="Header">
                <div className="top-Header">
                    <nav className="Link-header">
                        <Link to='/'> Home </Link>
                    </nav>
                    <div className="container">
                        <div id="Header-logo">
                            <div className="logo">
                                <h5>MovieApp</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Header;