import {takeEvery, put,call, take, StrictEffect  } from "redux-saga/effects";
import {actionIds  } from "../types/actionsType";
import todoApi from "../api/todo-api";
import { AxiosResponse } from "axios";

import {
	createdTodoAction,
	deletedTodoAction,
	markedCompleteAction,
	markedIncompleteAction,
	gotTodos,
	createTodoAction,
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
} from "../types/actionsType";

// watchers
function* todoSaga(): Generator<StrictEffect>{

yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
yield takeEvery(actionIds.DELETE_TODO, deleteTodoWorker);
yield takeEvery(actionIds.GET_TODOS, getTodosWorker);
yield takeEvery(actionIds.MARK_COMPLETE, markCompleteWorker);
yield takeEvery(actionIds.MARK_INCOMPLETE, markIncompleteWorker);



}

// workers


function* createTodoWorker({ title }: createTodoAction) {
	// create todo using api
	try {
		const response: AxiosResponse = yield call(todoApi.post, "/todos", {
			title: title,
		});
		switch (response.status) {
			case 201:
				const data: createdTodoAction = {
					type: "CREATED_TODO",
					todo: response.data.data.todo,
				};
				yield put(data);
		}
	} catch (err) {}
	// update our redux store by dispatching a new action
}

function* deleteTodoWorker({ id }: deleteTodoAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.delete, `/todos/${id}`);
		switch (response.status) {
			case 200:
				const data: deletedTodoAction = {
					type: "DELETED_TODO",
					id,
				};
				yield put(data);
		}
	} catch (error) {}
}

function* markCompleteWorker({ id }: markCompleteAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.patch, `/todos/${id}`, {
			completed: true,
		});
		switch (response.status) {
			case 200:
				const data: markedCompleteAction = {
					type: "MARKED_COMPLETE",
					id,
				};
				yield put(data);
		}
	} catch (error) {}
}

function* markIncompleteWorker({ id }: markIncompleteAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.patch, `/todos/${id}`, {
			completed: false,
		});
		switch (response.status) {
			case 200:
				const data: markedIncompleteAction = {
					type: "MARKED_INCOMPLETE",
					id,
				};
				yield put(data);
		}
	} catch (error) {}
}

function* getTodosWorker() {
	try {
		const response: AxiosResponse = yield call(todoApi.get, "/todos");
		switch (response.status) {
			case 200:
				const data: gotTodos = {
					type: "GOT_TODOS",
					todos: response.data.data.todos,
				};
				yield put(data);
		}
	} catch (error) {}
}

export default todoSaga;