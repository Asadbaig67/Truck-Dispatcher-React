import React from "react";
import truck from "./images/truck.jpg";
import truck2 from "./images/truck2.jpg";
import truck4 from "./images/truck4.png";
import truck5 from "./images/truck5.jpg";
import mail from "./images/mail.jpg";
import road from "./images/road.jpg";
import sign from "./images/sign.jpg";
import saleperson from "./images/saleperson.png";
import Nav from "./Nav";
import axios from "axios";
import Rating from "@mui/material/Rating";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function Home() {
  const [value, setValue] = React.useState(5);

  let obj = {
    firstname: " ",
    phone: " ",
    email: " ",
    truck: " ",
    income: " ",
    options: " ",
    average: " ",
  };
  const submit = async (e) => {
    console.log(obj);
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5000/Home/adddata",
        obj
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <div className="container-fluid p-0">
        <div className="part1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="section1 p-3 mt-2">
                  <h1 className="heading">
                    Welcome to the Most Reliable Dispatch Company in North
                    America.
                  </h1>
                  <p className="para">
                    We find the best paying loads in the market.
                    <br /> Get a dedicated dispatcher assigned for you and don't
                    worry <br /> any more about spending time looking for loads
                    or empty miles.
                  </p>
                  <button className="btn1">Hire a Dispatcher Today</button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
                <div className="section2">
                  <img src={truck} alt="truck" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <h1 className="fs-1 fw-bold">
              53' Dry Vans,Reefers, <br />
              and Flatbeds Only.
            </h1>
            <p className="mt-3 ms-4">
              A Bigger <br />
              Equipment makes <br /> you more Money!
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row part3">
            <div className="col-md-6 col-sm-12">
              <div className="pt3section1">
                <img src={truck2} alt="truck2" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={{ marginTop: "100px" }}>
              <div className="pt3section2">
                <h1 className="pt3Heading">
                  Hit the road on your <br /> terms, you're the boss
                </h1>
                <p className="pt3Para">
                  Loads, rates and routes are your choice, no force dispatching.
                  We make sure you get the best freight at the best rate and get
                  paid on time. Documentation, prices and fees are disclosed
                  upfront. To receive SMS notifications from us, we require your
                  email address.
                </p>
                <input
                  className="bar"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
                <button className="btn2">Start Today!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="part4">
            <div className="background-image">
              <div className="pt4section1"></div>
              <div className="pt4section2 me-5">
                <h1 className="pt4Heading ">
                  Call Us Today,get loaded <br />& be Profitable Now
                </h1>

                <button className="btn1">CALL NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row part5-II p-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-3 card shadow-lg">
              <Rating name="read-only" value={value} readOnly />
              <h4>Lopez Hauling Inc </h4>
              <p>
                Our company, Lopez Hauling, just started back in July of 2021
                and Genius Dispatch has been with us since the beginning. They
                have been so helpful with us being a start up company and not
                knowing much about the industry to knowing where the money is
                and what we need to do to get it! Jessica, especially has been
                so amazing and her along with many others are very quick to
                respond and always take care.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="p-3 card shadow-lg">
              <Rating name="read-only" value={value} readOnly />
              <h4>Spartan Cargo LLC </h4>
              <p>
                I can’t say enough to express my positive experience with this
                dispatch service.
              </p>
              <p>
                With the challenges of expenses going through the roof these
                days, having support from a dedicated staff is very important.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-3 card shadow-lg">
              <Rating name="read-only" value={value} readOnly />
              <h4>National Brothers Inc </h4>
              <p>
                Our trucking company was in need of a dispatching company to
                dispatch our fleet of trucks and found Genius Dispatching in an
                article written about top dispatching companies. We have only
                worked with Genius for a short time but thus far, they have not
                disappointed. David and Jessica have both been readily available
                to answer questions our members have regarding their process.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-3 card shadow-lg">
              <Rating name="read-only" value={value} readOnly />
              <h4>Venados Logistics LLC </h4>
              <p>
                Excellent service that they provide in all aspects, Elisa who is
                my dispatch assigned always on the lookout for having the best
                paid loads, always waiting for me to be loaded and unloaded on
                time and also pending along with Jessica who always pays us the
                total on time of the load plus the extra charges that we have
                for lumper or detention.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="text-center">
              <img className="pt5img" src={truck4} alt="truck4" />
            </div>
          </div>
        </div>

        <div className="row p-5">
          <h1 className="pt6Heading mb-5">Getting started is easy</h1>
          <div
            className="col-md-4 mx-auto  card shadow"
            style={{ height: "300px", width: "400px" }}
          >
            <div className="text-center my-auto">
              <img src={mail} alt="mail" />
              <h2>Send Documents</h2>
              <p>MC Authority, Certificate of Insurance and W-9 Form.</p>
              <button className="pt6btn">Send Documents</button>
            </div>
          </div>
          <div
            className="col-md-4 mx-auto card shadow"
            style={{ height: "300px", width: "400px" }}
          >
            <div className="text-center my-auto">
              <img src={sign} alt="sign" />
              <h2>Sign Agreement</h2>
              <p>Sign a quick and easy dispatch service level agreement.</p>
              <button className="pt6btn">Request Agreement</button>
            </div>
          </div>
          <div
            className="col-md-4 mx-auto card shadow"
            style={{ height: "300px", width: "400px" }}
          >
            <div className="text-center my-auto">
              <img src={road} alt="road" />
              <h2>Hit the road</h2>
              <p>We start dispatching your truck immediately.</p>
              <button className="pt6btn">Hire a Dispatcher</button>
            </div>
          </div>
        </div>

        <div className="row part7">
          <div className="col-md-6 col-sm-12">
            <h1>
              Top dedicated truck <br /> dispatch service
            </h1>
            <p>
              As truck dispatchers providing freight dispatching services, we
              take a low percentage of your rate. This is an incentive to
              negotiate high rates for you. The more money you make, the more
              money we make.
            </p>
            <p>
              There are NO contracts. It is difficult to be profitable and that
              is why we charge only a small Percentage Fee for any premium load
              we find. Other dispatchers and brokers charge much higher fees and
              do not care about the service they provide to their drivers, we
              believe in long term relationships, our main focus is a great
              truck dispatch and customer service.
            </p>
            <button className="pt7btn">Hire a Distacher Today</button>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="d-block" src={saleperson} alt="saleperson" />
          </div>
        </div>

        <div className="row part8 p-5">
          <div className="text-center">
            <h1 className="pt8Heading">What is truck dispatch service? </h1>
            <p className="pt8Para">
              A truck dispatch services help truck drivers and owner operators
              who have their own trucking company manage the load booking and
              back-office processes of running a trucking company. Some
              dispatchers specialize only in booking loads, while others, like
              Genius Dispatch, offer a wide variety of services such as invoice
              management and detention requests.
            </p>
            <button className="pt8btn">Hire a Disptach now</button>
          </div>
        </div>

        <div className="part9">
          <img
            src={truck5}
            className="w-100"
            style={{
              height: "500px",
              objectFit: "cover",
              display: "relative",
            }}
            alt="stars"
          />
          <div className="pt9section1 my-auto">
            <h1 className="text-light fw-bold fs-1">
              Genius Dispatch is your freight planning solution.{" "}
            </h1>
            <p className="text-light  w-50">
              Our services are mainly for owner operators, independent truckers
              & carriers with their own DOT or MC authority. It’s in our best
              interest for us to find the best paying loads available for you.
              We dispatch dry-vans, reefers , flatbeds. We find you the best
              truck loads in the US. We help you improve your profits and
              experience. Whether you are looking for your next load or you need
              a load that takes you home, Genius Dispatch is committed to your
              goals. For us to be successful, you must be successful first. We
              are the best dispatch service in the US.
            </p>
            <button className="pt9btn">Start Today!</button>
          </div>
        </div>

        {/* <div className="container">
          <div className="row part10">
            <div className="col-md-5 col-sm-12 my-auto pt10section1">
              <h1 className="pt10Heading">
                Tell us about your goals and let us help
              </h1>
              <p className="pt10Para">
                Having some idea of what your company needs or what are your
                hauling plans and desires will help us provide the best dispatch
                service solution for your trucking company.​ Complete the form
                now and start today!
              </p>
            </div>
            <div className="col-md-7 col-sm-12 my-auto pt10section2">
              <form>
                <div className="pt10section2-I">
                  <input
                    className="pt10bar"
                    type="text"
                    name="average"
                    placeholder="What average rate you are looking for?"
                    onChange={(e) => {
                      obj.average = e.target.value;
                    }}
                  />
                  <input
                    type="text"
                    list="options"
                    className="pt10bar"
                    placeholder="How many trucks do you have?"
                    name="truck"
                    onChange={(e) => {
                      obj.truck = e.target.value;
                    }}
                  />
                  <datalist id="options">
                    <option value="1" />
                    <option value="2" />
                    <option value="More than 2" />
                  </datalist>
                  <input
                    className="pt10bar"
                    type="text"
                    name="email"
                    placeholder="Email Address*"
                    onChange={(e) => {
                      obj.email = e.target.value;
                    }}
                  />
                  <br />
                  <label id="option" htmlFor="inputs">
                    What type of Truck do you have?*
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="option"
                    name="options"
                    value="53ft Dry Van"
                    onChange={(e) => {
                      obj.options = e.target.value;
                    }}
                  />
                  <label id="option" for="option1">
                    53ft Dry Van
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="option"
                    name="options"
                    value="53ft Reefer"
                    onChange={(e) => {
                      obj.options = e.target.value;
                    }}
                  />
                  <label id="option" for="option2">
                    53ft Reefer
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="option"
                    name="options"
                    value="48ft or 53ft Flatbed"
                    onChange={(e) => {
                      obj.options = e.target.value;
                    }}
                  />
                  <label id="option" for="option3">
                    48ft or 53ft Flatbed
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="option"
                    name="options"
                    value="53ft Stepdeck"
                    onChange={(e) => {
                      obj.options = e.target.value;
                    }}
                  />
                  <label id="option" for="option4">
                    53ft Stepdeck
                  </label>
                </div>
                <div className="pt10section2-II">
                  <input
                    className="pt10bar"
                    type="text"
                    name="income"
                    placeholder="Weeking income desired"
                    onChange={(e) => {
                      obj.income = e.target.value;
                    }}
                  />
                  <input
                    className="pt10bar"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={(e) => {
                      obj.firstname = e.target.value;
                    }}
                  />
                  <input
                    className="pt10bar"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      obj.phone = e.target.value;
                    }}
                  />
                  <button className="pt10btn" onClick={submit} value="submit">
                    Start Today!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}

        <footer className="text-center text-lg-start bg-white text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 link-secondary">
                <FacebookIcon />
              </a>
              <a href="" className="me-4 link-secondary">
                <TwitterIcon />
              </a>
              <a href="" className="me-4 link-secondary">
                <GoogleIcon />
              </a>
              <a href="" className="me-4 link-secondary">
                <InstagramIcon />
              </a>
              <a href="" className="me-4 link-secondary">
                <LinkedInIcon />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>Company
                    name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
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
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary"></i> New
                    York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary"></i> + 01
                    234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary"></i> + 01
                    234 567 89
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
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              StreamlineLogistics.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
