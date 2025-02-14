"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { FloatingLabelInput } from "../floating-label-input/floating-label-input";
import Image from "next/image";

export function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "Petter",
    lastName: "Cetera",
    city: "London",
    postalCode: "E2 4XF",
    address: "123 Example",
    email: "petter@gmail.com",
    phone: "+442223334444",
    password: "Password",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <button className={styles.saveBtn}>Save</button>

      <p className={styles.checkText} ><span><input type="checkbox" name="" id="" /></span> Show my profile to serious employers on <span>hirethesbest.io</span> for free</p>

    </section>
  );
}