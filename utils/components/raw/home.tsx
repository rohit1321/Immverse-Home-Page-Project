import Image from "next/image";

export default function HomePageBanner() {
    return (
        <section className="banner-section vh-100 w-100 position-relative">
           
            <div className="background-image"></div>
            <div className="text-center text-white banner-text pt-5 py-3 position-relative">
                Immortalizing Humans
                <div>
                    with <span className="banner-pink-text">Artificial Intelligence</span>
                </div>
            </div>
            <div className="text-center text-white banner-quote-para mt-2 position-relative">
                Bringing the power of AI to everyone, everywhere. Unlock limitless{" "}
                <br /> possibilities with our innovative solutions.
            </div>

            <div className="banner-btn d-flex justify-content-center my-5 gap-3 position-relative">
                <button className="btn border-0 py-2 rounded-5 px-5 text-white explore-btn">
                    Explore
                </button>
                <button className="btn d-flex border py-2 rounded-5 px-3 text-white gap-2">
                    <div>Get to know us</div>
                    <Image
                        src="/homepage/ArrowRight.svg"
                        width={25}
                        height={25}
                        alt="Arrow Right"
                    />
                </button>
            </div>
            <div className="d-flex gap-5 container my-5 position-relative">
                {[...Array(4)].map((_, index) => (
                    <div className="position-relative" key={index}>
                        <Image
                            src="/homepage/award.svg"
                            width={250}
                            height={250}
                            alt="Award"
                            className="img-fluid"
                        />
                        <div
                            className="position-absolute text-center"
                            style={{
                                color: "white",
                                zIndex: 10,
                                padding: "10px",
                                borderRadius: "5px",
                                marginTop: "-8rem",
                                marginLeft: "1.6rem",
                            }}
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