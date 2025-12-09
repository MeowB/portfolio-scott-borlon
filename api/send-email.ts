import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
	if (req.method === 'POST') {
		const {name, email, message } = req.body

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			}
		});

		try {
			await transporter.sendMail({
				from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
				to: process.env.EMAIL_USER,
				subject: `New message from ${name}`,
				text: message,
				replyTo: email,
			})
			res.status(200).json({message: 'Email sent'})
		} catch (err: any){
			res.status(500).json({message: err.message})
		}

	} else {
		req.status(405).json({message: "Method not allowed"})
	}
}