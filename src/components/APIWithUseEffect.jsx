import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";

const APIWithUseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        console.log(json.users);
      });
  }, []);

  return (
    <>
      {Array.isArray(users.users) &&
        users.users.map((elem) => {
          return (
            <CardComp
              key={elem.id}
              ip={elem.ip}
              firstName={elem.firstName}
              lastName={elem.lastName}
              image={elem.image}
              username={elem.username}
              age={elem.age}
              gender={elem.gender}
              email={elem.email}
              phone={elem.phone}
            />
          );
        })}
    </>
  );
};

export default APIWithUseEffect;
