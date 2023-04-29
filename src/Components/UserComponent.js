import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom"


export default function UserComponent({ user, setUser }) {
    const history = useHistory()

    const deleteUser = (idx) => {
        const alterList = user.filter((per, id) => per.id !== idx)
        setUser(alterList)
    }




    return (
        <BaseApp
            title="USED CAR DETAIL LIST">

            <div className="user-content">

                {user.map((person, idx) => (
                    <div key={idx} className="user-card">
                        <h1>{person.carname}</h1>
                        <p>YEAR : {person.year}</p>
                        <p>OWNER : {person.owner}</p>
                        <p>KMS RUNNING : {person.kms}</p>
                        <div className="btn-group">
                            <button
                                onClick={() => history.push(`/edit/${person.id}`)}
                                className="btn">EDIT</button>
                            <button className="btn"
                                onClick={() => history.push(`/user/${idx}`)}
                            >VIEW</button>
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