import React, { useEffect, useReducer, useMemo, useRef, useImperativeHandle } from 'react';
import MarkdownPreview, { MarkdownPreviewProps, MarkdownPreviewRef } from '@uiw/react-markdown-preview';
import TextArea, { ITextAreaProps } from './components/TextArea';
import Toolbar from './components/Toolbar';
import DragBar from './DragBar';
import { getCommands, getExtraCommands, ICommand } from './commands';
import { reducer, EditorContext, ContextStore, PreviewType } from './Context';

export interface IProps
{
    prefixCls?: string;
    className?: string;
}

export const Editor = () =>
{
    return (
        <div></div>
    );
}
