import React, { useEffect, useState } from "react";

const SidebarForm = ({ isActive, handleToggleClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaShow, setCaptchaShow] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCaptchaChange = (event) => {
    setCaptcha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, mobile, query, captcha });
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "satishabhidialmytrip@gmail.com",
      Password: "CC7C0EF0A9C26D07F4BF0685F86F0FA8FB73",
      To: "webdevelopersatish@gmail.com",
      From: "satish.dialmytrip@gmail.com",
      Subject: name,
      Body: query,
    }).then((message) => alert(message));
    setName("");
    setEmail("");
    setMobile("");
    setQuery("");
    setCaptcha("");
  };
  function generateCaptcha() {
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
    const captcha = generateCaptcha();
    setCaptchaShow(captcha);
  }, []);
  return (
    <>
      <div className={`sidebar-contact ${isActive ? "active" : ""}`}>
        <div
          className={`toggle ${isActive ? "active" : ""}`}
          onClick={handleToggleClick}
        ></div>
        <h2>Contact Us</h2>
        <div className="scroll">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form__group field col-md-12">
                <input
                  type="text"
                  className="form__field text-capitalize"
                  maxLength="21"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <label htmlFor="Name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group field col-md-12">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  maxLength="25"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="Email" className="form__label">
                  Email ID
                </label>
              </div>
              <div className="form__group field col-md-12">
                <input
                  type="text"
                  className="form__field"
                  maxLength="10"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                  required
                />
                <label htmlFor="Mobile" className="form__label">
                  Mobile Number
                </label>
              </div>
              <div className="form__group field col-md-12">
                <textarea
                  className="form__field"
                  maxLength="100"
                  placeholder="Query"
                  value={query}
                  onChange={handleQueryChange}
                  required
                ></textarea>
                <label htmlFor="Query" className="form__label">
                  Your Query
                </label>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="form__group field col-md-6">
                    <input
                      type="text"
                      className="form__field"
                      maxLength="4"
                      placeholder="Captcha"
                      style={{
                        letterSpacing: "6px",
                      }}
                      value={captcha}
                      onChange={handleCaptchaChange}
                      required
                    />
                    <label htmlFor="Captcha" className="form__label">
                      Captcha
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="captchaSection">
                      <img
                        className="cptchaImg"
                        src={`https://dummyimage.com/140x50/000000/ffffff&text=${captchaShow}`}
                        alt="Captcha"
                      />
                      <img
                        src={require("../../static/img/refresh.png")}
                        alt="refresh"
                        width={30}
                        style={{
                          position: "relative",
                          top: "-30px",
                          left: "-50px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center mt-2 p-0">
                <button
                  type="submit"
                  className="btn btn-primary w-100 text-light"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SidebarForm;
