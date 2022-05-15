import React from 'react';
import Editor from 'rich-markdown-editor';
import { useSelector, useDispatch } from 'react-redux';
import './Editor.css';
import { AppState, setContent } from '../../Store';


const MarkdownEditor = () =>
{
    const dispatch = useDispatch();
    const content = useSelector((state: AppState) => state.editor.content);
    
    const onContentChange = (value: string) =>
    {
        dispatch(setContent(value));
        console.log(content);
    }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <Editor className="Editor"
                defaultValue={content}
                placeholder={"Write something nice…"}
                onChange={(value) => { onContentChange(value()); }}
            />
        </div>
    );
}

export default MarkdownEditor;

