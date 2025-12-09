import Header from "../../components/Header/Header"
import Hero from "./Sections/Hero/Hero"
import TechSkills from "./Sections/TechSkills/TechSkills"
import Projects from "./Sections/Projects/Projects"
import Contact from "./Sections/Contact/Contact"
import Footer from "../../components/Footer/Footer"

const Home = () => {
	return (
		<>
			<header className="bg-black w-full frame text-white">
				<Header />
			</header>
			<main className="bg-black w-full frame text-white overflow-hidden pb-20">
				<Hero />
				<TechSkills />
				<Projects />
			</main>
			<footer className="bg-gray-dark w-full frame text-white pt-15">
				<Contact />
				<hr className="mt-23 w-full"/>
				<Footer className="pt-8 pb-10" />
			</footer>
		</>
	)
}

export default Home
