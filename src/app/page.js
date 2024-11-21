"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import CustomBtn from "./components/CustomBtn/CustomBtn";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

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

  const featuredProjects = [
    {
      year: "2021",
      title: "Project X",
      text: "This tech project aims to revolutionize the way businesses manage their operations by providing innovative solutions that streamline workflows, enhance productivity, and improve user experience. ",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2021",
      title: "Project Y",
      text: "This tech project seeks to transform how businesses operate by offering innovative solutions that optimize workflows, boost efficiency, and elevate the overall user experience.",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2020",
      title: "Project X",
      text: "This tech project aims to revolutionize the way businesses manage their operations by providing innovative solutions that streamline workflows, enhance productivity, and improve user experience. ",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
    {
      year: "2020",
      title: "Project Y",
      text: "This tech project seeks to transform how businesses operate by offering innovative solutions that optimize workflows, boost efficiency, and elevate the overall user experience.",
      link: "urlhere.com",
      image:
        "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
    },
  ];

  const groupedProjects = featuredProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => b - a);

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

      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} lg={4} xl={3} className="rounded">
            <div className={`d-flex flex-column h-100 ${styles.serviceCard}`}>
              <div className={styles.imgContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
              <div>
                <h5 className="fw-bold mt-3">{service.title}</h5>
                <p className="text-secondary">{service.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="section">
        <h4 className="xtraBold mt-4">Featured projects</h4>
        <div>
          {sortedYears.map((year) => (
            <div key={year}>
              <h5 className="xtraBold mt-5">{year}</h5>
              {groupedProjects[year].map((project, index) => (
                <Row className="pb-5 mt-5" key={index}>
                  <Col>
                    <h5 className="xtraBold">{project.title}</h5>
                    <p className="mt-3 text-secondary">{project.text}</p>
                    <div className={styles.caseStudyLinkContainer}>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-dark fw-bold text-decoration-none py-2 px-3 rounded ${styles.caseStudyLink}`}
                      >
                        Learn more
                      </Link>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div
                      className={`${styles.featuredProjImgContainer} position-relative h-auto w-100`}
                    >
                      <Image
                        className="roundedImage"
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
