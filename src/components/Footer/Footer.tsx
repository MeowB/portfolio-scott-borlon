import SocmedList from '../SocmedList/SocmedList.js'



const Footer = ({className = ""}: {className?: string}) => {
	return (
		<>
			<ul className={`${className} relative z-10 flex flex-col flex-wrap content-center items-center gap-5 sm:flex-row sm:justify-between`}>
				<li className="text-[32px]">
					scott<span className="text-primary">borlon</span>
				</li>
				<li>
					<SocmedList props='lg:pr-6'/>
				</li>
			</ul>
		</>
	)
}

export default Footer
