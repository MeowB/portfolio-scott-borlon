import Header from "../../components/Header/Header"
import Hero from "./Sections/Hero/Hero"


const Home = () => {
  return (
	<div className="bg-gray-dark w-full frame text-white overflow-hidden">
		<header>
	  		<Header />
		</header>
		<div>
			<Hero />
		</div>
		{/* <footer className="w-full bg-amber-200 h-190 mt-10">

		</footer> */}
	</div>
  )
}

export default Home
