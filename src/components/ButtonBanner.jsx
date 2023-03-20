import "./styles/ButtonBanner.css"
export function ButtonBanner() {    
    const onClickHandler_Location = () => {
        window.open('https://www.google.com/maps/place/Cozy+Apartments/@54.8925667,23.9145119,16z/data=!4m8!1m2!2m1!1scozy+apartments!3m4!1s0x46e723cfa76d6f63:0x80e8c21b1bcf166f!8m2!3d54.894021!4d23.917445');
    }
    const onClickHandler_Home = () => {
        window.open('https://cozyapartments.netlify.app/',"_self");
    }

    return (
        <>
            <div className="banner">
                <div className="banner-button" onClick={onClickHandler_Location} style={{ cursor: 'pointer' }}>
                    <div className="icon-box">
                        <img src="imgs/location-white.png" className="icon" alt="location" />
                    </div>
                    <div className="text-box">
                        <span>SEE MAP</span>
                    </div>
                </div>
                <div className="banner-button" onClick={onClickHandler_Home} style={{ cursor: 'pointer' }}>
                    <div className="icon-box">
                        <img src="imgs/up-arrow-white.png" className="icon" alt="up" />
                    </div>
                    <div className="text-box">
                        <span>SCROLL UP</span>
                    </div>
                </div>
            </div>
        </>
    )
}