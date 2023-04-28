import React from "react";

export default function BaseApp({ title, style, children }) {
    return (
        <div>
            <div className="nav-styles">navbar</div>
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