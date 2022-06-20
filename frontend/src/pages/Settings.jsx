import { useAtom } from "jotai";
import { userAtom } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
    const [user, setUser] = useAtom(userAtom);
    let navigate = useNavigate();

    if (user.username === undefined) {
        navigate("/login");
      }

    const [toggleEdit, setToggleEdit] = useState(false)
    const [editDesc, setEditDesc] = useState(user.user_description)

    const handleClick = () => {
        setToggleEdit(true)
    }

    const handleEdit = (editDesc, catagory) => {
        fetch(`/api/user/settings/${user._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...user, [catagory]: editDesc }),
          })
            .then((response) => response.json())
            .then((data) => {
              setUser(data);
              
            });
    setToggleEdit(false)
    }


    return (
        <>

        <h1>My Account</h1>
        <img className="profilepic" src={user.display_pic_url} />
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <br />
        <div>
        <p>User description:</p>
        {toggleEdit === true ? <>
                    <input onChange={(event) => setEditDesc(event.target.value)} value={editDesc} />
                    <button onClick={() => handleEdit(editDesc, "user_description")}>Change</button>
                    <br/>
                  </> : 
                  <p>{user.user_description}</p>
        }
        <br />
        <button onClick={handleClick}>edit description</button>
        </div>


        </>
    )
}

export default Settings