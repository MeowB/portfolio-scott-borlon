const Button = ({ text, props }: { text: string, props: string }) => {
	return (
		<button className={
			`${props}
			max-w-[117px]
			py-2
			px-0.5
			border-b-4
			border-primary
			font-bold
			tracking-wider
			hover:text-primary
			hover:cursor-pointer
			`}>
			{text}
		</button>
	)
}

export default Button
