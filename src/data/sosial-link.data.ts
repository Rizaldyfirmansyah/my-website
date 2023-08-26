import {
	faGithubAlt,
	faInstagram,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";

type SosialLink = {
	icon: IconDefinition;
	link: string;
};

export const SosialLinks: SosialLink[] = [
	{
		icon: faGithubAlt,
		link: "https://github.com/Rizaldyfirmansyah",
	},
	{
		icon: faInstagram,
		link: "https://www.instagram.com/rizaldy.__/",
	},
	{
		icon: faLinkedin,
		link: "https://www.linkedin.com/in/rizaldy-firmansyah-15178323b/",
	},
	{
		icon: faEnvelope,
		link: "mailto:rizaldysukun14@gmail.com",
	},
];
