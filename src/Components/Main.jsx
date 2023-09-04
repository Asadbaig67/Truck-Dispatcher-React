import React, { useEffect, useState } from "react";
import truck from "./images/truck.jpg";
import truck2 from "./images/truck2.jpg";
import truck4 from "./images/truck4.png";
import truck5 from "./images/truck5.jpg";
import truck3 from "./images/truck3.jpg";
import mail from "./images/mail.jpg";
import road from "./images/road.jpg";
import sign from "./images/sign.jpg";
import saleperson from "./images/saleperson.png";
import Nav from "./Nav";
import Rating from "@mui/material/Rating";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { useMediaQuery } from "@mui/material";
import Loader from "./Loader";
import { Email } from "./Email";
import { Resend } from "resend";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Logo1 from "./images/IMG-20230904-WA0016.jpg";
import Logo2 from "./images/IMG-20230904-WA0017.jpg";
import Logo3 from "./images/IMG-20230904-WA0018.jpg";
import Logo6 from "./images/pngkey.com-amazon-logo-white-png-7614081.png";
import Logo7 from "./images/pngkey.com-uber-logo-png-38627.png";

const Main = () => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [value, setValue] = React.useState(5);

  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copySuccess]);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const Mobile = useMediaQuery("(max-width:500px)");
  const Tablet = useMediaQuery("(max-width:768px)");
  const Laptop = useMediaQuery("(max-width:1200px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div className="container-fluid">
            <div className="conatiner">
              <div className="row">
                <div
                  className={`col-md-6 col-sm-12`}
                  style={Mobile ? {} : { paddingLeft: "40px" }}
                >
                  <div className="p-3 ms-3 mt-2">
                    <h1 className={`fw-bold ${Mobile ? "row" : ""} fs-1`}>
                      Transforming supply chains through our dynamic dispatch
                      strategies
                    </h1>
                    <p className="fw-lighter fs-5">
                      We find the best paying loads in the market. Get a
                      dedicated dispatcher assigned for you and don't worry any
                      more about spending time looking for loads or empty miles.
                    </p>
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-50 p-3 fw-bold`}
                    >
                      Hire a Dispatcher Today
                    </button>
                  </div>
                </div>
                <div
                  className={`col-md-6 ${Mobile ? "" : "ps-5"} col-sm-12 mt-2`}
                  style={Mobile ? {} : { paddingLeft: "40px" }}
                >
                  <div className="">
                    <img src={truck} className="img-fluid" alt="truck" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row mt-5">
                <h1 className="fs-1 text-center fw-bold">
                  Dry Vans,Reefers,Flatbeds, {Mobile ? <br /> : ""} Stepdecks
                  ,Box Trucks and Hotshots
                </h1>
                <p className="mt-3 fst-italic text-center ">
                  A Bigger Equipment makes you more Money!
                </p>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={truck2}
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6"
                  style={Mobile ? {} : { marginTop: "80px" }}
                >
                  <div className="">
                    <h1 className="fw-bold">
                      Hit the road on your <br /> terms, you're the boss
                    </h1>
                    <p className="fst-italic fw-light">
                      Loads, rates and routes are your choice, no force
                      dispatching. We make sure you get the best freight at the
                      best rate and get paid on time. Documentation, prices and
                      fees are disclosed upfront. To receive SMS notifications
                      from us, we require your email address.
                    </p>
                    {/* <input
                      className={`bar ${Mobile ? "w-100" : ""}`}
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    /> */}
                    {/* <button className={`btn ${Mobile ? "w-100 p-3 mt-2" : "btn2"}`}> */}
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-25 ms-1 py-3 fw-bold`}
                    >
                      Start Today!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-3">
              <div className="row">
                <div className="parent">
                  <img
                    src={truck3}
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />

                  <div className={`${Tablet ? "mt-3" : "centered"}`}>
                    <h1 className={`${Tablet ? "text-warning" : ""} fw-bold`}>
                      Call Us Today,get loaded <br /> & be Profitable Now
                    </h1>
                    <CopyToClipboard
                      text="+1 (786)-373-3171"
                      onCopy={() => setCopySuccess(true)}
                    >
                      <button
                        className={` ${
                          Tablet ? "w-100 p-3 mt-2" : "btn1"
                        } btn p-3 fw-bold `}
                      >
                        CALL NOW{" "}
                        {copySuccess ? (
                          <>
                            <span className="small text-light">Copied!</span>
                          </>
                        ) : (
                          <ContentCopyIcon
                            className="text-light ms-2"
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>

            <div className="row part5-II p-5">
              <h1 className="text-center mb-5 fw-bold">
                Look What People Say About Us
              </h1>
              <div
                className={`col-lg-3 ${
                  Mobile ? "my-2" : ""
                } col-md-6 col-sm-12`}
              >
                <div
                  className="card text-bg-light mb-3"
                  style={{ height: "auto" }}
                >
                  <div className="card-header">
                    <h3 className="card-title">DNA Trucking INC </h3>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        readOnly
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                      )}
                    </Box>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Outstanding dispatch service! From their excellent
                      communication to their user-friendly interface, this team
                      ensures my shipments are always on track. Their
                      reliability and efficiency are unmatched. Highly
                      recommended for anyone in the transportation business! .
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-lg-3 ${
                  Mobile ? "my-2" : ""
                } col-md-6 col-sm-12`}
              >
                <div
                  className="card text-bg-light mb-3"
                  style={{ height: "auto" }}
                >
                  <div className="card-header">
                    <h3 className="card-title">PAX Trucking LLC</h3>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        readOnly
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                      )}
                    </Box>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Top-tier dispatch service! They handle my logistics
                      seamlessly, providing constant updates and a user-friendly
                      platform. Their precision and dedication have streamlined
                      my operations. A must-have for anyone in transport!.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-lg-3 ${
                  Mobile ? "my-2" : ""
                } col-md-6 col-sm-12`}
              >
                <div
                  className="card text-bg-light mb-3"
                  style={{ height: "auto" }}
                >
                  <div className="card-header">
                    <h3 className="card-title">KCM Transportation</h3>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        readOnly
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                      )}
                    </Box>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Flawless dispatching! This team's commitment to excellence
                      is evident through their organized approach and real-time
                      monitoring. My deliveries are always prompt, and their
                      service has heightened my operational efficiency. A
                      definite five-star service!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-lg-3 ${
                  Mobile ? "my-2" : ""
                } col-md-6 col-sm-12`}
              >
                <div
                  className="card text-bg-light mb-3"
                  style={{ height: "auto" }}
                >
                  <div className="card-header">
                    <h3 className="card-title">Lopez Hauling Inc</h3>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        readOnly
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                      )}
                    </Box>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our company, Lopez Hauling, just started back in July of
                      2021 and Genius Dispatch has been with us since the
                      beginning. They have been so helpful with us being a start
                      up company and not knowing much about the industry to
                      knowing where the money is and what we need to do to.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="text-center">
                <img
                  className="pt5img img-fluid"
                  style={{ position: "relative", top: "-100px" }}
                  src={truck4}
                  alt="truck4"
                />
              </div>
            </div>

            <div className="container mb-4">
              <h1 className="fw-bold my-3 text-center">
                Industry Leading Brokers
              </h1>
              <div className="row text-center">
                <div className="col-md-4 col-sm-12 mx-auto">
                  <img
                    src={Logo1}
                    height="250px"
                    width="200px"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-md-4 col-sm-12 mx-auto">
                  <img
                    src={Logo2}
                    height="250px"
                    width="200px"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-md-4 col-sm-12 mx-auto">
                  <img
                    src={Logo3}
                    height="250px"
                    width="200px"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-md-6 col-sm-12 my-5 mx-auto">
                  <img
                    src={Logo6}
                    height="250px"
                    width="200px"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-md-6 col-sm-12 my-5 mx-auto">
                  <img
                    src={Logo7}
                    height="250px"
                    width="200px"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row p-1">
                <h1 className="text-center fw-bold  mb-5">
                  Getting started is easy
                </h1>
                <div
                  className={`col-md-6 ${
                    Laptop ? "my-2" : ""
                  } col-lg-4 mx-auto  card shadow`}
                  style={{ height: "300px", width: "400px" }}
                >
                  <div className="text-center my-auto">
                    <img src={mail} alt="mail" />
                    <h2>Send Documents</h2>
                    <p>MC Authority, Certificate of Insurance and W-9 Form.</p>
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-50 p-3 fw-bold`}
                    >
                      Send Documents
                    </button>
                  </div>
                </div>
                <div
                  className={`col-md-6 ${
                    Laptop ? "my-2" : ""
                  } col-lg-4 mx-auto card shadow`}
                  style={{ height: "300px", width: "400px" }}
                >
                  <div className="text-center my-auto">
                    <img src={sign} alt="sign" />
                    <h2>Sign Agreement</h2>
                    <p>
                      Sign a quick and easy dispatch service level agreement.
                    </p>
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-50 p-3 fw-bold`}
                    >
                      Request Agreement
                    </button>
                  </div>
                </div>
                <div
                  className={`col-md-6 ${
                    Laptop ? "my-2" : ""
                  } col-lg-4 mx-auto card shadow`}
                  style={{ height: "300px", width: "400px" }}
                >
                  <div className="text-center my-auto">
                    <img src={road} alt="road" />
                    <h2>Hit the road</h2>
                    <p>We start dispatching your truck immediately.</p>
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-50 p-3 fw-bold`}
                    >
                      Hire a Dispatcher
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <section className="text-center mb-5">
                <div className="mb-4">
                  <h1 className="text-center fw-bold">Pricing</h1>
                  <h4>We have flexible pricing</h4>
                </div>

                <div className="row gx-lg-5">
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-header bg-white py-3">
                        <p className="text-uppercase mb-2">
                          <strong>Dry Van & Reefers</strong>
                        </p>
                        <span className="mb-0">
                          Flat Rate <span className="text-warning">$250</span>{" "}
                          <br />
                          OR <br />
                          (4% per load)
                        </span>
                      </div>

                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            24/7 Dedicated Dispatcher
                          </li>
                          <li className="list-group-item">Lane Preferences</li>
                          <li className="list-group-item">You're The Boss</li>
                        </ul>
                      </div>

                      <div className="card-footer bg-white py-3">
                        <CopyToClipboard
                          text="+1 (786)-373-3171"
                          onCopy={() => alert("Copied!")}
                        >
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                          >
                            Call Now
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border border-primary">
                      <div className="card-header bg-white py-3">
                        <p className="text-uppercase mb-2">
                          <strong>Stepdecks & flatbeds</strong>
                        </p>
                        <span className="mb-0">
                          Flat Rate <span className="text-warning">$250</span>{" "}
                          <br />
                          OR <br />
                          (5% per load)
                        </span>
                      </div>

                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            24/7 Dedicated Dispatcher
                          </li>
                          <li className="list-group-item">Lane Preferences</li>
                          <li className="list-group-item">You're The Boss</li>
                        </ul>
                      </div>

                      <div className="card-footer bg-white py-3">
                        <CopyToClipboard
                          text="+1 (786)-373-3171"
                          onCopy={() => alert("Copied!")}
                        >
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                          >
                            Call Now
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-header bg-white py-3">
                        <p className="text-uppercase mb-2">
                          <strong>boxtruck & hotshots</strong>
                        </p>
                        <span className="mb-0">
                          Flat Rate <span className="text-warning">$400</span>{" "}
                          <br />
                          OR <br />
                          (8% per load)
                        </span>
                      </div>

                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            24/7 Dedicated Dispatcher
                          </li>
                          <li className="list-group-item">Lane Preferences</li>
                          <li className="list-group-item">You're The Boss</li>
                        </ul>
                      </div>

                      <div className="card-footer bg-white py-3">
                        <CopyToClipboard
                          text="+1 (786)-373-3171"
                          onCopy={() => alert("Copied!")}
                        >
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                          >
                            Call Now
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-header bg-white py-3">
                        <p className="text-uppercase  mb-2">
                          <strong>Complete otr assistance</strong>
                        </p>
                        <span className="mb-0">
                          Weekly Rate <span className="text-warning">$500</span>{" "}
                        </span>
                      </div>

                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">100% Payload</li>
                          <li className="list-group-item">
                            Factor Setup Assistance
                          </li>
                          <li className="list-group-item">
                            Collection Setup Assistance
                          </li>
                        </ul>
                      </div>

                      <div className="card-footer bg-white py-3">
                        <CopyToClipboard
                          text="+1 (786)-373-3171"
                          onCopy={() => alert("Copied!")}
                        >
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                          >
                            Call Now
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="container">
              <div className="row">
                <div
                  className="col-md-6"
                  style={Mobile ? {} : { marginTop: "80px" }}
                >
                  <div className="">
                    <h1 className="fw-bold">
                      Top dedicated truck <br /> dispatch service
                    </h1>
                    <p>
                      As truck dispatchers providing freight dispatching
                      services, we take a low percentage of your rate. This is
                      an incentive to negotiate high rates for you. The more
                      money you make, the more money we make.
                    </p>
                    <p>
                      There are no contracts. It is difficult to be profitable
                      and that is why we charge only a small Percentage Fee for
                      any premium load we find. Other dispatchers and brokers
                      charge much higher fees and do not care about the service
                      they provide to their drivers, we believe in long term
                      relationships, our main focus is a great truck dispatch
                      and customer service.
                    </p>
                    {/* <input
                  className={`bar ${Mobile ? "w-100" : ""}`}
                  type="text"
                  name="email"
                  placeholder="Email Address"
                /> */}
                    <button
                      className={` ${
                        Mobile ? "w-100 p-3 mt-2" : ""
                      } btn btn-warning w-50 p-3 fw-bold`}
                    >
                      Hire a Distacher Today!
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={saleperson}
                    className="img-fluid salesimg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row part8 p-5">
              <div className="text-center">
                <h1 className="pt8Heading fw-bold">
                  What is truck dispatch service?{" "}
                </h1>
                <p className="pt8Para">
                  A truck dispatch services help truck drivers and owner
                  operators who have their own trucking company manage the load
                  booking and back-office processes of running a trucking
                  company. Some dispatchers specialize only in booking loads,
                  while others, like Genius Dispatch, offer a wide variety of
                  services such as invoice management and detention requests.
                </p>
                <button
                  className={`${Mobile ? "w-100 p-3 mt-2" : "pt8btn"} btn`}
                >
                  Hire a Disptach now
                </button>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={truck5}
                    className="img-fluid rounded-5"
                    style={
                      Mobile
                        ? { marginTop: "20px" }
                        : { objectFit: "cover", marginTop: "55px" }
                    }
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6 "
                  style={Mobile ? { marginTop: "10px" } : { marginTop: "50px" }}
                >
                  <div className="">
                    <h1 className="fw-bold fs-1">
                      Genius Dispatch is your freight planning solution.{" "}
                    </h1>
                    <p className="">
                      Our services are mainly for owner operators, independent
                      truckers & carriers with their own DOT or MC authority.
                      It’s in our best interest for us to find the best paying
                      loads available for you. We dispatch dry-vans, reefers ,
                      flatbeds. We find you the best truck loads in the US. We
                      help you improve your profits and experience.
                    </p>

                    <button
                      className={`btn ${Mobile ? "w-100 p-3 mt-2" : "btn2"}`}
                    >
                      Start Today!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <footer className="text-center text-lg-start bg-white text-muted">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094339990087&mibextid=LQQJ4d"
                    target="_blank"
                    className="me-4"
                  >
                    <FacebookIcon />
                  </a>
                  {/* <a href="" className="me-4 text-info ">
                    <TwitterIcon />
                  </a>
                  <a href="" className="me-4 text-secondary ">
                    <GoogleIcon />
                  </a> */}
                  <a
                    href="https://instagram.com/streamlinelogistix?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    className="me-4 text-warning "
                  >
                    <InstagramIcon />
                  </a>
                  {/* <a href="" className="me-4 ">
                    <LinkedInIcon />
                  </a> */}
                </div>
              </section>
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 text-secondary"></i>
                        Streamline Logistix
                      </h6>
                      <p>
                        We provide best dispatching services where you are your
                        own boss.
                      </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Dispatching
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Rental Trailers
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Truck Financing
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Factor Setup Assistance
                        </a>
                      </p>
                    </div>

                    {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Help
                        </a>
                      </p>
                    </div> */}

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p style={{ width: "300px" }}>
                        <i className="fas fa-home me-3 text-secondary"></i>
                        Adress 219 Pierce Dr. Miami FL 33418
                      </p>
                      <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        streamlinelogistix@gmail.com
                      </p>
                      <p>
                        <i className="fas fa-phone me-3 text-secondary"></i>
                        +1 (786)-373-3171
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
              >
                © 2023 Copyright:
                <a
                  className="text-reset fw-bold"
                  href="StreamlineLogistix.netlify.app"
                >
                  StreamlineLogistix.com
                </a>
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
