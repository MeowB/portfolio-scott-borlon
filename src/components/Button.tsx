type ButtonProps = {
	onClick?: () => void;
	text: string;
	className?: string;
	type?: "button" | "submit" | "reset";
}


const Button = ({ text, className = "", onClick, type = "button" }: ButtonProps) => {
	return (
		<button
			type={type}
			className={
				`${className}
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
