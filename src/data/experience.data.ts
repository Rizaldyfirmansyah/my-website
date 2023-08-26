type GlobalDataProps = {
	title: string;
	icon?: string;
	desc?: string;
};

type ExperienceProps = {
	date: string;
	type: string;
	summary: string;
} & GlobalDataProps;

export const experiences: ExperienceProps[] = [
	{
		title: "Computer Technician and Software Engineer | CV.Wijayatama",
		date: "Oct 2019 - April 2020",
		type: "Internship",
		summary:
			"Carrying out repairs and maintenance including installation and configuration and becoming a Software Engineer, responsible for developing software, ensuring quality, and meeting user needs",
	},
	{
		title: "Full Stack programmer | Madu Istiqomah",
		date: "Aug 2020 - Mei 2021",
		type: "Part-time",
		summary:
			"Responsible for developing and managing various aspects of the creation of an application or system, both in terms of the frontend (the part of the view viewed by the user) and the backend (processes and logic running behind the scenes).",
	},
	{
		title: "Website Developer | Travelis.Id",
		date: "Aug 2020 - Mei 2021",
		type: "Part-time",
		summary:
			"responsible for designing, developing, and maintaining websites.",
	},
	{
		title: "Node.js For Back End | Hactiv 8",
		date: "Aug 2023 - Present",
		type: "Bootcamp",
		summary:
			"learn and expand developer back end science using node js and postgresql",
	},
];

export const achievement: GlobalDataProps[] = [
	{
		title:
			"-",
	},
];

export const organizations: GlobalDataProps[] = [
	{
		title:
			"Staff of the Ministry of Domestic Affairs  - Badan Eksekutif Mahasiswa Stmik Jabar 2022-2023",
		desc: "Implement policies and supervise activities on campus as well as coordinate with departments on campus and resolve problems or conflicts in the campus environment",
	},
	{
		title:
			"Vice Chairman  - Himpunan Mahasiswa Teknik Informatika Stmik Jabar 2022-2023",
		desc: "assist the chairman in managing and directing various activities of the set. Work with other team members, including staff and volunteers, to coordinate the activities of the group.",
	},
	{
		title:
			"student Council President  - Smk Pemkab Ponorogo 2019-2020",
		desc: "leads an OSIS team consisting of various members with their respective tasks and responsibilities. responsible for planning and organizing various activities such as seminars, workshops, social events, and charity projects.",
	},
];

export const skills: GlobalDataProps[] = [
	{
		title: "HTML",
		icon: "devicon-html5-plain-wordmark colored",
	},
	{
		title: "CSS",
		icon: "devicon-css3-plain-wordmark colored",
	},
	{
		title: "Javascript",
		icon: "devicon-javascript-plain colored",
	},
	{
		title: "Typescript",
		icon: "devicon-typescript-plain colored",
	},
	{
		title: "React Js",
		icon: "devicon-react-original colored",
	},
	{
		title: "TaiwindCss",
		icon: "devicon-tailwindcss-plain colored",
	},
	{
		title: "Bootstrap",
		icon: "devicon-bootstrap-plain colored",
	},

	{
		title: "Node Js",
		icon: "devicon-nodejs-plain colored",
	},
	{
		title: "Next Js",
		icon: "devicon-nextjs-plain colored",
	},
	{
		title: "MySQL",
		icon: "devicon-mysql-plain-wordmark colored",
	},

];

export const tools: GlobalDataProps[] = [
	{
		title: "Vscode",
		icon: "devicon-visualstudio-plain colored",
	},
	{
		title: "Git",
		icon: "devicon-git-plain colored",
	},
	{
		title: "Github",
		icon: "devicon-github-original colored",
	},
	{
		title: "Npm",
		icon: "devicon-npm-original-wordmark colored",
	},

];
