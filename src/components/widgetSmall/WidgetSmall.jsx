import React from 'react';
import "./WidgetSmall.css";
import { Visibility } from "@material-ui/icons";
import img from "../../images/shohelrana.png";

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTite">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src={img} alt=""
                        className="widgetSmallImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Rana Baig</span>
                        <span className="widgetSmallUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={img} alt=""
                        className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Rana Baig</span>
                        <span className="widgetSmallUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={img} alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Rana Baig</span>
                        <span className="widgetSmallUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={img} alt=""
                        className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Rana Baig</span>
                        <span className="widgetSmallUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={img} alt=""
                        className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Rana Baig</span>
                        <span className="widgetSmallUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
