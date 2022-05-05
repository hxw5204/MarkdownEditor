import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Editor from 'rich-markdown-editor';
import { dark } from 'rich-markdown-editor/dist/styles/theme';
import { defaultValue } from '../../Data/MockData'
import './Editor.css';



interface TextEditorProps
{
    readonly: boolean
}


export const MarkdownEditor = () =>
{
    const onContentChange = (value: string) =>
    {
        console.log(value);
    }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <Editor className="Editor"
                defaultValue={defaultValue}
                headingsOffset={1}
                onChange={(value) => {onContentChange(value());}}
                />
        </div>
    );
}

