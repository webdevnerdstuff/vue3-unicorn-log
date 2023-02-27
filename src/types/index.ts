export interface OptionsSettings {
	array?: (string[] | number[]);
	defaultStyles?: object;
	disabled?: boolean;
	globalOptions?: boolean;
	logPrefix?: boolean | string;
	magical?: boolean;
	name?: string;
	objects?: object;
	styles?: string;
	text?: string;
	type?: string;
}

export interface DefaultStyles {
	goNuts?: string[];
	info?: string[];
	log?: string[];
}
