import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import InvestorDatabase from "../Database/InvestorDatabase";
import { ref, onValue } from "firebase/database";
function FourthSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const database = ref(db, "investors/users/");
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
          Recently Added Investors On ArtUp
        </h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {data.map((item, index) => {
            if (item.status === false) {
              return;
            } else {
              return (
                <InvestorDatabase
                  key={index}
                  mail={item.email}
                  first={item.firstname}
                  last={item.lastname}
                  introduction={item.introduction}
                  tags={item.tags}
                  goals={item.maxinvestment}
                  position={item.position}
                  company={item.company}
                  label="Investment Goals : "
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default FourthSection;
