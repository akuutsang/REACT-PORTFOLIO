import Projects from "./Projects";
import { projects } from "./Data";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="ProjectListText">
        <h1 className="ProjectListTitle">What can i do?</h1>
        <p className="ProjectListDes">
          Life is a school you never graduate from, everyday is an opportunity
          to learn new things. <br /> I am in the business of learning and
          getting better at what i do, till the day i die. <br /> The sky is the
          starting point, the possibilities are limitless <br /> These are some
          of my works, they are just my starting point
        </p>
      </div>
      <div className="Lists">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
        ;
      </div>
    </div>
  );
};

export default ProjectList;
