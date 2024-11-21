"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import CustomBtn from "./components/CustomBtn/CustomBtn";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  const services = [
    {
      title: "Pre-LOS training",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Prepare your startup for the Canada Startup Visa and secure a spot in top incubators with our Pre-Letter of Support training.",
    },
    {
      title: "Ideation & Validation",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Refining and validating business ideas through market feedback and incubator resources.",
    },
    {
      title: "Business Plan Development",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Crafting a compelling business plan tailored for the Startup Visa and incubator applications.",
    },
    {
      title: "Pitch Decks",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Designing persuasive pitch decks to attract incubators and investors.",
    },
    {
      title: "Financial Models",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Building financial models to meet the requirements of investors and incubators.",
    },
    {
      title: "Incorporation & Legal",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Assisting with business setup and shareholder agreements for the Startup Visa program.",
    },
    {
      title: "Marketing Strategy",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Developing strategic marketing plans for growth and investor attraction.",
    },
    {
      title: "Social Media & Customer Discovery",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Creating a strong social presence and engaging with target customers.",
    },
    {
      title: "Compliance & IP Protection",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Creating a strong social presence and engaging with target customers.",
    },
    {
      title: "Prototyping & UI/UX Design",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
      text: "Developing prototypes and designs to showcase your innovation to incubators and investors.",
    },
  ];
  return (
    <div>
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
        <div className={`${styles.textOverlay}`}>
          <h1 className="fw-bold">Build the future</h1>
          <p>
            Accelerate your startup’s growth with support from Canada’s Startup
            Visa Program
          </p>
          <div className="d-flex gap-3 mt-4">
            <CustomBtn text="Book consult" variant="primary" />
            <CustomBtn text="Learn more" variant="light" />
          </div>
        </div>
      </div>
      <div className={`${styles.landingPageContent} section w-75`}>
        <h2 className={`xtraBold`}>
          Our mission is to empower creators and innovators to push boundaries
          through our partnership with Canada's Startup Visa Program
        </h2>
        <p className="mt-4">
          Tech X Startup works closely with angel investors, business
          incubators, and venture capital funds to help you turn your tech idea
          into a reality. We provide the funding, resources, and mentorship
          needed to prove the potential of your business, all while supporting
          you through the Canada Startup Visa Program to secure permanent
          residence and build a future in Canada.
        </p>
      </div>
      <Row className="g-4 mt-3">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} lg={4} xl={3}>
            <div
              className={`d-flex flex-column h-100 ${styles.serviceCard}`}
            >
              <div className={styles.imgContainer}>
                <Image
                  src={service.image}
                  alt={service.title} // Ensure you add the alt attribute
                  layout="fill" // Ensures the image takes the full space
                  objectFit="cover" // Maintains aspect ratio and covers the space without distortion
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
