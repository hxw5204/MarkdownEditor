import "../styles/style.scss";
import React from 'react';
import { SideBar } from "./Sidebar"
import { Editor } from "./Editor"

export const Page = () =>
{
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Editor />
        </div>
    );
}