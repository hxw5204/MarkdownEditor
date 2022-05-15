import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {defaultValue} from './Data/MockData';

interface EditorState{
     content: string;
}

export interface AppState{
    editor: EditorState;
}

const initialEditorState: EditorState = {
    content: defaultValue,
}

export const SETCONTENT = "SetContent";
export const setContent = (content:string) => ({
    type: SETCONTENT,
    content,
} as const);

type EditorActions = 
    | ReturnType<typeof setContent>;

const editorReducer = (
    state = initialEditorState,
    action: EditorActions,
) => {
    switch(action.type) {
        case SETCONTENT:{
            return {
                ...state,
                content: action.content,
            };
            break;
        }
    }
    return state;
}

const rootReducer = combineReducers<AppState>({
    editor: editorReducer,
});
 

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development'
})