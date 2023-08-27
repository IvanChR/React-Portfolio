import projectlist from "./projectsList";
import { Button } from "./Button";


export const Projects = () => {
    return (
        <>
            <section className="projects" id="Projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects__filter">
                    <Button className="filter__button btn" /* onClick={displayProjects()} */ text="All" />
                    <Button className="filter__button btn" text="3D Art" />
                    <Button className="filter__button btn" text="Web Dev" />
                    <Button className="filter__button btn" text="Design" />
                </div>
                <div className="container projects__container">
                    <ProjectItem />
                </div>
            </section>
        </>
    )
}

const ProjectItem = () => {
    const linkToProject = <i className="fa-solid fa-arrow-up-right-from-square"></i>
    const projectItem = projectlist.map(item => {
        return (
            <div className="project__item" key={`${item.title}`} id={`${item.id}`} >
                <div className="project__image">
                    <img className="image-project" src={`${item.image}`} alt="" />
                    <a className="project__link" href={`${item.link}`} target="_blank" rel="noreferrer" > {linkToProject} </a>
                </div>
                <div className="project__info">
                    <small>{`${item.category}`}</small>
                    <h4 className="project__title">{`${item.title}`}</h4>
                    <p className="project__text">{`${item.text}`}</p>
                </div>
            </div>
        )
    }
    )
    
    return projectItem
}
