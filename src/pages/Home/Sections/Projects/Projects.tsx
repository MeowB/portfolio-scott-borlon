import Button from "../../../../components/Button"
import ProjectCard from "./ProjectCard/ProjectCard"
import { projects } from "../../../../data/projects"

const Projects = () => {
	console.log(projects)

	
	return (
		<section>
			<div className="flex justify-between items-center mt-35">
				<h2 className="heading-xl">Projects</h2>
				<Button text="CONTACT ME" props=""/>
			</div>
			<ul>
				{
					projects.map(e => <ProjectCard project={e} key={e.title}/>)
				}
			</ul>
		</section>
	)
}

export default Projects