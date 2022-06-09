export type todo = {
	id: string;
	title: string;
	completed: boolean;

	
};

interface storeType {
	todos: todo[];
}

export default storeType;
