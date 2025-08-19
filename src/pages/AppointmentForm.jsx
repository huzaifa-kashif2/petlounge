import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/AppointmentForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    timeHour: "",
    timeMin: "",
    timeAMPM: "",
    numPets: "",
    petType: "",
    petName: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!captchaValue) {
    alert("Please complete the CAPTCHA.");
    return;
  }

  try {
    const res = await fetch("https://petlounge-be.vercel.app/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        timeHour: "",
        timeMin: "",
        timeAMPM: "",
        numPets: "",
        petType: "",
        petName: "",
        message: "",
      });
      recaptchaRef.current.reset();
      setCaptchaValue(null);
    } else {
      alert("❌ Failed to submit form. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Server error. Please try again later.");
  }
};

  return (
    <section className={styles.container}>
      <h2>Request an Appointment</h2>
      <p>
        A representative will confirm your appointment request via email or
        phone. Thank you for choosing Benny’s Pet Lounge.
      </p>
      <p className={styles.notice}>
        We're open 7 days a week, drop by anytime between 11 AM to 9 PM!
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Name:*</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Phone:*</label>
        <input
          name="phone"
          type="number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email:*</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Requested Date:*</label>
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Requested Time:</label>
        <div className={styles.timeFields}>
          <select
            name="timeHour"
            value={formData.timeHour}
            onChange={handleChange}
          >
            {[...Array(12).keys()].map((i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select
            name="timeMin"
            value={formData.timeMin}
            onChange={handleChange}
          >
            {["00", "15", "30", "45"].map((min) => (
              <option key={min}>{min}</option>
            ))}
          </select>
          <select
            name="timeAMPM"
            value={formData.timeAMPM}
            onChange={handleChange}
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
        <label>Number of Pets:</label>
        <input
          name="numPets"
          type="number"
          min="1"
          value={formData.numPets || ""}
          onChange={handleChange}
          required
        />

        <label>Type of Pet:</label>
        <select
          name="petType"
          value={formData.petType || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>

        <label>Name of Pet:</label>
        <input
          name="petName"
          value={formData.petName}
          onChange={handleChange}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />

        <div className={styles.captcha}>
          <ReCAPTCHA
            sitekey="6LeygpsrAAAAAHN2_rkPPwsLGmrsYmSwwpYyYzom"
            onChange={handleCaptchaChange}
            ref={recaptchaRef}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
