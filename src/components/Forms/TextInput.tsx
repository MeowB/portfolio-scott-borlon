type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string;
	error?: string;
	success?: boolean;
}


const TextInput = ({ placeholder, error, success = false, ...props }: TextInputProps) => {
	return (
		<div className="flex flex-col">
			<input
				{...props}
				type="text" placeholder={placeholder}
				className={`
					border-b-2  ${error ? "border-red-300 focus:border-red-500" : success === true ? "border-green-300 focus:border-green-500" : "border-white/50 focus:border-white "}
					focus:outline-none
					pl-6 pb-4
					`} />
			<p className="h-8 pt-2 text-red-300 flex ml-auto">{error ? error : ""}</p>
		</div>
	)
}

export default TextInput
