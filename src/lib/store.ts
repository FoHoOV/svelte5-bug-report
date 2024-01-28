import { writable } from 'svelte/store';

type TestStore = {
	title: string;
};

const { subscribe, update, set } = writable<TestStore[]>([]);

function addTitle(title: string) {
	update((current) => {
		current.push({ title: title });
		return current;
	});
}

function clear() {
	set([]);
}

export default {
	addTitle: addTitle,
	clear: clear,
	subscribe: subscribe
};
