import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditUser = ({ user, setUser }) => {
    const [carname, setCarname] = useState("");
    const [idx, setIdx] = useState("");
    const [year, setYear] = useState("");
    const [owner, setOwner] = useState("");
    const [kms, setKms] = useState("");

    const { id } = useParams()

    const selectedUser = user.find((per) => per.id === id);
    const history = useHistory()


    useEffect(() => {
        setIdx(selectedUser.id)
        setCarname(selectedUser.carname)
        setYear(selectedUser.year)
        setOwner(selectedUser.owner)
        setKms(selectedUser.kms)
    }, [])

    const updateUser = () => {
        const editIndex = user.findIndex(per => per.id === id)
        console.log(editIndex)

        const editedData = {
            id: idx,
            carname,
            year,
            owner,
            kms
        }
        user[editIndex] = editedData
        setUser([...user]);
        history.push("/");
    }

    return (
        <BaseApp
            title={"EDIT CAR DETAILS"}
        >
            <div>
                <input
                    placeholder="id"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
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
                    onClick={updateUser}
                >EDIT</button>
            </div>
        </BaseApp>
    )
}

export default EditUser