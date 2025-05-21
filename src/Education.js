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
  iconStyle: { background: "rgb(250, 200, 200)", color: "#fff" },
};

const Education = () => {
  // Example timeline data for education
  const timeline = [
    {
      icon: schoolIcon,
      date: "AUG 2021 - MAY 2024",
      title: "Bachelor of Science in Computer Science",
      subtitle: "SUNY NEW PALTZ - New Paltz, NY",
      pdfLink: "/CollegeDeploma.pdf", // New Paltz PDF link
      buttonImage: "/NewPaltzD.png", // PNG image for New Paltz
    },
    {
      icon: schoolIcon,
      date: "AUG 2017 - DEC 2019",
      title: "Bachelor of Art in Computer Science (Incomplete)",
      subtitle: "CUNY HUNTER COLLEGE - New York, NY",
    },
    {
      icon: schoolIcon,
      date: "SEP 2016 - JUNE 2017",
      title: "Arch Bishop Stepinac",
      subtitle: "White Plains, NY",
      pdfLink: "/HighschoolDeploma.pdf", // Stepinac PDF link
      buttonImage: "/ABSD.png", // PNG image for Stepinac
    },
    {
      icon: schoolIcon,
      date: "SEP 2013 - JUNE 2016",
      title: "Saint Andrews",
      subtitle: "Barington, RI",
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
            contentStyle={
              i === 0 ? { background: "rgb(255, 255, 255)", color: "#fff" } : undefined
            }
            contentArrowStyle={
              i === 0 ? { borderRight: "7px solid rgb(33, 150, 243)" } : undefined
            }
            date={t.date}
            {...t.icon}
          >
            <h3 className="vertical-timeline-element-title">{t.title}</h3>
            {t.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>
            )}
            {t.desc && <p>{t.desc}</p>}
            {t.pdfLink && t.buttonImage && (
            <a
              href={t.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-button"
              style={{ marginTop: "10px", display: "inline-block" }}
            >
              <img
                src={t.buttonImage}
                alt="Download PDF"
                className="pdf-button-image"  // Add this class
              />
            </a>
          )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
