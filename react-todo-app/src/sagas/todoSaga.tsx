import {takeEvery, put,call  } from "redux-saga/effects";
import {actionIds  } from "../types/actionsType";

// watchers
function* todoSaga(){

yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
yield takeEvery(actionIds.DELETE_TODO, deleteTodoWorker);
yield takeEvery(actionIds.GET_TODOS, getTodosWorker);
yield takeEvery(actionIds.MARK_COMPLETE, markTodoWorker);
yield takeEvery(actionIds.MARK_INCOMPLETE, markIncompleteTodo);



}

// workers


function* createTodoWorker(){


}

function* deleteTodoWorker(){


}

function* getTodosWorker(){


}
function* markTodoWorker(){


}
function* markIncompleteTodo(){


}