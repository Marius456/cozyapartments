import testimonials from "../data/testimonials.json"
import "./styles/Testimonials.css"

export function Testimonials() {
    return (
        <>
            <div className="testimonials-box">
                <div className="subtitle">
                    <span>Happy Clients</span>
                </div>
                <h2><strong>Words From</strong> Our Clients</h2>
                <div className="testimonial-group">
                    {testimonials.map((item) => (
                        <div className="testimonial">
                            <h3>{item.title}</h3>
                            <div className="text">
                                <span>{item.text}</span>
                            </div>
                            <div>
                                <img src={item.imgUrl} alt="" />
                                <div>{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}