"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import CustomBtn from "./components/CustomBtn/CustomBtn";

export default function Home() {
  return (
    <div
      className={`${styles.heroContainer} w-100 mt-4 position-relative d-flex`}
    >
      <div className={styles.optionalDarkOverlay}></div>
      <Image
        className={`${styles.heroImage}`}
        src="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg"
        alt="Beautiful landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true} 
       
      />
      <div className={`${styles.textOverlay} p-5`}>
        <h1 className="fw-bold">Build the future</h1>
        <p>Accelerate your startup’s growth with support from Canada’s Startup Visa Program</p>
        <div className="d-flex gap-3 mt-4">
          <CustomBtn text="Book consult" variant="primary"/>
          <CustomBtn text="Learn more" variant="light"/>
        </div>
      </div>
    </div>
  );
}
