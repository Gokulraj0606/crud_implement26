import React, { useState } from "react";

export function AddUser({ user, setUser }) {

    const [carname, setCarname] = useState("")
    const [id, setId] = useState("");
    const [year, setYear] = useState("");
    const [owner, setOwner] = useState("");
    const [kms, setKms] = useState("");

    const addNewUser = () => {
        const newUser = {
            id,
            carname,
            year,
            owner,
            kms
        }

        setUser([...user, newUser])
        setCarname("");
        setId("");
        setKms("");
        setOwner("");
        setYear("");
    }


    return (
        <div>
            <input
                placeholder="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
            />
            <input
                placeholder="carname"
                value={carname}
                onChange={(event) => setCarname(event.target.value)}
            />
            <input
                placeholder="year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
            />
            <input
                placeholder="no of owners"
                value={owner}
                onChange={(event) => setOwner(event.target.value)}
            />
            <input
                placeholder="kms running"
                value={kms}
                onChange={(event) => setKms(event.target.value)}
            />
            <button
                onClick={addNewUser}
            >ADD</button>
        </div>
    )
}