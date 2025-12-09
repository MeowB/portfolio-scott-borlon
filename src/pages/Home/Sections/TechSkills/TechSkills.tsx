import lines from "../../../../assets/lines.png"

const TechSkills = () => {
	return (
		<section className="mt-18 relative w-full">
			<ul className="
				grid 
				place-content-center
				text-center 
				gap-6
				mb-18
				md:grid-cols-2 xl:grid-cols-3
				md:text-left
				">
				<li>
					<h3 className="heading-l">REACT</h3>
				</li>
				<li>
					<h3 className="heading-l">TYPESCRIPT</h3>
				</li>
				<li>
					<h3 className="heading-l">TAILWIND CSS</h3>
				</li>
				<li>
					<h3 className="heading-l">NODE.JS</h3>
				</li>
				<li>
					<h3 className="heading-l">EXPRESS</h3>
				</li>
				<li>
					<h3 className="heading-l">SQL</h3>
				</li>
			</ul>
			<div className="absolute h-full w-full top-0"> <img src={lines} alt="lines in the background" className="absolute min-w-[530px] min-h-[130px] right-[-450px] bottom-[-100px]" /> </div>

			<hr className=" sm:hidden" />
		</section>
	)
}

export default TechSkills
