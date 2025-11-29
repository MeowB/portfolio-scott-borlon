import type { projectType } from "../../../../../data/projects"
import Button from "../../../../../components/Button"

type ProjectCardProps = {
	project: projectType;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<li>
			<div>
				{project.image ? <img src={project.image} /> : <p>coming soon</p>}
			</div>
			<div>
				<h3>{project.title}</h3>
				<ul>{project.techstack.map(el => (<li>{el}</li>))}</ul>
			</div>
			<div>
				<Button text="VIEW PROJECT" props="mr-8" />
				<Button text="VIEW CODE" />
			</div>
		</li>
	)
}

export default ProjectCard
