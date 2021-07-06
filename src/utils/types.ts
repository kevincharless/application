interface Time {
	start: String;
	end: String;
}

export interface PostType {
	title: String;
	location: String;
	participants: { name: String; picture: String }[];
	date: String;
	time: Time;
	notes: String;
	createdBy: String;
}

export interface UserType {
	id: Number;
	name: String;
	picture: String;
	jobTitle: String;
	joinDate: String;
}
