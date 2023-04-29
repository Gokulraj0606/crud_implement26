import React from "react";
import BaseApp from "../Core/Base";
import { useParams } from "react-router-dom";

export default function UserDetails({ user }) {
    const { id } = useParams()
    const person = user[id]

    return (
        <BaseApp title={"CAR DETAILS"}>
            <div className="user-content">
                <div className="user-card">
                    <h1>{person.carname}</h1>
                    <p>YEAR : {person.year}</p>
                    <p>OWNER : {person.owner}</p>
                    <p>KMS RUNNING : {person.kms}</p>

                </div>


            </div>

        </BaseApp>
    )
}