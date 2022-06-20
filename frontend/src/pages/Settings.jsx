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

  const [toggleEditDesc, setToggleEditDesc] = useState(false);
  const [editDesc, setEditDesc] = useState(user.user_description);

  // const handleClickDesc = () => {
  //     setToggleEditDesc(true)
  // }

  const handleEdit = (edited, catagory) => {
    fetch(`/api/user/settings/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, [catagory]: edited }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    if (catagory === "user_description") {
      setToggleEditDesc(false);
    } else {
      setToggleEditImg(false);
    }
  };

  const [toggleEditImg, setToggleEditImg] = useState(false);
  const [editImg, setEditImg] = useState(user.display_pic_url);

  // const handleClickImg = () => {
  //     setToggleEditImg(true)
  // }

  const [toggleDelete, setToggleDelete] = useState(false);

  const handleDelete = () => {
    fetch(`/api/user/settings/${user._id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        setUser();
        navigate("/login");
      });
  };

  return (
    <>
      <h1>My Account</h1>
      <div>
        {toggleEditImg === true ? (
          <>
            <input
              onChange={(event) => setEditImg(event.target.value)}
              value={editImg}
            />
            <button onClick={() => handleEdit(editImg, "display_pic_url")}>
              Change
            </button>
            <br />
          </>
        ) : (
          <>
            <img className="profilepic" src={user.display_pic_url} />
            <br />
            <button onClick={() => setToggleEditImg(true)}>
              Change display image
            </button>
          </>
        )}
        <br />
      </div>

      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <br />
      <div>
        <p>User description:</p>
        {toggleEditDesc === true ? (
          <>
            <input
              onChange={(event) => setEditDesc(event.target.value)}
              value={editDesc}
            />
            <button onClick={() => handleEdit(editDesc, "user_description")}>
              Change
            </button>
            <br />
          </>
        ) : (
          <>
            <p>{user.user_description}</p>
            <br />
            <button onClick={() => setToggleEditDesc(true)}>
              edit description
            </button>
          </>
        )}
      </div>

      <br />
      <br />
      <div>
        {toggleDelete === true ? (
          <>
            <p>Confirm Delete?</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setToggleDelete(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setToggleDelete(true)}>
            Delete your account
          </button>
        )}
      </div>
    </>
  );
};

export default Settings;
