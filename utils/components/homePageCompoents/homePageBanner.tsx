import Image from "next/image";

export default function HomePageBanner() {
    return (
        <section className="banner-section h-auto w-100 position-relative py-4 ">
            <div className="background-image"></div>
            <div className="container mt-5">
            <div className="text-center text-white banner-text pt-5 py-3 position-relative ">
               <div className=" "> Immortalizing Humans</div>
                <div>
                    with <span className="banner-pink-text">Artificial Intelligence</span>
                </div>
            </div>
            <div className="text-center text-white banner-quote-para mt-2 position-relative">
                Bringing the power of AI to everyone, everywhere. Unlock limitless{" "}
                <br /> possibilities with our innovative solutions.
            </div>
            </div>

            <div className="banner-btn d-flex justify-content-center my-5 gap-3 position-relative row">
                <button className="btn border-0 py-2 rounded-5 px-5 text-white explore-btn col-lg-2 col-md-3  col-7 ">
                    Explore
                </button>
                <button className="btn d-flex justify-content-center border py-2 rounded-5 px-3 text-white  gap-2 col-lg-2 col-md-3 col-7">
                    <div>Get to know us</div>
                    <Image
                        src="/homepage/ArrowRight.svg"
                        width={25}
                        height={25}
                        alt="Arrow Right"
                    />
                </button>
            </div>



            <div className="awards-container container my-5  position-relative d-flex justify-content-center">
                {[...Array(2)].map((_, index) => (
                    <div className="award-card position-relative" key={index}>
                        <Image
                            src="/homepage/award.svg"
                            width={250}
                            height={250}
                            alt="Award"
                            className="img-fluid"
                        />
                        <div
                            className="position-absolute text-center award-text "
                        >
                            <h4>2024</h4>
                            <p>Financial Services Review</p>
                            <p>Top 10 Investment Firms</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}