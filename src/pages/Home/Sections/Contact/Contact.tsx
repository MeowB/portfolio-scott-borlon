import ContactForm from "./ContactForm/ContactForm"
import lines from "../../../../assets/lines.png"

const Contact = () => {
	return (
		<section className="
		relative 
		flex flex-col xl:flex-row xl:gap-50
		sm:w-[70%] xl:w-full
		sm:m-auto
		">
			<div className="
			text-center xl:text-left 
			lg:flex-1
			pt-10"
			>
				<h3 className="heading-xl">Contact</h3>
				<p className="pt-4">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
			</div>
			<div className="mt-12 lg:flex-1">
				<ContactForm />
			</div>

			<div className="absolute w-full h-full top-0 left-0 pointer-events-none">
				<img src={lines} alt="lines in the background" className="absolute min-w-[530px] min-h-[130px] -left-100 bottom-4" />
			</div>
		</section>
	)
}

export default Contact
