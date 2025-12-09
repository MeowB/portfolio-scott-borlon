type TextAreaInputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
	error?: string;
	success?: boolean;
}


const TextAreaInput = ({ error, success, ...props }: TextAreaInputProps) => {
	return (
		<div className="flex flex-col">
			<textarea
				{...props}
				placeholder="MESSAGE" rows={5}
				className={`
				border-b-2 ${error ? "border-red-300 focus:border-red-500" : success === true ? "border-green-300 focus:border-green-500" : "border-white/50 focus:border-white "}
				focus:outline-none
				pl-6 pb-4
				`}>
			</textarea>
			<p className="h-8 pt-2 text-red-300 flex ml-auto">{error ? error : ""}</p>
		</div>
	)
}

export default TextAreaInput