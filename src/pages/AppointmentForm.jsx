import React, { useState } from "react";
import styles from "../styles/AppointmentForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    timeHour: "1",
    timeMin: "00",
    timeAMPM: "AM",
    numPets: "",
    petType: "",
    petName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let saveSuccess = false;
    let sendSuccess = false;

    try {
      const saveRes = await fetch(
        "https://petloungebe-production.up.railway.app/api/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const saveData = await saveRes.json();
      saveSuccess = saveData.success;
      if (saveSuccess) console.log("✅ Saved to MongoDB");
    } catch (err) {
      console.error("❌ MongoDB error:", err);
    }

    try {
      const sendRes = await fetch(
        "https://petloungebe-production.up.railway.app/api/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const sendData = await sendRes.json();
      sendSuccess = sendData.success;
      if (sendSuccess) console.log("✅ WhatsApp sent successfully");
    } catch (err) {
      console.error("❌ Twilio error:", err);
    }

    if (saveSuccess && sendSuccess) {
      alert("✅ Form saved and WhatsApp sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        timeHour: "1",
        timeMin: "00",
        timeAMPM: "AM",
        numPets: "",
        petType: "",
        petName: "",
        message: "",
      });
    } else if (!saveSuccess && !sendSuccess) {
      alert(
        "❌ Both MongoDB saving and WhatsApp sending failed. Please try again."
      );
    } else if (!saveSuccess) {
      alert("⚠️ WhatsApp sent, but failed to save to MongoDB.");
    } else if (!sendSuccess) {
      alert("⚠️ Form saved, but failed to send WhatsApp message.");
    }
  };

  return (
    <section className={styles.container}>
      <h2>Request an Appointment</h2>
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

        <label>Date:*</label>
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
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

        <label>Pet Name:</label>
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

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}