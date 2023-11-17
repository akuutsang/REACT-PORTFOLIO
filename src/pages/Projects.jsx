const Projects = ({ img, link }) => {
  return (
    <div className="Products">
      <div className="window">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="ProductsImg" />
      </a>
    </div>
  );
};

export default Projects;
