import React, { useState, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import "./form.scss";

const Form = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [number, setNumber] = useState("");
  const [confirmNumber, setConfirmNumber] = useState("");
  const [enableOtherTitle, setEnableOtherTitle] = useState(false);
  const [enableOtherSkill, setEnableOtherSkill] = useState(false);
  const [loading, setLoading] = useState(false);

  const disable = !name || !skill || !number || !confirmNumber;
  const confirmNumberAlert = !!(
    confirmNumber.trim() !== number.trim() && confirmNumber
  );

  const handleTitle = (e) => {
    setEnableOtherTitle(false);
    if (e.target.checked) {
      setTitle(e.target.value);
    }
  };

  const handleSkill = (e) => {
    setEnableOtherSkill(false);
    if (e.target.checked) {
      setSkill(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    ref.current.continuousStart();
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Title", title);
    formData.append("Skill", skill);
    formData.append("Phone", number);
    formData.append("Email", email);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzb9rbKlX1AG6b3FYY4gmezT6hvZxx-63sIoz5FQlQtqsWhqIM/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      setLoading(false);
      NotificationManager.success(
        "Your details have been successfully submitted. Our program advisor would contact you shortly.",
        "Success",
        7000
      );

      ref.current.complete();
      history.push("/");
    } catch (e) {
      setLoading(false);
      ref.current.complete();
      NotificationManager.error("An error occured.", "Error");
    }
  };

  const ref = useRef();

  return (
    <div className="form-container">
      <LoadingBar ref={ref} color="black" />
      <h1>Sign Up</h1>
      <form className="form">
        <p className="required">Please provide your name ?</p>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Please provide your email ?</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <p>Please how would you like to be addressed ?</p>
        <br />
        <input
          type="radio"
          id="miss"
          name="gender"
          value="miss"
          onChange={handleTitle}
        />
        <label htmlFor="miss">Miss</label>
        <br />
        <input
          type="radio"
          id="mrs"
          name="gender"
          value="mrs"
          onChange={handleTitle}
        />
        <label htmlFor="mrs">Mrs</label>
        <br />
        <input
          type="radio"
          id="mr"
          name="gender"
          value="mr"
          onChange={handleTitle}
        />
        <label htmlFor="mr">Mr</label>
        <br />
        <div className="other-container">
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={(e) => {
              if (e.target.checked) {
                setTitle("");
                setEnableOtherTitle(true);
              } else {
                setEnableOtherTitle(false);
              }
            }}
          />
          <div className="input-other">
            <label htmlFor="other">Other</label>
            <input
              type="name"
              className="otherOption"
              value={enableOtherTitle ? title : ""}
              onChange={(e) => {
                if (enableOtherTitle) {
                  setTitle(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <p className="required">
          What vocational skill would you like to acquire?
        </p>
        <br />
        <input
          type="radio"
          id="Barbing"
          name="skill"
          value="Barbing"
          onChange={handleSkill}
        />
        <label htmlFor="Barbing">Barbing</label>
        <br />
        <input
          type="radio"
          id="Carpentry"
          name="skill"
          value="Carpentry"
          onChange={handleSkill}
        />
        <label htmlFor="Carpentry">Carpentry</label>
        <br />
        <input
          type="radio"
          id="Cosmetology"
          name="skill"
          value="Cosmetology"
          onChange={handleSkill}
        />
        <label htmlFor="Cosmetology">Cosmetology(Makeup)</label>
        <br />
        <input
          type="radio"
          id="Catering"
          name="skill"
          value="Catering"
          onChange={handleSkill}
        />
        <label htmlFor="Catering">Catering</label>
        <br />
        <input
          type="radio"
          id="Fashion"
          name="skill"
          value="Fashion"
          onChange={handleSkill}
        />
        <label htmlFor="Fashion">Fashion Design</label>
        <br />
        <input
          type="radio"
          id="Electrician"
          name="skill"
          value="Electrician"
          onChange={handleSkill}
        />
        <label htmlFor="Electrician">Electrician</label>
        <br />
        <input
          type="radio"
          id="Furniture"
          name="skill"
          value="Furniture"
          onChange={handleSkill}
        />
        <label htmlFor="Furniture">Furniture Making</label>
        <br />
        <input
          type="radio"
          id="Interior"
          name="skill"
          value="Interior"
          onChange={handleSkill}
        />
        <label htmlFor="Interior">Interior Decoration</label>
        <br />
        <input
          type="radio"
          id="Motor"
          name="skill"
          value="Motor"
          onChange={handleSkill}
        />
        <label htmlFor="Motor">Motor Vehicle Mechanics</label>
        <br />
        <input
          type="radio"
          id="Photography"
          name="skill"
          value="Photography"
          onChange={handleSkill}
        />
        <label htmlFor="Photography">Photography</label>
        <br />
        <input
          type="radio"
          id="Plumbing"
          name="skill"
          value="Plumbing"
          onChange={handleSkill}
        />
        <label htmlFor="Plumbing">Plumbing</label>
        <br />
        <input
          type="radio"
          id="Shoe"
          name="skill"
          value="Shoe"
          onChange={handleSkill}
        />
        <label htmlFor="Shoe">Shoe Making & Leather Works</label>
        <br />
        <input
          type="radio"
          id="Welding"
          name="skill"
          value="Welding"
          onChange={handleSkill}
        />
        <label htmlFor="Welding">Welding & Fabrication</label>
        <br />
        <div className="other-container">
          <input
            type="radio"
            id="Other"
            name="skill"
            value="Other"
            onChange={(e) => {
              if (e.target.checked) {
                setEnableOtherSkill(true);
                setSkill("");
              } else {
                setEnableOtherSkill(false);
              }
            }}
          />
          <div className="input-other">
            <label htmlFor="Other">Other</label>

            <input
              type="name"
              className="otherOption"
              value={enableOtherSkill ? skill : ""}
              onChange={(e) => {
                if (enableOtherSkill) {
                  setSkill(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <br />
        <p className="required">Please provide your Phone Number</p>
        <br />
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />

        <p className="required">Please confirm your Phone Number</p>
        <br />
        <input
          type="number"
          value={confirmNumber}
          onChange={(e) => {
            setConfirmNumber(e.target.value);
          }}
          style={{
            borderBottomColor: `${confirmNumberAlert ? "red" : "black"}`,
          }}
        />
        <div className="footer">
          <button
            disabled={loading}
            onClick={(e) => {
              if (disable) {
                e.preventDefault();
                if (number.trim() !== confirmNumber.trim()) {
                  alert("Please confirm your phone number");
                } else {
                  alert("Please fill required fields");
                }
              } else {
                handleSubmit(e);
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Form);
