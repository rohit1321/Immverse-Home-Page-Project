


import Image from "next/image";

export default function SignUp() {
    return (
        
        <section className="signup-section position-relative impact">
            
            <div className="container-fluid p-0 position-relative d-none d-md-block ">
                {/* Background Image */}
                <div className="signup-image-container container">
                    <Image
                        src="/signUp/signup.svg"
                        alt="Signup Banner"
                        // layout="fill"
                        // objectFit="cover"
                        width={100}
                        height={100}
                        className="signup-banner"
                    />
                </div>

                {/* Overlay Content */}
                <div className="signup-overlay container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 signup-text ">
                            <h2 className="signup-title ms-3">
                                Sign-up For Early access on <br className="d-none d-md-block" /> Immverse Products!
                            </h2>
                        </div>
                        <div className="col-12 col-md-4 signup-cta">
                            <div className="signup-button">Sign-Up Now!</div>
                            <div className="signup-subtitle">Get all the latest updates!</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid p-0 position-relative d-block d-md-none py-3">
                {/* Background Image */}
                <div className="signup-image-container d-flex justify-content-center container ">
                    <Image
                        src="/signUp/sm-bg.svg"
                        alt="Signup Banner"
                        width={400}
                        height={100}
                        className="signup-banner"
                    />
                </div>

                {/* Overlay Content */}
                <div className="signup-overlay container ">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 signup-text">
                            <h2 className="signup-title">
                                Sign-up For <br /> Early access on <br/> Immverse Products!
                            </h2>
                        </div>
                        <div className="col-12 col-md-4 signup-cta">
                            <div className="signup-button">Sign-Up Now!</div>
                            <div className="signup-subtitle">Get all the latest updates!</div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
}