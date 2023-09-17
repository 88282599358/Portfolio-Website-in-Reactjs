import React from "react";
import "./style.scss";
import Arrow from "../../shared/arrow";
const Showcase = ({ data, transition }) => {
  return (
    // {/* Here pwe put parenthesis directly so we will not have to use return statements */}
    //<div className="projects-showcase">
    // {data.map((project)=>
    // return(
    // )
    //     )}    we use downward because we did not have to write a JS Variables, and all.

    <div className="projects-showcase">
      {data.map((project) => (
        <div
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomout"
              : transition === "zoomin"
              ? "zoomin"
              : ""
          }`}
          key={project.id}
        >
            <div className="meta-content">
                <h3>{project.name}</h3>
                <div className="go-to-cta">
                    <span className="text">
                        Project Details
                    </span>
                    <Arrow />
                </div>
            </div>
            <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
