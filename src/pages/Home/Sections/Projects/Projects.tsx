import Button from "../../../../components/Button"
import ProjectCard from "./ProjectCard/ProjectCard"
import { projects } from "../../../../data/projects"

const Projects = () => {
	return (
		<section>
			<div className="flex justify-between items-center mt-35">
				<h2 className="heading-xl">Projects</h2>
				<Button text="CONTACT ME" props=""/>
			</div>
			<ul className="
				grid
				md:grid-cols-2
				justify-center
				gap-8
				mt-8
			">
				{
					projects.map(e => <ProjectCard project={e} key={e.title}/>)
				}
			</ul>
		</section>
	)
}

export default Projects