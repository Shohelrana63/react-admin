import React from 'react';
import "./User.css";
import img from "../../images/shohelrana.png";
import img2 from "../../images/image2.png";
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={img}
                            alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Berlin Baig</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Accout Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <sapn className="userShowInfoTitle">berlinbaig99</sapn>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <sapn className="userShowInfoTitle">18.12.1998</sapn>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <sapn className="userShowInfoTitle">+880 17000 000 00</sapn>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <sapn className="userShowInfoTitle">berlinbaig99@gmail.com</sapn>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <sapn className="userShowInfoTitle">Dhanmondi | Dhaka</sapn>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="berlinbaig99"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Berlin Baig"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="berlinbaig99@gmail.com"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder="+880 17000 000 00"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="Dhanmondi | Dhaka"
                                    className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg" src={img2} alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
