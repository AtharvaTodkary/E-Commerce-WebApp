import React from "react";
import { ExternalLink } from 'react-external-link';

export default function AtharvaInfo() {
    return (
        <>
            <div className="col-md-12 d-flex justify-content-center">
                <div className="p-3">
                    <h1 className="fw-bolder text-center" style={{ fontSize: "50px" }}>Created By.</h1>
                    <h3 className="fw-bold text-center" style={{ fontSize: "30px" }}>Atharva Todkary</h3>
                    <br />
                    <ul className="list-unstyled">
                        <li className="fs-5"><i className="fa-brands fa-linkedin"></i> &nbsp;
                            <ExternalLink href="https://www.linkedin.com/in/atharva-todkary10"
                                className="fs-6">
                                www.linkedin.com/in/atharva-todkary10
                            </ExternalLink>
                        </li>
                        <li className="fs-5"><i className="fa-brands fa-github"></i> &nbsp;
                            <ExternalLink href="https://github.com/AtharvaTodkary"
                                className="fs-6">
                                https://github.com/AtharvaTodkary
                            </ExternalLink>
                        </li>
                        <li className="fs-5"><i className="fa-solid fa-envelope"></i> &nbsp;
                            <span className="fs-6">
                                atharvatodkary@gmail.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <div className="col-md-5 text-center m-5">
                    <h3><u>Also checkout</u></h3>
                    <ExternalLink href="https://improved-credit-scoring-system-caa-ue47.onrender.com">https://improved-credit-scoring-system-caa-ue47.onrender.com</ExternalLink><br /><br />
                    <span>Our innovative credit scoring and loan prediction system leverages cutting-edge AI and machine learning technologies to provide users with a comprehensive suite of financial tools.</span><br />
                    <small>Feel free to visit our Website and calculate your credit score</small>
                </div>
            </div>
        </>
    )
}