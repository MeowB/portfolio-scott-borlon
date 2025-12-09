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
		image: "",
		githubUrl: "#",
		projectUrl: "",
		techstack: [],
	},
	{
		title: "E-Commerce",
		image: "",
		githubUrl: "#",
		projectUrl: "",
		techstack: [],
	},
	{
		title: "AI Content Manager",
		image: "",
		githubUrl: "#",
		projectUrl: "",
		techstack: [],
	},
];