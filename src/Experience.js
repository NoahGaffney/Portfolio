import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faSchool,
    faStar,
  } from '@fortawesome/free-solid-svg-icons';
  
  const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  };
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const Experience = () => {
  // Example timeline data for education (replace this with your actual education data)
  const timeline = [
    {
      icon: workIcon,
      date: "SEP 2024 - CURRENT",
      title: "MICRO CENTER",
      subtitle: "Yonkers, NY",
      desc: "Dedicated to providing exceptional customer service and guiding customers towards optimal technology solutions. This involves leveraging product knowledge to offer tailored recommendations, assisting with purchases, and fostering a positive shopping experience.",
    },
    {
      icon: workIcon,
      date: "JUN 2023 - MAR 2024",
      title: "INTERN",
      subtitle: "The Difference - New York",
      desc: "Collaborated with cross-functional teams to refine UI designs, incorporating user feedback to improve usability. Additionally, I developed and maintained a Flutter mobile application, prioritizing UI/UX to elevate user satisfaction and streamline interactions.",
    },
    {
      icon: workIcon,
      date: "JUN 2023 - AUG 2023",
      title: "AI MARKET RESEARCH",
      subtitle: "Dream Vault Capital. New Rochelle, NY",
      desc: "Analyzed data to uncover trends and potential growth opportunities. I presented these findings to senior leadership to inform strategic decisions. By leveraging AI tools, I optimized data collection and analysis processes. Additionally, I conducted market research to gain valuable insights into consumer behavior.",
    },
    {
      icon: workIcon, // Achievement or milestone icon
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
            contentStyle={i === 0 ? { background: "rgb(33, 150, 243)", color: "#fff" } : undefined}
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
