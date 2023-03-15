import { useState } from "react";
import "./styles/Gallery.css"
export function Gallery() {
    const [imageId, setImageId] = useState(0)

    var myImage = new Array();
    myImage[0] = "a.jpg";
    myImage[1] = "b-1.jpg";
    myImage[2] = "c-1.jpg";
    myImage[3] = "d-scaled.jpg";
    myImage[4] = "g-scaled.jpg";
    myImage[5] = "j-scaled.jpg";
    myImage[6] = "567-1.jpg";
    myImage[7] = "567-2.jpg";
    myImage[8] = "m.jpg";

    const onClickHandlerRight = () => {
        if (imageId == myImage.length - 1)
            setImageId(0);
        else
            setImageId(imageId => imageId + 1);
    }
    const onClickHandlerLeft = () => {
        if (imageId == 0)
            setImageId(myImage.length - 1);
        else
            setImageId(imageId => imageId - 1);
    }

    return (
        <>
            <div className="main-body">
                <img src={"imgs/gallery/" + myImage[imageId]} className="image" />
                <div className="icon-box-left" onClick={onClickHandlerLeft} style={{ cursor: 'pointer' }}>
                    <img src="imgs/back.png" className="icon" />
                </div>
                <div className="icon-box-right" onClick={onClickHandlerRight} style={{ cursor: 'pointer' }}>
                    <img src="imgs/next.png" className="icon" />
                </div>
                <div className="bullets">
                    {
                        myImage.map((item, index) =>
                        (
                            <>
                                <div className="bullet" onClick={() => setImageId(index)} />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}