import thumbnailLandingWebsite from '../assets/thumbnail-landing-website.png'

export type projectType = {
	title: string;
	githubUrl: string;
	projectUrl: string;
	image: string;
	techstack: string[];
}

export const projects: projectType[] = [
	
	{
		title: "Landing Website",
		image: thumbnailLandingWebsite,
		githubUrl: "https://github.com/MeowB/scoot-solo",
		projectUrl: "https://scoot-solo.vercel.app/",
		techstack: ["HTML", "SCSS"]
	},
	{
		title: "User Manager",
		image: "", // replace with actual path
		githubUrl: "#",
		projectUrl: "",
		techstack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
	},
	{
		title: "E-Commerce",
		image: "", // replace with actual path
		githubUrl: "#",
		projectUrl: "",
		techstack: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL"],
	},
	{
		title: "AI Content Manager",
		image: "", // replace with actual path
		githubUrl: "#",
		projectUrl: "",
		techstack: ["React", "TypeScript", "OpenAI API", "Node.js", "Express", "MongoDB", "Redis"],
	},
];