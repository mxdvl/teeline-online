export type OutlineObject = {
	letterGroupings: string[];
	specialOutlineMeanings: string[];
	lines: LineDetails[];
};

export type LineDetails = {
	path: string;
	translateValues: number[];
};

export interface SyllabusSection {
	title: string;
	description: string;
	slug: string;
	order: number;
}
