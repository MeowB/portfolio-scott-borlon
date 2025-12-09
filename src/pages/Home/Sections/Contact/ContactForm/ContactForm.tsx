import Button from "../../../../../components/Button"
import EmailInput from "../../../../../components/Forms/EmailInput"
import TextAreaInput from "../../../../../components/Forms/TextAreaInput"
import TextInput from "../../../../../components/Forms/TextInput"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
	name: z.string().min(5, {message: "Name is too short."}).max(50, {message: "Name is too long."}),
	email: z.email(),
	message: z.string().min(50, {message: "Message too short."})
})

type FormDataType = z.infer<typeof formSchema>


const Mailing = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		watch,
	} = useForm<FormDataType>({
		resolver: zodResolver(formSchema)
	})

	const nameValue = watch("name")
	const emailValue = watch("email")
	const messageValue = watch("message")
	
	const nameIsValid = formSchema.shape.name.safeParse(nameValue).success
	const emailIsValid = formSchema.shape.email.safeParse(emailValue).success
	const messageIsValid = formSchema.shape.message.safeParse(messageValue).success
	


	const onSubmit = (data: FormDataType) => console.log(data);


	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<TextInput placeholder="NAME" {...register("name")} error={errors.name?.message} success={nameIsValid} />
			<EmailInput {...register("email")} error={errors.email?.message} success={emailIsValid} />
			<TextAreaInput {...register("message")} error={errors.message?.message} success={messageIsValid}/>
			<Button text="SEND MESSAGE" type="submit" className="w-fit ml-auto"/>
		</form>
	)
}

export default Mailing
