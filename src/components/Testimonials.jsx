import { useState } from "react"
import testimonials from "../data/testimonials.json"
import "./styles/Testimonials.css"

export function Testimonials() {
    const [testimonialId, setTestimonialId] = useState(0)

    var t = setTimeout(() => {
        if (testimonialId == testimonials.length - 1)
            setTestimonialId(0);
        else
            setTestimonialId(testimonialId + 1);
    }, 5000);


    return (
        <>
            <div className="testimonials-box">
                <div className="subtitle">
                    <span>Happy Clients</span>
                </div>
                <h2><strong>Words From</strong> Our Clients</h2>
                <div className="testimonial-group">
                    <div className="testimonial">
                        <h3>{testimonials.at(testimonialId - 2).title}</h3>
                        <div className="text">
                            <span>{testimonials.at(testimonialId - 2).text}</span>
                        </div>
                        <div className="author">
                            <img src={testimonials.at(testimonialId - 2).imgUrl} alt="portrait" />
                            <div className="author-name">{testimonials.at(testimonialId - 2).name}</div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <h3>{testimonials.at(testimonialId - 1).title}</h3>
                        <div className="text">
                            <span>{testimonials.at(testimonialId - 1).text}</span>
                        </div>
                        <div>
                            <img src={testimonials.at(testimonialId - 1).imgUrl} alt="portrait" />
                            <div>{testimonials.at(testimonialId - 1).name}</div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <h3>{testimonials.at(testimonialId).title}</h3>
                        <div className="text">
                            <span>{testimonials.at(testimonialId).text}</span>
                        </div>
                        <div>
                            <img src={testimonials.at(testimonialId).imgUrl} alt="portrait" />
                            <div>{testimonials.at(testimonialId).name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}