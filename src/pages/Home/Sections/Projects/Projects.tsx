import Button from "../../../../components/Button"
import ProjectCard from "./ProjectCard/ProjectCard"
import { projects } from "../../../../data/projects"
import crmThumbnail from "../../../../assets/thumbnail-user-manager.png"

const Projects = () => {
	return (
		<section>
			<div className="flex justify-between items-center mt-35">
				<h2 className="heading-xl">Projects</h2>
				<a href="#contact">
					<Button text="Contact me" />
				</a>
			</div>

			<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-4 md:items-start bg-neutral-100 p-6 rounded-xl text-gray-600 shadow-sm shadow-white">
				<div className="md:col-span-2">
					<img
						src={crmThumbnail}
						alt="CRM demo thumbnail"
						className="w-full h-auto rounded-lg object-cover"
					/>
				</div>

				<div className="flex flex-col gap-4 md:col-span-2 h-full">
					<div className="flex flex-col">
						<h3 className="heading-m">Demo CRM - leads manager</h3>
						<p className="mt-4">
							Full-stack CRM demo with complete CRUD on leads, modal forms and clean UI flow.
						</p>
						<p className="mt-4">
							Built as a personal project to demonstrate full-stack CRUD operations and clean UI patterns in a realistic CRM workflow.
						</p>
					</div>

					<ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 ">
						<li>React</li>
						<li>TypeScript</li>
						<li>Express</li>
						<li>Prisma</li>
						<li>SQLite</li>
					</ul>

					<div className="flex flex-col flex-wrap gap-4 sm:flex-row">
						<a href="https://crm-frontend-gamma-inky.vercel.app/" target="_blank"><Button text="LIVE DEMO" /></a>
						<a href="https://github.com/MeowB/user-manager--CRM-frontend" target="_blank"><Button text="FRONT-END CODE" /></a>
						<a href="https://github.com/MeowB/user-manager--CRM-backend" target="_blank"><Button text="BACK-END CODE" /></a>
					</div>
				</div>
			</div>

			<ul className="
				grid
				md:grid-cols-2
				justify-center
				gap-8
				mt-8
			">
				{
					projects.map(e => <ProjectCard project={e} key={e.title} />)
				}
			</ul>
		</section>
	)
}

export default Projects