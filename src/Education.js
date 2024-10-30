import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faStar } from "@fortawesome/free-solid-svg-icons";

// Icons for the timeline
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const Education = () => {
  // Example timeline data for education (replace this with your actual education data)
  const timeline = [
    {
      icon: schoolIcon,
      date: "2021 - 2023",
      title: "Master of Science in Computer Science",
      subtitle: "University ABC",
      desc: "Specialized in AI and Machine Learning.",
    },
    {
      icon: schoolIcon,
      date: "2017 - 2021",
      title: "Bachelor of Science in Software Engineering",
      subtitle: "University XYZ",
      desc: "Focused on full-stack development and algorithms.",
    },
    {
      icon: schoolIcon, // Achievement or milestone icon
      title: "Summa Cum Laude Graduate",
      subtitle: "University XYZ",
      desc: "Graduated with highest honors.",
    },
  ];

  return (
    <div className="Education">
      <h2>Education</h2>
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

export default Education;
