type ButtonProps = {
	onClick?: () => void;
	text:string;
	props?: string;
}


const Button = ({ text, props, onClick }: ButtonProps) => {
	return (
		<button className={
			`${props}
			max-h-11
			py-2
			px-0.5
			border-b-4
			border-primary
			font-bold
			tracking-wider
			hover:text-primary
			hover:cursor-pointer
			`}
			onClick={onClick}
			>
			{text}
		</button>
	)
}

export default Button
