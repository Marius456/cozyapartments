import "./styles/About.css"
export function About() {
    return (
        <>
            <div className="main">
                <div className="about-box">
                    <div className="subtitle">
                        <span>A few words about us</span>
                    </div>
                    <h2><strong>Welcome To</strong> Cozy Apartments</h2>
                    <div className="description">
                        <p>
                            If you are a student or a single person - you are at the right place to look for your temporary home! Most of our apartments are similarly, thoughtfully arranged, their size is about 18m². The fast cable internet is installed in every room and can be activated if needed. There are a lot of foreign students in the building - you will probably find your peers here.
                            <br />
                            Cozy Apartments is better than student dormitory - studying environment is calm, no partying or other noise around. All the utilities are in the room - you are the only person using them.
                            <br />
                            Cozy Apartments is also better than privately held apartments - detailed contract is signed, there is only one payment for you to perform one time per month - no separate bills from different utility providers or hidden costs.
                            <br />
                            All our apartments are located at 4th, 5th, and 6th floors. Since the building hasn't got an elevator, please consider this fact. Please also note that the smoking is not allowed inside the building.
                            <br />
                            We do not provide exact rent price since it depends on contract period, time of the year and the exact apartment condition, so please contact us for a price offer, indicating the planned stay period.
                        </p>
                    </div>
                    <a href="https://www.google.com/maps/place/Cozy+Apartments/@54.8925667,23.9145119,16z/data=!4m8!1m2!2m1!1scozy+apartments!3m4!1s0x46e723cfa76d6f63:0x80e8c21b1bcf166f!8m2!3d54.894021!4d23.917445" >
                        <div className="button">
                            <span>View On Map</span>
                        </div>
                    </a>
                </div>
                <div className="info-column">
                    <div className="inner-info-box">
                        <div className="icon-box">
                            <img src="imgs/location.png" className="icon" alt="location" />
                        </div>
                        <div className="info-text">
                            <p>A. MICKEVIČIAUS ST. 6,</p>
                            <p>KAUNAS</p>
                        </div>
                    </div>
                    <div className="inner-info-box">
                        <div className="icon-box">
                            <img src="imgs/bed.png" className="icon" alt="bed" />
                        </div>
                        <div className="info-text">
                            <p>OVER TWENTY</p>
                            <p>APARTMENTS</p>
                        </div>
                    </div>
                    <div className="inner-info-box">
                        <div className="icon-box">
                            <img src="imgs/shower.png" className="icon" alt="shower" />
                        </div>
                        <div className="info-text">
                            <p>ALL UTILITIES INSIDE THE</p>
                            <p>ROOMS</p>
                        </div>
                    </div>
                    <div className="inner-info-box">
                        <div className="icon-box">
                            <img src="imgs/open-book.png" className="icon" alt="book" />
                        </div>
                        <div className="info-text">
                            <p>DESIGNED FOR</p>
                            <p>STUDENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}