import { NavbarTop } from "../components/NavbarTop";
import { ImLocation } from "react-icons/im";
import { BsFillFlagFill } from "react-icons/bs";
import { HiClock } from "react-icons/hi";
import { TbInnerShadowTopRightFilled } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import ReviewCard from "../AllCards.jsx/ReviewCard";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { MdVerifiedUser } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Footer } from "../components/Footer";
import { AppNav } from "../components/AppNav";

const items = [
  {
    image: "https://picsum.photos/id/237/200/300",
    altText: "Image 1",
    caption: "First Image",
    description: "This is the first image in the carousel.",
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    altText: "Image 2",
    caption: "Second Image",
    description: "This is the second image in the carousel.",
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    altText: "Image 3",
    caption: "Third Image",
    description: "This is the third image in the carousel.",
  },
];

const items2 = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    altText: "Image 1",
    caption: "First Image",
    description: "This is the first image in the carousel.",
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    altText: "Image 2",
    caption: "Second Image",
    description: "This is the second image in the carousel.",
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    altText: "Image 3",
    caption: "Third Image",
    description: "This is the third image in the carousel.",
  },
];

const UserProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const [activeIndex2, setActiveIndex2] = useState(0);

  const handlePrevClick2 = () => {
    setActiveIndex2(activeIndex2 === 0 ? items.length - 1 : activeIndex2 - 1);
  };

  const handleNextClick2 = () => {
    setActiveIndex2(activeIndex2 === items.length - 1 ? 0 : activeIndex2 + 1);
  };

  return (
    <>
      <NavbarTop />
      <AppNav/>
      <section className="container my-5">
        <div className="row">
          <div className="col-xl-8 col-12  userdata1">
            <div
              className="container for-52  d-flex justify-content-start align-items-center position-relative"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              {/* user picture */}
              <div className="rounded-circle avtar">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.720988941.1672488382&semt=ais"
                  alt="userimage"
                  className="avtar"
                  width="100%"
                  height="100%"
                />
              </div>

              {/* user basic detials */}
              <div
                className="d-flex
                            for-52px
                            justify-content-space-between  w-100  align-items-start "
                style={{ justifyContent: "space-between", marginLeft: "15px" }}
              >
                <div className="usernames">
                  <h2 className="">Username</h2>
                  <h3>lorest dolore manage</h3>
                  <p>useradmin@gnsy.com</p>
                  {/* three icon woth name like location and other here */}

                  <div
                    className="iconmaster d-flex justify-content-around  align-items-center w-100 "
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className=" d-flex justify-content-center">
                      <ImLocation
                        style={{
                          fontSize: "14px",
                          color: "E33225",
                          margin: "5px",
                        }}
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        London
                      </p>
                    </div>

                    <div className=" d-flex justify-content-center">
                      <BsFillFlagFill
                        style={{
                          fontSize: "14px",
                          color: "#38E325",
                          margin: "5px",
                        }}
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        United Kindome
                      </p>
                    </div>

                    <div className=" d-flex justify-content-center">
                      <HiClock
                        style={{
                          fontSize: "14px",
                          color: "E33225",
                          margin: "3px",
                        }}
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        London
                      </p>
                    </div>
                  </div>
                </div>
                <a className="mt-2 editbtn">Edit Profile</a>
              </div>
            </div>

            {/* about me text */}

            <div className="container loremdata">
              <p style={{ fontWeight: "300" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae impedit rerum provident similique rem, nobis
                consequatur esse praesentium fugit molestiae ea saepe voluptatem
                deserunt molestias beatae tenetur quas odit! Dolor quibusdam
                voluptates voluptatum sapiente nemo pariatur commodi quia
                explicabo sed possimus? Quam culpa esse rem corrupti ea sint
                ipsum accusantium velit, officiis, nulla, ad repellendus
                reiciendis suscipit reprehenderit possimus asperiores
                dignissimos praesentium magni expedita mollitia consequuntur ut!
                Eligendi placeat perferendis unde autem. Voluptatibus fugit
                nihil minus dolor iure voluptatum deleniti officiis ipsam iusto
                aspernatur fuga suscipit repellat, voluptates, voluptate hic
                aliquam! Delectus molestiae dolorem provident assumenda
                explicabo laboriosam dolorum tenetur fuga ullam eaque.
              </p>
              {/* about me btn */}

              <div className="w-100 d-flex databtn mt-5 mb-2">
                <a
                  href="#"
                  className="firstbtn d-flex justify-content-center align-items-center flex-row   text-decoration-none"
                >
                  <TbInnerShadowTopRightFilled
                    style={{ fontSize: "60px", color: "white" }}
                  />
                  <span className="span1 d-flex justify-content-center align-items-center flex-column">
                    <h2 style={{ fontSize: "14px" }}>Profile completed</h2>
                    <p style={{ fontSize: "12px", marginRight: "5px" }}>
                      profile veryfication
                    </p>
                  </span>
                  <FiArrowRight />
                </a>

                <a
                  href="#"
                  className="firstbtn secnad  d-flex justify-content-center align-items-center flex-row   text-decoration-none "
                >
                  <GoGraph style={{ fontSize: "40px", color: "white" }} />
                  <span
                    className="span1 d-flex justify-content-center align-items-center flex-column"
                    style={{ marginLeft: "10px" }}
                  >
                    <h2 style={{ fontSize: "14px" }}>Amount</h2>
                    <p style={{ fontSize: "12px", marginRight: "5px" }}>
                      Your earning data
                    </p>
                  </span>
                  <FiArrowRight />
                </a>
              </div>

              {/* Prtfolio items */}

              <div className="container  mt-5 mb-5 p-2">
                <div
                  className="d-flex  justify-content-space-between  align-items-center flex-row"
                  style={{
                    justifyContent: " space-between",
                  }}
                >
                  <h2 style={{ fontSize: "20px" }}>Prtfolio items </h2>
                  <a className="editbtn" style={{ fontWeight: "bold" }}>
                    Manage
                  </a>
                </div>
                {/* carosle */}

                <div className="d-flex  justify-content-space-between mt-4 mb-5 flex-column  flex-md-row">
                  <div
                    className=" col-12 col-md-6 mr-3"
                    style={{ marginRight: "10px" }}
                  >
                    <div className="carousel w-100">
                      <div className="carousel-inner position-relative">
                        {items.map((item, index) => (
                          <div
                            className={`carousel-item${
                              index === activeIndex ? " active" : ""
                            }`}
                            key={index}
                          >
                            <img
                              src={item.image}
                              alt={item.altText}
                              width="100%"
                              height="300px"
                            />
                            <div
                              className="
                                                        position-absolute   bottom-0 carosle-text"
                            >
                              <h3>{item.caption}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                      <a
                        className="carousel-control-prev"
                        onClick={handlePrevClick}
                      >
                        <AiFillLeftCircle
                          style={{ fontSize: "28px", color: "#0E1B73" }}
                        />
                      </a>
                      <a
                        className="carousel-control-next"
                        onClick={handleNextClick}
                      >
                        <AiFillRightCircle
                          style={{ fontSize: "28px", color: "#0E1B73" }}
                        />
                      </a>
                    </div>
                  </div>

                  {/* secand crosle */}

                  <div className=" col-12 col-md-6 mt-10 mb-20 mb-md-0 cr-2-786">
                    <div className="carousel w-100">
                      <div className="carousel-inner position-relative">
                        {items2.map((item, index) => (
                          <div
                            className={`carousel-item${
                              index === activeIndex2 ? " active" : ""
                            }`}
                            key={index}
                          >
                            <img
                              src={item.image}
                              alt={item.altText}
                              width="100%"
                              height="300px"
                            />
                            <div
                              className="
                                                        position-absolute   bottom-0 carosle-text"
                            >
                              <h3>{item.caption}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                      <a
                        className="carousel-control-prev"
                        onClick={handlePrevClick2}
                      >
                        <AiFillLeftCircle
                          style={{ fontSize: "28px", color: "#0E1B73" }}
                        />
                      </a>
                      <a
                        className="carousel-control-next"
                        onClick={handleNextClick2}
                      >
                        <AiFillRightCircle
                          style={{ fontSize: "28px", color: "#0E1B73" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* user Review  */}

                <div className="container rev-bor  mt-5 mb-3 p-2">
                  <div
                    className="d-flex  justify-content-space-between  align-items-center flex-row"
                    style={{
                      justifyContent: " space-between",
                    }}
                  >
                    <h2 style={{ fontSize: "20px" }}>Reviews</h2>
                    <a className="editbtn" style={{ fontWeight: "bold" }}>
                      View All
                    </a>
                  </div>
                </div>
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
          </div>

          {/* secand part of pages */}

          <aside
            className="col-xl-4 col-12 aside-x"
            style={{ marginLeft: "0px" }}
          >
            <div className="container  secand-men-part ">
              <div className=" xnx mb-2">
                <h2 className="">verifications</h2>

                <div>
                  <span className="line-ico">
                    <HiUsers className="icon-line" />
                    <p>Preferred Freelancer</p>
                  </span>

                  <span className="line-ico">
                    <HiOutlineUser className="icon-line" />
                    <p>Identity Verified</p>
                  </span>

                  <span className="line-ico">
                    <MdVerifiedUser className="icon-line" />
                    <p>Payment Verified</p>
                  </span>
                  <span className="line-ico">
                    <BsTelephoneFill className="icon-line" />
                    <p>Phone Verified</p>
                  </span>

                  <span className="line-ico">
                    <MdEmail className="icon-line" />
                    <p>Email Verified</p>
                  </span>

                  {/* <BsTelephoneFill /> */}
                </div>

                <div>
                  <span
                    className="skils w-100 d-flex justify-content-space-between  align-items-center "
                    style={{ justifyContent: "space-between" }}
                  >
                    <h2>Top Skills</h2>
                    <a href="#" className="editbtn">
                      Edit Skils
                    </a>
                  </span>

                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>
                  <p className="skill-key">Lorem ipsum dolor sit amet.</p>

                  <a href="#" className="view">
                    View More
                  </a>
                </div>

                {/* qualification */}

                <div className="mt-5 mb-5">
                  <span
                    className="skils w-100 d-flex justify-content-space-between  align-items-center "
                    style={{ justifyContent: "space-between" }}
                  >
                    <h2>Qualifications</h2>
                    <a href="#" className="editbtn">
                      Add Qualifications
                    </a>
                  </span>
                  <p className="noexp">No experiences have been added.</p>
                </div>

                {/* Publications */}
                <div className="mt-5 mb-5">
                  <span
                    className="skils w-100 d-flex justify-content-space-between  align-items-center "
                    style={{ justifyContent: "space-between" }}
                  >
                    <h2>Publications</h2>
                    <a href="#" className="editbtn">
                      Add Publications
                    </a>
                  </span>
                  <p className="noexp">No Publications have been added.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="position-relative last-div">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/filmyduniya-e7c40.appspot.com/o/Drop.png?alt=media&token=8ee77ec5-d564-4d7d-bcd3-eab12c428020"
          alt="Drop png"
          className="Drop-img"
        />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
