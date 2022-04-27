import React, { useContext, useMemo } from 'react';
import '../../styles/toolbar.scss';
import Toolbar, { IToolbarProps } from './ToolBar';
import { EditorContext } from '../../model/Context';

export type ChildProps = IToolbarProps & {
    children?: JSX.Element;
    groupName?: string;
};

export default function Child(props: ChildProps)
{
    const { prefixCls, groupName, commands, children } = props || {};
    const { barPopup = {} } = useContext(EditorContext);
    return useMemo(
        () => (
            <div
                className={`_toolbar-child ${groupName && barPopup[groupName] ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {Array.isArray(commands) ? <Toolbar commands={commands} {...props} height="" isChild /> : children}
            </div>
        ),
        [commands, barPopup, groupName, prefixCls],
    );
}