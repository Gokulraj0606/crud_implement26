import React from "react";
import { useHistory } from "react-router-dom"

export default function BaseApp({ title, style, children }) {
    const history = useHistory();
    return (
        <div>
            <div className="nav-styles">
                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => history.push("/adduser")}
                    >Add User</button>
                </span>
                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => history.push("/")}
                    >DASHBOARD</button>
                </span>
            </div>
            <div className="title">{title}</div>
            <div className="children">
                {children}
                <footer>
                    contact us
                    <div>email:tnusedcars@gmail.com</div>
                    <div>phone:9876543210</div>
                </footer>

            </div>

        </div>
    )
}