import thumbnailLandingWebsite from '../assets/thumbnail-landing-website.png'
import thumbnailPortfolioAnalyzer from '../assets/thumbnail-portfolio-analyzer.png'

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
		title: "Portfolio Analyzer",
		image: thumbnailPortfolioAnalyzer,
		githubUrl: "https://github.com/MeowB/Investment-Portfolio-Analyzer",
		projectUrl: "https://investment-portfolio-analyzer.vercel.app/",
		techstack: ["TypeScript", "React", "Python", "Flask", "SQLite"],
	},
];