import Header from "../../components/Header/Header"
import Hero from "./Sections/Hero/Hero"
import TechSkills from "./Sections/TechSkills/TechSkills"
import Projects from "./Sections/Projects/Projects"

const Home = () => {
  return (
	<div className="bg-gray-dark w-full frame text-white overflow-hidden">
		<header>
	  		<Header />
		</header>
		<div>
			<Hero />
			<TechSkills />
			<Projects />
		</div>
		{/* <footer className="w-full bg-amber-200 h-190 mt-10">

		</footer> */}
	</div>
  )
}

export default Home
