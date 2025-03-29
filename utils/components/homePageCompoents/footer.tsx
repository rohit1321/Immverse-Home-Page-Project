import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="impact ">
        {/* <div className=" d-flex justify-content-center ">
                <div className="row  ">
                    <div className="col-lg-6 col-md-6 col-8 text-center text-start text-white footer-box rounded-3 ">
                        <div className="p-5 pb-0">
                            <div className="d-flex justify-content-star">
                                <Image
                                    src="/icons-footer/immverse-logo.svg"
                                    width={190}
                                    height={50}
                                    alt="Award"
                                    className="img-fluid py-2 text-start"
                                />
                            </div>

                            <div className="d-flex text-start w-100  my-3 font-25  ms-footer-text-4">Before you go, <br />
                                check out these links
                            </div>
                            <div className="d-flex text-start gap-5 font-18 mt-5">
                                <div className="">
                                    <ul className="p-0">Company
                                        <li>About Us</li>
                                        <li>Docs</li>
                                        <li>Contact Us</li>

                                    </ul>

                                </div>
                                <div className="">
                                    <ul className="p-0">Resources
                                        <li>Tutorials & Guides</li>
                                        <li>Documentation</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6  text-white ">
                        <div className=" footer-box rounded-3 ">
                            <div className="px-5 py-4 ">
                                <div className="text-start font-25">
                                    Train, Optimize, and <br /> Scale With Us
                                </div>
                                <div className="py-4 ">
                                    <ul className="font-16 p-0" >Support
                                        <li>Partnerships</li>
                                        <li>Request a Demo</li>
                                        <li>Join the team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around mt-4 ">
                            <div className="footer-box   m-2 p-4 rounded-3">
                                <Image
                                    src="/icons-footer/x.svg"
                                    width={50}
                                    height={50}
                                    alt="Award"
                                    className="img-fluid  p-2 text-center  "
                                />
                            </div>
                            <div className="footer-box  m-2 p-4 rounded-3">
                                <Image
                                    src="/icons-footer/linkedin.svg"
                                    width={50}
                                    height={50}
                                    alt="Award"
                                    className="img-fluid p-2 text-start "
                                />
                            </div>
                            <div className="footer-box  m-2 p-4 rounded-3">
                                <Image
                                    src="/icons-footer/Img - instagram → SVG.svg"
                                    width={50}
                                    height={50}
                                    alt="Award"
                                    className="img-fluid p-2 text-start "
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

        <div className="d-none d-md-block pt-3 overflow-hidden">
          <div className=" d-flex  justify-content-evenly">
            <div className="row  ">
              <div className="col-lg-6 col-md-6 col-8 text-center text-start text-white footer-box rounded-3 ">
                <div className="p-5 pb-0">
                  <div className="d-flex justify-content-star">
                    <Image
                      src="/icons-footer/immverse-logo.svg"
                      width={190}
                      height={50}
                      alt="Award"
                      className="img-fluid py-2 text-start"
                    />
                  </div>

                  <div className="d-flex text-start w-100  my-3 font-25  ms-footer-text-4">
                    Before you go, <br />
                    check out these links
                  </div>
                  <div className="d-flex text-start gap-5 font-18 mt-5">
                    <div className="">
                      <ul className="p-0 ">
                        Company
                        <li className="footer-light-color">About Us</li>
                        <li className="footer-light-color">Docs</li>
                        <li className="footer-light-color">Contact Us</li>
                      </ul>
                    </div>
                    <div className="">
                      <ul className="p-0  ">
                        Resources
                        <li className="footer-light-color">Tutorials & Guides</li>
                        <li className="footer-light-color">Documentation</li>
                        <li className="footer-light-color">FAQs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6  text-white ">
                <div className=" footer-box rounded-3 ">
                  <div className="px-5 py-4 ">
                    <div className="text-start font-25">
                      Learn, Innovate and <br /> Lead. Unlock Your <br />{" "}
                      potential with us.
                    </div>
                    <div className="py-4 ">
                      <ul className="font-16 p-0 footer-light-color">
                        <li>Contact Us: hello@immverse.ai</li>
                        <li>Support</li>
                        <li>Terms and Conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-around mt-2 ">
                  <div className="footer-box   m-2 ms-0 mb-0 p-4 rounded-3">
                    <Image
                      src="/icons-footer/x.svg"
                      width={45}
                      height={45}
                      alt="Award"
                      className="img-fluid  p-2 text-center  "
                    />
                  </div>
                  <div className="footer-box  m-2 p-4 mb-0 rounded-3">
                    <Image
                      src="/icons-footer/linkedin.svg"
                      width={45}
                      height={45}
                      alt="Award"
                      className="img-fluid p-2 text-start "
                    />
                  </div>
                  <div className="footer-box  m-2 me-0 mb-0 p-4 rounded-3">
                    <Image
                      src="/icons-footer/Img - instagram → SVG.svg"
                      width={45}
                      height={45}
                      alt="Award"
                      className="img-fluid p-2 text-start "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for small screen  */}

        <div className="d-block d-md-none pt-3 overflow-hidden container">
          <div className="d-flex justify-content-center">
            <div className="col-11 text-center text-start text-white footer-box rounded-3">
              <div className="p-5 pb-0">
                <div className="d-flex justify-content-start">
                  <Image
                    src="/icons-footer/immverse-logo.svg"
                    width={190}
                    height={50}
                    alt="Award"
                    className="img-fluid py-2"
                  />
                </div>

                <div className="d-flex text-start w-100 my-3 font-25 ms-footer-text-4">
                  Before you go, <br />
                  check out these links
                </div>
                <div className="d-flex text-start gap-3 font-18 mt-5 ">
                  <div className="col-6">
                    <ul className="p-0">
                      Company
                      <li className="footer-light-color">About Us</li>
                      <li className="footer-light-color">Docs</li>
                      <li className="footer-light-color">Contact Us</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="p-0">
                      Resources
                      <li  className="footer-light-color">Tutorials & Guides</li>
                      <li  className="footer-light-color">Documentation</li>
                      <li  className="footer-light-color">FAQs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-3 mt-3 row">
              <div className="footer-box  d-flex  justify-content-evenly px-3  py-2   mb-2 rounded-3">
                <Image
                  src="/icons-footer/x.svg"
                  width={35}
                  height={35}
                  alt="Close"
                  className="img-fluid  text-center"
                />
              </div>
              <div className="footer-box  d-flex justify-content-center px-3  py-2    mb-2 rounded-3">
                <Image
                  src="/icons-footer/linkedin.svg"
                  width={35}
                  height={35}
                  alt="LinkedIn"
                  className="img-fluid text-start"
                />
              </div>
              <div className="footer-box  d-flex justify-content-center px-3  py-2   rounded-3">
                <Image
                  src="/icons-footer/Img - instagram → SVG.svg"
                  width={35}
                  height={35}
                  alt="Instagram"
                  className="img-fluid text-start"
                />
              </div>
            </div>
            <div className="col-8 pt-3 text-white rounded-3 pe-0">
              <div className="footer-box px-3 py-3 rounded-3">
                <div className="text-start font-19">
                  Learn, Innovate and <br /> Lead. Unlock Your <br /> potential
                  with us.
                </div>
                <div className="py-4">
                  <ul className="font-16 p-0 footer-light-color">
                    <li>Contact Us:- hello@immverse.ai</li>
                    <li>Support</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center footer-imm-text mt-5 pb-3">
          © 2025 <span className="text-white">Immverse AI.</span> All rights
          reserved
        </div>
      </section>

      <div className=" impact d-flex justify-content-center px-1">
        <Image
          src="/icons-footer/bt.svg"
          width={1300}
          height={1300}
          alt="LinkedIn"
          className="img-fluid text-start p-0 m-0"
        />
      </div>
    </>
  );
}
