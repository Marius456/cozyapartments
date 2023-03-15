import "./styles/Navbar.css"
export function Navbar() {
    return (
        <>
            <div className="navbar-box">
                <div className="logo-box">
                    <a href="https://cozyapartments.lt/">
                        <img src="imgs/logo-black.png" alt="Logo" />
                    </a>
                </div>
                <div className="info-box">
                    <div className="icon-box">
                        <img src="imgs/location.png" className="icon" alt="location" />
                    </div>
                    <div className="text-box">
                        <p>A. Mickevičiaus st. 6,</p>
                        <p>Kaunas, Lithuania</p>
                    </div>
                </div>
                <div className="info-box">
                    <div className="icon-box">
                        <img src="imgs/clock.png" className="icon" alt="location" />
                    </div>
                    <div className="text-box">
                        <p>8:00-17:00</p>
                        <p>Saturday, Sunday : Closed</p>
                    </div>
                </div>
                <div className="info-box">
                    <div className="icon-box">
                        <img src="imgs/telephone.png" className="icon" alt="location" />
                    </div>
                    <div className="text-box">
                        <p>+370 640 27602</p>
                        <p>info@cozyapartments.lt</p>
                    </div>
                </div>
            </div>
        </>
    )
}