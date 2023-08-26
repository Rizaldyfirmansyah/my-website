import AbinawaImage from "../assets/projects/abinawa.png";
import ShopcutImage from "../assets/projects/shopcut.png";
import CrwnaImage from "../assets/projects/crwn-cloth.png";
import DigipackImage from "../assets/projects/digipack.png";
import NotesImage from "../assets/projects/notes.png";
import PaygameImage from "../assets/projects/paygame.png";
import RestokuImage from "../assets/projects/restoku.png";
import Pokeapp from "../assets/projects/pokeapp.png";
import Travelis from "../assets/projects/travelis.png";
import Maduis from "../assets/projects/maduis.png";

type ProjectProps = {
	title: string;
	image: string;
	link: string;
	demoLink: string;
	summary: string;
	tags: string[];
};

export const listProject: ProjectProps[] = [
	{
		title: "Rent Car",
		image: Travelis,
		link: "https://github.com/Rizaldyfirmansyah/rizaldy-firmansyah.github.io.git",
		demoLink: "#",
		summary:
			"website for car or motorcycle rental using laravel 8",
		tags: ["mysql", "Laravel", "boostrap"],
	},
	{
		title: "Inventory Admin",
		image: Maduis,
		link: "https://github.com/Rizaldyfirmansyah/inventory.github.io.git",
		demoLink: "#",
		summary:
			"website admin for system inventory or warehouse using laravel 8",
		tags:  ["mysql", "Laravel", "boostrap"],
	},
];
