import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiArchlinux } from "react-icons/si";
import {
  faStar,
  faServer,
  faRocket,
  faCrosshairs,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";

const shooterIcon = {
  icon: <FontAwesomeIcon icon={faCrosshairs} />,
  iconStyle: { background: "#7c3aed", color: "#FDF4F5" },
};

const rocketIcon = {
  icon: <FontAwesomeIcon icon={faRocket} />,
  iconStyle: { background: "#7c3aed", color: "#fff" },
};

const serverIcon = {
  icon: <FontAwesomeIcon icon={faServer} />,
  iconStyle: { background: "#7c3aed", color: "#fff" },
};

const archIcon = {
  icon: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-.947 2.32-1.519 3.836-2.572 5.915.645.684 1.436 1.482 2.674 2.327-1.331-.532-2.279-1.064-3.008-1.596-1.398 2.759-3.587 6.65-6.912 12.354 2.613-1.508 4.646-2.438 6.588-2.809-.083-.357-.129-.74-.129-1.142v-.089c.045-1.8 1.014-3.182 2.159-3.083 1.145.099 2.035 1.641 1.99 3.442 0 .27-.03.533-.08.782 1.924.376 3.933 1.304 6.51 2.799-4.149-7.08-5.652-9.88-7.25-13.864z" />
    </svg>
  ),
  iconStyle: { background: "#7c3aed", color: "#fff" },
};

const Projects = () => {
  // Example timeline data for education (replace this with your actual education data)
  const timeline = [
    {
      icon: archIcon,
      date: "JAN 2026 - CURRENT",
      title: "Bare Metal Linux",
      subtitle: "ARCH/CACHYOS",
      desc: "Designed and refined a bare-metal Arch/CachyOS setup as a daily driver, focusing on performance, aesthetics, and full system control. Built a heavily customized Hyprland environment with tuned animations, dynamic window behavior, and integrated UI tools, while solving real-world issues across audio, display, and input stacks. This project doubles as both a development workstation and a control hub for my self-hosted infrastructure.",
    },
    {
      icon: serverIcon,
      date: "April 2025 - CURRENT",
      title: "Home Server",
      subtitle: "Whats currently hosting this site",
      desc: "I have set up a home server using an old laptop, which is currently hosting this website. This project has been a great learning experience in server management and web hosting. I've also set it up to run a Minecraft server, allowing me to host games for friends and family. This has not only improved my technical skills but also provided a fun way to connect with others.",
    },
    {
      icon: serverIcon,
      date: "SEP 2024 - CURRENT",
      title: "THIS WEBSITE!",
      subtitle: "built in react - Fully Personal/Solo",
      desc: "My hope and aim is for this site to grow with me as I learn more. Implementing not only new information as I gain certificates and work experience, but also as a place to 'flex what I've learned",
    },
    {
      icon: shooterIcon,
      date: "OCT 2022 - DEC 2022",
      title: "Survive The Undead",
      subtitle: "Unreal Engine Class Prodject",
      desc: "contributed to the development of 'Survive The Undead' using Unreal Engine, collaborating with a team of students through Git. While my initial interest was in AI development, I was assigned the UI/UX role. My responsibilities included designing and implementing polished loading screens, settings, credits, and game over screens, complete with dynamic buttons and tactile sound effects. I also developed the game's round tracking system, adaptive health bar, and intuitive weapon indicators, enhancing the overall player experience.",
    },
    {
      icon: rocketIcon, // Achievement or milestone icon
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
