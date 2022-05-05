import React from 'react';
import { Menu, Dropdown } from 'antd';
import './Header.css';
import { username } from "../../Data/MockData";


enum buttonList
{
    File = "File",
    Edit = "Edit"
};

interface Props
{
    buttonType: buttonList,
}

export const Header = () =>
{

    return (
        <div className="_HeaderContainer">
            <div id="HeaderRegion" className="_topHeaderRegion">
                <div id="topHeaderLeft" className="_HeaderTitle">Markdown Editor</div>
                <div id="topHeaderMiddle" className="_topHeaderMiddleRegion"></div>
                <div id="topHeaderRight" style={{ display: "flex", flex: "0 0 auto" }}>
                </div>
            </div>
            <div id="HeaderButtonRegion" className="_bottomHeaderRegion">
                <span style={{ display: "inline-block", alignSelf: "self-end" }} >
                    <div className="_HeaderButtonList">
                        <div className="_tabList">
                            <HeaderButton buttonType={buttonList.File}  />
                            <HeaderButton buttonType={buttonList.Edit}  />
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};


const HeaderButton = (props: Props) =>
{
    return (
        <div style={{ flexShrink: "0", display: "inherit" }}>
            <div style={{ textAlign: "center", position: "relative" }}>
                <button type="button" role="tab" id="Home" tabIndex={0} className="_headerButton" >
                    <span className="_headerFlexContainer">
                        <span style={{ flexGrow: 1 }}>
                            <span className="_headerLabel" >
                                {props.buttonType}
                            </span>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}



