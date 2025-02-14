"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { FloatingLabelInput } from "../floating-label-input/floating-label-input";
import Image from "next/image";

export function PersonalInfo() {
  const savedFormData = window.localStorage.getItem("formData");
  const initialFormData = savedFormData ? JSON.parse(savedFormData) : {
    firstName: "Petter",
    lastName: "Cetera",
    city: "London",
    postalCode: "E2 4XF",
    address: "123 Example",
    email: "petter@gmail.com",
    phone: "+442223334444",
    password: "Password",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    window.localStorage.setItem("formData", JSON.stringify(formData));
    setSaved(true);

    setTimeout(()=>{
      setSaved(false)
    },4000)
  };

  return (
    <section className={styles.section}>
      <h1 style={{ fontWeight: "700" }}>Personal information</h1>
      <div className={styles.mainElement}>
        <div className={styles.inputContainer}>
          <div className={styles.twoCol}>
            <div>
              <FloatingLabelInput
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div>
              <FloatingLabelInput
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
          </div>
          <div className={styles.twoCol}>
            <div>
              <FloatingLabelInput
                label="City"
                value={formData.city}
                onChange={handleChange}
                name="city"
              />
            </div>
            <div>
              <FloatingLabelInput
                label="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                name="postalCode"
              />
            </div>
          </div>
          <div className={styles.oneCol}>
            <div>
              <FloatingLabelInput
                label="Address"
                value={formData.address}
                onChange={handleChange}
                name="address"
              />
            </div>
          </div>
          <div className={styles.twoCol}>
            <div>
              <FloatingLabelInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <FloatingLabelInput
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
              />
            </div>
          </div>
          <div className={styles.twoCol}>
            <div>
              <FloatingLabelInput
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="https://karine-s.net/wp-content/uploads/2020/04/photo-corporate-CV-professionnelle-10.jpg" alt="profile" width={144} height={144}/>
        </div>
      </div>
      <p className={styles.longText} >Use this email to log in to your  <span>resumedone.io</span> account and receive notifications.</p>
      
      <div style={{display : "flex",gap : "5px",alignItems : "center"}}>
        <button onClick={handleSave} className={styles.saveBtn} disabled={saved} >Save</button>
        {saved && (
        <svg
          className={styles.emailCheck}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.93931 11.6569L6.93934 11.6568L6.93936 11.6569L11.8891 6.70711C12.2796 6.31658 12.2796 5.68342 11.8891 5.29289C11.4986 4.90237 10.8654 4.90237 10.4749 5.29289L6.93933 8.82846L5.5251 7.41423C5.13458 7.0237 4.50141 7.0237 4.11089 7.41422C3.72036 7.80475 3.72036 8.43791 4.11089 8.82844L6.93931 11.6569Z"
            fill="#27CFB1"
          />
        </svg>
      )}
      </div>

      <p className={styles.checkText} ><span><input type="checkbox" name="" id="" /></span> Show my profile to serious employers on <span>hirethesbest.io</span> for free</p>

    </section>
  );
}