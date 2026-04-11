import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newRochelleLogo from "./assets/NRSD.png";
import MSLogo from "./assets/MSLogo.jpg";
import DiffLogo from "./assets/The-Difference-Icon.webp";
import NYSDOHLogo from "./assets/NYSDOH.png";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const aiIcon = {
  icon: <FontAwesomeIcon icon={faBrain} />,
  iconStyle: { background: "#6366f1", color: "#fff" },
};

const newRochelleIcon = {
  icon: (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10%",
        overflow: "hidden",
      }}
    >
      <img
        src={newRochelleLogo}
        alt="New Rochelle logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  ),
  iconStyle: {
    background: "#ffffff",
    padding: 0,
    overflow: "hidden",
  },
};

const NYSDOHIcon = {
  icon: (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "6px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={NYSDOHLogo}
        alt="NYSDOHLogo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  ),
  iconStyle: {
    background: "#ffffff",
    padding: 0,
    overflow: "hidden",
  },
};

const MSIcon = {
  icon: (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        src={MSLogo}
        alt="MSLogo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  ),
  iconStyle: {
    background: "#ffffff",
    padding: 0,
    overflow: "hidden",
  },
};

const DiffIcon = {
  icon: (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        src={DiffLogo}
        alt="DiffLogo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  ),
  iconStyle: {
    background: "#ffffff",
    padding: 0,
    overflow: "hidden",
  },
};


const Experience = () => {
  // Example timeline data for education (replace this with your actual education data)
  const timeline = [
    {
      icon: newRochelleIcon,
      date: "MARCH 2026 - current",
      title: "Junior Network Anylist",
      subtitle: "LHIRIC - BOCES - NEW ROCHELLE",
      desc: "Supporting the digital backbone of the New Rochelle School District. My role at LHRIC involves the hands-on management of large-scale network environments, bridging the gap between complex infrastructure and the daily operational needs of a modern educational ecosystem. By managing WAN/LAN connectivity, administering Active Directory environments, and ensuring print server reliability, I make sure technology remains a seamless and dependable tool for every student and staff member.",
    },
    {
      icon: MSIcon,
      date: "MARCH 2025 - MARCH 2026",
      title: "MICRO CENTER (Service Technician)",
      subtitle: "Yonkers, NY",
      desc: "Diagnoses and repairs computer hardware and software issues. Performs system upgrades, data transfers, and technical troubleshooting. Provides in-person technical support and maintains service documentation. This role requires a strong understanding of computer systems, excellent problem-solving skills, and the ability to communicate technical information effectively to customers.",
    },
    {
      icon: MSIcon,
      date: "SEP 2024 - MARCH 2025",
      title: "MICRO CENTER (General Sales Associate)",
      subtitle: "Yonkers, NY",
      desc: "Dedicated to providing exceptional customer service and guiding customers towards optimal technology solutions. This involves leveraging product knowledge to offer tailored recommendations, assisting with purchases, and fostering a positive shopping experience.",
    },
    {
      icon: DiffIcon,
      date: "JUN 2023 - MAR 2024",
      title: "INTERN",
      subtitle: "The Difference - New York",
      desc: "Collaborated with cross-functional teams to refine UI designs, incorporating user feedback to improve usability. Additionally, I developed and maintained a Flutter mobile application, prioritizing UI/UX to elevate user satisfaction and streamline interactions.",
    },
    {
      icon: aiIcon,
      date: "JUN 2023 - AUG 2023",
      title: "AI MARKET RESEARCH",
      subtitle: "Dream Vault Capital. New Rochelle, NY",
      desc: "Analyzed data to uncover trends and potential growth opportunities. I presented these findings to senior leadership to inform strategic decisions. By leveraging AI tools, I optimized data collection and analysis processes. Additionally, I conducted market research to gain valuable insights into consumer behavior.",
    },
    {
      icon: NYSDOHIcon, // Achievement or milestone icon
      date: "JUN 2020 - MAR 2021",
      title: "CONTACT TRACER",
      subtitle: "New York State Department Of Health",
      desc: "Played a crucial role in contact tracing efforts, interviewing individuals diagnosed with infectious diseases to identify close contacts. I utilized case management software to meticulously document patient and contact information, symptoms, and exposure details. By collaborating with healthcare providers and public health officials, I contributed to efficient case management and outbreak control.",
    },
  ];

  return (
    <div className="Education">
      <h2>Experience</h2>
      <VerticalTimeline>
        {timeline.map((t, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--education"
            contentStyle={i === 0 ? { background: "rgb(255, 255, 255)", color: "#fff" } : undefined}
            contentArrowStyle={i === 0 ? { borderRight: "7px solid rgb(33, 150, 243)" } : undefined}
            date={t.date}
            {...t.icon}
          >
            <h3 className="vertical-timeline-element-title">{t.title}</h3>
            {t.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>
            )}
            {t.desc && <p>{t.desc}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
