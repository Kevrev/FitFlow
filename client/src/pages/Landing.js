// import { Link } from "react-router-dom";
import '../styles/Landing.scss';

function Landing() {
    return (
        <div className="Landing">
            <div className="banner-container">
                <div className="banner">
                    <div className="landing-blurb">
                        <h1>START YOUR JOURNEY TODAY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>What we provide</h2>
                <div className="service-container">
                    <div className="service">
                        <h3>Placeholder 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="service">
                        <h3>Placeholder 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="service">
                        <h3>Placeholder 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>  
    );
    }

export default Landing;