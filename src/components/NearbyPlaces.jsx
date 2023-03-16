import "./styles/NearbyPlaces.css"
export function NearbyPlaces() {
    return (
        <>
            <div className="places-box">
                <div className="image-box">
                    <img src="imgs/gallery/aaa.jpg" alt="house" className="image" />
                </div>
                <div className="about-box">
                    <div className="subtitle">
                        <span>A Few Words About Locality</span>
                    </div>
                    <h2><strong>Nearby</strong> Places</h2>
                    <div className="description">
                        <p>
                            Our apartments are situated in A. Mickevičiaus st. 6 building, just a perfect place for students studying in Kaunas. University buildings, main pedestrian street Laisvės alėja, one of biggest shopping center in Lithuania Akropolis, city old town can be reached in minutes by walk.
                        </p>
                    </div>
                    <div className="location-block-group">
                        <div className="location-block">
                            <h4>Schools</h4>
                            <p>All around the building</p>
                            <p>0.1 - 2 km</p>
                        </div>
                        <div className="location-block">
                            <h4>Shopping</h4>
                            <p>Mall of Akropolis</p>
                            <p>0.2 km</p>
                        </div>
                        <div className="location-block">
                            <h4>Leisure</h4>
                            <p>Laisvės al., Old Town, etc.</p>
                            <p>0.2 - 2 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}