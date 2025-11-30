import type { projectType } from "../../../../../data/projects"
import Button from "../../../../../components/Button"

type ProjectCardProps = {
	project: projectType;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<li
		key={project.title}
		className="
		relative
		">
			<div className="
			relative
				mix-w-86
				min-h-63
				flex
				justify-center
				items-center
				text-black
				bg-white
				group
			">
				{project.image ? <img className="relative" src={project.image} /> : <p>Coming soon...</p>}
				<div className="
				absolute 
				w-full h-full 
				xl:bg-black 
				xl:opacity-0 
				xl:group-hover:opacity-70 
				xl:group-hover:transition-opacity
				xl:duration-500 
				xl:ease-in
				z-1
				pointer-none
				">

				</div>


				<div className="
				absolute 
				w-full h-full
				opacity-0
				group-hover:opacity-100
				xl:group-hover:transition-opacity
				xl:duration-500 
				xl:ease-in
				z-2
				">

					<div className="
					hidden xl:flex
					flex-col
					absolute
					items-center
					text-white
					top-[50%] translate-y-[-50%]
					left-[50%] translate-x-[-50%]
					gap-8
					
					">
						<Button text="VIEW PROJECT" onClick={() => window.open(project.projectUrl)} />
						<Button text="VIEW CODE" onClick={() => window.open(project.githubUrl)} />
					</div>
				</div>
			</div>
			<div className="mt-2">
				<h3 className="heading-m">{project.title}</h3>
				<ul className="flex flex-wrap mt-1">
					{project.techstack.map(el => (
						<li className="mr-4" key={el}>{el}</li>
					))}
				</ul>
			</div>
			<div className="
			mt-2
			xl:hidden
			">
				<Button text="VIEW PROJECT" props="mr-8" onClick={() => window.open(project.projectUrl)} />
				<Button text="VIEW CODE" onClick={() => window.open(project.githubUrl)} />
			</div>
		</li>
	)
}

export default ProjectCard
