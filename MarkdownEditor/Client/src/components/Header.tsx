import "../styles/headerStyle.scss";
import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { buttonList } from "../model/Model";
import { username } from "../model/MockData";

interface Props {
    buttonType: buttonList, 
}

export const Header = () => {

    return (
        <div className="_HeaderContainer">
            <div id="HeaderRegion" className="_topHeaderRegion">
                <div id="topHeaderLeft" className="_HeaderTitle">Markdown Editor</div>
                <div id="topHeaderMiddle" className="_topHeaderMiddleRegion"></div>
                <div id="topHeaderRight" style={{ display: "flex", flex: "0 0 auto" }}>
                    <div style={{ height: "100%", lineHeight: "48px", display: "flex" }}>
                        <HeaderUserTag />
                    </div>
                </div>
            </div>
            <div id="HeaderButtonRegion" className="_bottomHeaderRegion">
                <span style={{ display: "inline-block", alignSelf: "self-end" }} >
                    <div className="_HeaderButtonList">
                        <div className="_tabList">
                            <HeaderButton buttonType={buttonList.File} />
                            <HeaderButton buttonType={buttonList.Edit} />
                            <HeaderButton buttonType={buttonList.Help} />
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
                <button type="button" role="tab" id="Home" tabIndex={0} className="_headerButton">
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

const HeaderUserTag = () =>
{
    const nameInitial = username.charAt(0);

    return (
        <div className="_headerUserIconContainer">
            <div className="_headerUserIconWrapper">
                <div className="_headerUserIconCircle" title={username}>
                    {nameInitial}
                </div>
            </div>
        </div>
    );
}





