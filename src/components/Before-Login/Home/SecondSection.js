import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import StartupDatabase from "../Database/StartupDatabase";
import { ref, onValue } from "firebase/database";

function SecondSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const database = ref(db, "startup/users/");
    onValue(database, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        return;
      } else {
        const newData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        let recent = [];
        for (let i = 0; i < 6; i++) {
          recent.push(newData[i]);
          if (recent[i] === undefined) {
            recent.pop(recent[i]);
          }
        }
        setData(recent);
      }
    });
  }, []);
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center bg-black bg-gradient p-5">
        <h2 className="text-center text-light">
          Recently Added Companies On ArtUp
        </h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {data.map((item, index) => {
            if (item.status === false) {
              return;
            } else {
              return (
                <StartupDatabase
                  key={index}
                  fundingstatus={item.funding}
                  id={item.id}
                  mail={item.email}
                  name={item.startupname}
                  pitch={item.pitch}
                  tags={item.industry}
                  goals={item.goal}
                  date={item.date}
                  label="Funding Goals : "
                  likes={item.likes}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default SecondSection;
