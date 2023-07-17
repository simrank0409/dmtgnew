import React, { useState, useEffect } from "react";
import SignUpImage from "../../static/img/Login.gif";
import Swal from "sweetalert2";
import "./login.css";
const Login = () => {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [show, setShow] = useState("password");
  const HandleToggle = () => {
    setEyeToggle(!eyeToggle);
    setShow("text");
    console.log(show);
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
  const [loginData, setLoginData] = useState({
    login_userName: "",
    login_password: "",
    login_captcha: "",
  });
  const loginChanger = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.login_userName === "") {
      Swal.fire("Enter User Name", "You clicked the button!", "warning");
    } else if (loginData.login_password === "") {
      Swal.fire("Enter Password", "You clicked the button!", "warning");
    } else if (loginData.login_captcha !== signUPcAP) {
      Swal.fire("Invalid captcha!", "You clicked the button!", "warning");
    } else {
      Swal.fire("Thank you!", "You clicked the button!", "success");

      setLoginData({
        login_userName: "",
        login_password: "",
        login_captcha: "",
      });
    }
  };
  return (
    <>
      <div class="main pb-5">
        <section class="sign-in pb-5">
          <div class="container pb-sm-5  rounded">
            <div className="row pt-sm-5">
              <div className="col-12 col-md-8 mx-auto">
                <div class="signin-content">
                  <div className="row shadow-lg rounded align-items-center">
                    <div className="col-md-5">
                      <img src={SignUpImage} alt="" />
                    </div>
                    <div className="col-md-7 text-center pt-5">
                      <img
                        src={require("../../static/img/logo.png")}
                        alt=""
                        width={150}
                      />
                      <form className="w-100">
                        <div className="form__group field col-8 mx-auto mb-3">
                          <input
                            type="text"
                            className="form__field text-capitalize fs-5"
                            maxLength="21"
                            placeholder="Business Name"
                            required
                            name="login_userName"
                            value={loginData.login_userName}
                            onChange={loginChanger}
                          />
                          <label htmlFor="Name" className="form__label">
                            User Name
                          </label>
                        </div>

                        <div className="form__group field col-8 mx-auto mb-3">
                          <input
                            type={eyeToggle ? "text" : "password"}
                            className="form__field passwordField  fs-5"
                            maxLength="21"
                            placeholder="Business Name"
                            required
                            name="login_password"
                            value={loginData.login_password}
                            onChange={loginChanger}
                          />
                          <label htmlFor="Name" className="form__label">
                            Password
                          </label>
                          <div
                            className="iconSectionEye"
                            style={{
                              position: "absolute",
                              top: "20px",
                              right: "20px",
                              cursor: "pointer",
                            }}
                            onClick={HandleToggle}
                          >
                            {eyeToggle ? (
                              <i class="icon fa fa-eye-slash"></i>
                            ) : (
                              <i class="icon fa fa-eye"></i>
                            )}
                          </div>
                        </div>

                        <div className="form__group field col-8 mx-auto mb-3">
                          <input
                            type="text"
                            className="form__field text-capitalize fs-5"
                            maxLength="21"
                            placeholder=""
                            required
                            name="login_captcha"
                            value={loginData.login_captcha}
                            onChange={loginChanger}
                          />
                          <label htmlFor="Name" className="form__label">
                            Captcha
                          </label>
                          <div
                            className="captchaIcon text-center"
                            style={{
                              paddingTop: "20px",
                              position: "absolute",
                              top: "-30px",
                              right: "20px",
                            }}
                          >
                            <img
                              className="cptchaImg"
                              src={`https://dummyimage.com/120x50/F9AA29/ffffff&text=${signUPcAP}`}
                              alt="Captcha"
                            />
                            <img
                              src={require("../../static/img/refresh.png")}
                              onClick={RefreshFun}
                              alt="refresh"
                              width={20}
                              style={{
                                position: "absolute",
                                top: "40px",
                                right: "130px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div class="form-group form-button ">
                          <button class="form-submit" onClick={submitHandler}>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
