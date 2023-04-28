import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { data } from "../Data/data";
import { AddUser } from "./AddUser";

export default function UserComponent() {
    const [user, setUser] = useState(data)
    const deleteUser = (idx) => {
        const alterList = user.filter((per, id) => per.id !== idx)
        setUser(alterList)
    }




    return (
        <BaseApp
            title="user Details">
            <AddUser user={user} setUser={setUser} />
            <div className="user-content">

                {user.map((person, idx) => (
                    <div key={idx} className="user-card">
                        <h1>{person.carname}</h1>
                        <p>YEAR : {person.year}</p>
                        <p>OWNER : {person.owner}</p>
                        <p>KMS RUNNING : {person.kms}</p>
                        <div className="btn-group">
                            <button className="btn">EDIT</button>
                            <button className="btn"
                                onClick={() => deleteUser(person.id)}
                            >DELETE</button>

                        </div>
                    </div>

                ))}
            </div>
        </BaseApp>
    )
}