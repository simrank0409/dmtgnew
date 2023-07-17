import React, { useEffect, useState } from "react";
import SignUpImage from "../../static/img/signUp.svg";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const handleKeyDown = (event) => {
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  const [signUPcAP, setsignUPcAP] = useState("");

  const RefreshFun = () => {
    const captcha = generateCaptcha1();
    setsignUPcAP(captcha);
  };
  function generateCaptcha1() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }
  useEffect(() => {
    const captcha = generateCaptcha1();
    setsignUPcAP(captcha);
  }, []);
  const [inputVal, setInputVal] = useState({
    business_name: "",
    person_name: "",
    mobile_number: "",
    email_id: "",
    address: "",
    pin_code: "",
    captcha_code: "",
  });
  const changeHandler = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (inputVal.business_name === "") {
      Swal.fire("Enter Business Name", "You clicked the button!", "warning");
    } else if (inputVal.person_name === "") {
      Swal.fire("Enter Person Name", "You clicked the button!", "warning");
    } else if (inputVal.mobile_number === "") {
      Swal.fire("Enter Mobile Number", "You clicked the button!", "warning");
    } else if (inputVal.email_id === "") {
      Swal.fire("Enter Email", "You clicked the button!", "warning");
    } else if (inputVal.address === "") {
      Swal.fire("Enter Address", "You clicked the button!", "warning");
    } else if (inputVal.pin_code === "") {
      Swal.fire("Enter Pin Code", "You clicked the button!", "warning");
    } else if (inputVal.captcha_code !== signUPcAP) {
      Swal.fire("Enter Valid Captcha", "You clicked the button!", "warning");
    } else {
      Swal.fire("Thank You", "You clicked the button!", "success");
      setInputVal({
        business_name: "",
        person_name: "",
        mobile_number: "",
        email_id: "",
        address: "",
        pin_code: "",
        captcha_code: "",
      });
      console.log(inputVal);
    }
  };
  return (
    <>
      <section className="main pb-sm-5">
        <div className="row m-0">
          <div className="col-md-10 col-12 mx-auto pb-5">
            <div className="container1 pb-5">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1 order-2">
                  <h2>Signup with Dialmytrip</h2>
                  <p>
                    Fill In the below Details To Complete Your Registration
                    Process
                  </p>
                  <form>
                    <div className="row">
                      <div className="form__group field col-md-12">
                        <input
                          type="text"
                          className="form__field text-capitalize"
                          maxLength="21"
                          placeholder="Business Name"
                          value={inputVal.business_name}
                          required
                          name="business_name"
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          Business Name
                        </label>
                      </div>

                      <div className="form__group field col-md-12">
                        <input
                          type="text"
                          className="form__field text-capitalize"
                          maxLength="21"
                          placeholder=""
                          value={inputVal.person_name}
                          required
                          name="person_name"
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          Contact Person Name
                        </label>
                      </div>

                      <div className="form__group field col-md-12">
                        <input
                          type="text"
                          className="form__field text-capitalize"
                          maxLength="10"
                          placeholder=""
                          value={inputVal.mobile_number}
                          required
                          onKeyDown={handleKeyDown}
                          name="mobile_number"
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          Mobile Number
                        </label>
                      </div>

                      <div className="form__group field col-md-12">
                        <input
                          type="email"
                          className="form__field"
                          maxLength="21"
                          placeholder=""
                          value={inputVal.email_id}
                          required
                          name="email_id"
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          Email ID
                        </label>
                      </div>

                      <div className="form__group field col-md-12">
                        <input
                          type="text"
                          className="form__field text-capitalize"
                          maxLength="21"
                          placeholder=""
                          name="address"
                          value={inputVal.address}
                          required
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          Address
                        </label>
                      </div>

                      <div className="form__group field col-md-12">
                        <input
                          type="text"
                          className="form__field"
                          maxLength="21"
                          placeholder=""
                          value={inputVal.pin_code}
                          required
                          name="pin_code"
                          onChange={changeHandler}
                        />
                        <label htmlFor="Name" className="form__label">
                          PIN Code
                        </label>
                      </div>
                      <div className="form__group field col-md-12">
                        <div className="row m-0">
                          <div className="form__group field col-6">
                            <input
                              type="text"
                              className="form__field"
                              maxLength="4"
                              placeholder="Captcha"
                              style={{
                                letterSpacing: "6px",
                              }}
                              required
                              name="captcha_code"
                              value={inputVal.captcha_code}
                              onChange={changeHandler}
                            />
                            <label htmlFor="Captcha" className="form__label">
                              Captcha
                            </label>
                          </div>
                          <div className="col-6">
                            <div
                              className="captchaSection"
                              style={{ position: "relative" }}
                            >
                              <img
                                className="cptchaImg"
                                src={`https://dummyimage.com/140x50/000000/ffffff&text=${signUPcAP}`}
                                alt="Captcha"
                              />
                              <img
                                src={require("../../static/img/refresh.png")}
                                onClick={RefreshFun}
                                alt="refresh"
                                width={30}
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  left: "-40px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mb-0">
                        <input
                          type="checkbox"
                          name="agree-term"
                          id="Terms"
                          class="agree-term"
                          checked
                          disabled
                        />
                        <label
                          class="label-agree-term"
                          style={{
                            position: "relative",
                            top: "2px",
                            left: "10px",
                          }}
                        >
                          I understand all the&nbsp;
                          <Link to="" target="_blank" class="term-service">
                            privacy policies &nbsp;
                          </Link>
                          and&nbsp;
                          <Link to="" target="_blank" class="term-service">
                            user agreement
                          </Link>
                          .
                        </label>
                      </div>
                      <div className="form__group text-center field col-md-12">
                        <button className="form-submit" onClick={handleClick}>
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img
                    src={SignUpImage}
                    alt="SignupImg"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
