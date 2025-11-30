import Button from "../../../../components/Button"
import me from "../../../../assets/me-greyscale.png"
import lines from "../../../../assets/lines.png"
import oval from "../../../../assets/oval.png"

const Hero = () => {
	return (
		<section className="relative">
			<div className="
			absolute 
			w-full 
			top-[-120px] sm:top-[-60px] lg:top-[-120px]
			z-0 
			inset-0 
			flex 
			justify-center md:justify-end
			lg:right-[165px]">
				<div
					className="
				w-[174px] sm:w-60 md:w-[322px] xl:w-[445px]
				h-[333px] sm:h-90 md:h-[548px] lg:h-[664px]
				bg-linear-to-t from-white/10 to-gray-dark
				flex flex-col justify-end
				">
					<img src={me} alt="picture of Scott Borlon" />
				</div>
			</div>
			<div className="absolute w-full h-full z-0"> <img src={oval} alt="oval in the background" className="absolute right-[-60px] top-[480px]"/> <img src={lines} alt="lines in the background" className="absolute -left-80 top-30" /> </div>
			<div
				className="
			pt-60 sm:pt-82 md:pt-32
			px-8 md:px-0
			text-center md:text-left
			relative
			z-10
			flex flex-col
			">
				<h1 
				className="
				heading-xl
				underline
				underline-offset-10
				decoration-8
				decoration-primary
				hidden md:block
				">
					Scott Borlon
				</h1>
				<h2 className="heading-l pt-5">Turning designs into smooth, <br /> responsive interfaces.</h2>

				<p className="pt-8 max-w-88 self-center md:self-auto">Front-end developer based in Belgium. I focus on writing clean code, crafting thoughtful interactions, and building user experiences that feel intuitive and engaging.</p>

				<Button text="Contact me" props="self-center md:self-start mt-6"/>
			</div>
			<hr className="mt-26"/>
		</section>
	)
}

export default Hero
