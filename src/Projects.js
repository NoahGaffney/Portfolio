import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
  
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(200, 250, 250)", color: "#fff" },
};

const Projects = () => {
  // Example timeline data for education (replace this with your actual education data)
  const timeline = [
    {
      icon: starIcon,
      date: "SEP 2024 - CURRENT",
      title: "THIS WEBSITE!",
      subtitle: "built in react - Fully Personal/Solo",
      desc: "My hope and aim is for this site to grow with me as I learn more. Implementing not only new information as I gain certificates and work experience, but also as a place to 'flex what I've learned",
    },
    {
      icon: starIcon,
      date: "OCT 2022 - DEC 2022",
      title: "Survive The Undead",
      subtitle: "Unreal Engine Class Prodject",
      desc: "contributed to the development of 'Survive The Undead' using Unreal Engine, collaborating with a team of students through Git. While my initial interest was in AI development, I was assigned the UI/UX role. My responsibilities included designing and implementing polished loading screens, settings, credits, and game over screens, complete with dynamic buttons and tactile sound effects. I also developed the game's round tracking system, adaptive health bar, and intuitive weapon indicators, enhancing the overall player experience.",
    },
    {
      icon: starIcon, // Achievement or milestone icon
      title: "Blast Away",
      subtitle: "Lame Games (Lead)",
      desc: "I've honed my skills in both game development and data-driven insights. I've developed mobile games using Swift for iOS, like 'Blast Away,' focusing on engaging gameplay and user experience. I've also collaborated with cross-functional teams to design and develop user-centric mobile applications using Flutter. Additionally, I've applied data analysis techniques to identify trends, make informed decisions, and improve business outcomes. Furthermore, I've contributed to public health efforts by conducting contact tracing and utilizing case management software to control disease outbreaks.",
    },
  ];

  return (
    <div className="Education">
      <h2>Projects</h2>
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

export default Projects;
