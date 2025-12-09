import Button from "../../../../../components/Button"
import EmailInput from "../../../../../components/Forms/EmailInput"
import TextAreaInput from "../../../../../components/Forms/TextAreaInput"
import TextInput from "../../../../../components/Forms/TextInput"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const formSchema = z.object({
	name: z.string().min(5, { message: "Name is too short." }).max(50, { message: "Name is too long." }),
	email: z.email(),
	message: z.string().min(50, { message: "Message too short." })
})

type FormDataType = z.infer<typeof formSchema>


const ContactForm = () => {
	const [messageSent, setMessageSent] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
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

	const onSubmit = async (data: FormDataType) => {
		try {
			const res = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (res.ok) {
				setMessageSent(true)
			} else {
				setMessageSent(false)
			}
		} catch (err) {
			console.error(err)
		}
	}


	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			{messageSent === false ? (
				<>
					<TextInput placeholder="NAME" {...register("name")} error={errors.name?.message} success={nameIsValid} />
					<EmailInput {...register("email")} error={errors.email?.message} success={emailIsValid} />
					<TextAreaInput {...register("message")} error={errors.message?.message} success={messageIsValid} />
					<Button text="SEND MESSAGE" type="submit" className="w-fit ml-auto" />
				</>
			)
				: <p className="text-green-400 pb-16 m-auto">Message sent succesfully</p>
		}
		</form>
	)
}

export default ContactForm