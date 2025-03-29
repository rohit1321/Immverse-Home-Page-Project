import Image from "next/image";

export default function SignUp() {
    return (
        <section className="impact relative">
            <div className="container py-5 relative">
                <Image
                    src="/signUp/signup.svg"
                    width={50}
                    height={50}
                    alt="Signup Banner"
                    className="sign w-100"
                />
                {/* Overlay text */}
                <div
                    className="position-absolute row d-flex w-100 container "
                    style={{
                        color: "white",
                        zIndex: 10,
                        padding: "10px",
                        borderRadius: "5px",
                        marginTop: "-11rem",
                        // marginLeft: "0.5rem",
                        padding:"1rem",
                        gap:"1rem",
                    }}
                >
                    <div className="col-8  ms-4">
                        <h2 className="text-start font-bold">Sign-up For Early access on <br /> Immverse Products!</h2>
                    </div>
                    <div className="col-2  ">
                            <div className="font-bold  text-center  bg-white py-2 px-3  rounded-3 text-black"> Sign-Up Now!</div>
                            <div className="text-center font-14">Get all the latest updates!</div>
                        </div>
                </div>
            </div>
        </section>
    );
}
