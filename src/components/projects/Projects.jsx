import "./projects.scss";
import ProjectList from "../../components/projectList/ProjectList";
import { useEffect, useState } from "react";
import { schoolProjects, personalProjects } from "../../data.js";

export default function Projects() {
  const [selected, setSelected] = useState("personal");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "personal",
      title: "Personal Projects",
    },
    {
      id: "school",
      title: "School Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "personal":
        setData(personalProjects);
        break;
      case "school":
        setData(schoolProjects);
        break;
      default:
        setData(personalProjects);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <h4>Click for more info</h4>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <h3>{d.title} </h3>
            <a href={d.link}>
            <img src={d.img} alt=""></img>
            </a>
            
          </div>
        ))}
      </div>
    </div>
  );
}
