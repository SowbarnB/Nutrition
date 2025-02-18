import React, { useState, useEffect } from "react";
import ProfImg from "../../assets/Images/Profile_Training.jpg";
import "../Profile/Profile.css";
import Badges from "./Badges";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    height: "",
    weight: "",
  });

  const [streaks, setStreaks] = useState(Array(31).fill(false));
  const [badges, setBadges] = useState([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log("Updated data:", formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      height: "",
      weight: "",
    });
  };

  const toggleStreak = (index) => {
    const newStreaks = [...streaks];
    newStreaks[index] = !newStreaks[index];
    setStreaks(newStreaks);
  };

  return (
    <div className="profile-container">
      <div className="profile-nav">
        <h1>Public Profile</h1>
        <div className="combo-sea-db">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="c1">
          <div className="prof-logo">
            <div className="prof-bg">
              <img src={ProfImg} alt="Profile" />
            </div>
          </div>
          <div className="prof-body">
            <form onSubmit={handleSubmit}>
              <div className="form__group field">
                <input
                  type="text"
                  name="name"
                  className="form__field"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="age"
                  className="form__field"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="age" className="form__label">
                  Age
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="tel"
                  name="phone"
                  className="form__field"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone" className="form__label">
                  Phone No.
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="email"
                  name="email"
                  className="form__field"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="height"
                  className="form__field"
                  placeholder="Height(cm)"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="height" className="form__label">
                  Height (cm)
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  name="weight"
                  className="form__field"
                  placeholder="Weight(kg)"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="weight" className="form__label">
                  Weight (kg)
                </label>
              </div>
              <div className="form__buttons">
                <button type="submit" className="form__button update-button">
                  Update
                </button>
                <button
                  type="button"
                  className="form__button reset-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <div className="go-to-dashboard">
                <a href="/dashboard" className="dashboard-link">
                  Go to Dashboard
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="c2">
          <div className="calendar">
            <h2>August 2024</h2>
            <br />
            <div className="calendar-grid">
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`day ${streaks[i] ? "active" : ""}`}
                  onClick={() => toggleStreak(i)}
                >
                  {i + 1}
                  {streaks[i] && <span className="firestreak">🔥</span>}
                </div>
              ))}
            </div>
          </div>
          <Badges />
        </div>
        <div className="c3">
          <h3>Leaderboard</h3>
          <ol>
            <li>Sreegovind - 1500 points</li>
            <li>Sudharshan - 1450 points</li>
            <li>Thiruvarulselvan - 1400 points</li>
            <li>Sudharshan S - 1350 points</li>
            <li>Sukumar - 1300 points</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Profile;
