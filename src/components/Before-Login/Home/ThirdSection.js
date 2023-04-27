import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../Firebase/Firebase";
function ThirdSection() {
  const [startupCount, setStartupCount] = useState(0);
  useEffect(() => {
    const database = ref(db, "startup/users/");
    onValue(database, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setStartupCount(0);
        return;
      } else {
        const newData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        let count = [];
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].status === true) {
            count.push(newData[i]);
            setStartupCount(count.length);
          }
        }
      }
    });
  }, []);
  const [investorCount, setInvestorCount] = useState(0);
  useEffect(() => {
    const database = ref(db, "investors/users/");
    onValue(database, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setInvestorCount(0);
        return;
      } else {
        const newData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        let count = [];
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].status === true) {
            count.push(newData[i]);
            setInvestorCount(count.length);
          }
        }
      }
    });
  }, []);
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bg-transparent m-4 countdata p-4 border border-white">
              <div className="card-body">
                <h3 className="card-title text-center text-light">
                  Start-Up Count:
                </h3>
                <h1 className="card-text text-center text-light">
                  {startupCount}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-transparent m-4 countdata p-4 border border-white">
              <div className="card-body">
                <h3 className="card-title text-center text-light">
                  Investors Count:
                </h3>
                <h1 className="card-text text-center text-light">
                  {investorCount}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThirdSection;
