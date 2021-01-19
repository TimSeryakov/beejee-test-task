import {applyMiddleware, combineReducers, createStore} from "redux"
import logger from "redux-logger"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import appReducer, {AppActionTypes, AppStateType} from "./app-reducer"
import tasksReducer, {TasksActionTypes, TasksStateType} from "./task-reducer"
import authReducer, {AuthStateType} from "./auth-reducer"
import errReducer, {ErrActionTypes, ErrStateType} from "./err-reducer"

export type RootStateType = {
    app: AppStateType
    auth: AuthStateType
    err: ErrStateType
    tasks: TasksStateType
}

export type ThunkDispatchType = ThunkAction<void | Promise<void>, RootStateType, unknown, RootActionsTypes>

export type RootActionsTypes =
    | AppActionTypes
    | TasksActionTypes
    | ErrActionTypes

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    err: errReducer,
    tasks: tasksReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

export default store