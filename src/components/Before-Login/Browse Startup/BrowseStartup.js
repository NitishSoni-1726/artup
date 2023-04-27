import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import StartupDatabase from "../Database/StartupDatabase";
import { ref, onValue } from "firebase/database";
function BrowseStartup() {
  const alldata = document.getElementById("browse-alldata");
  const fundeddata = document.getElementById("browse-fundeddata");
  const trendingdatabase = document.getElementById("browse-trending");
  const [input, setInput] = useState("");
  function search(e) {
    e.preventDefault();
    const searchinput = document
      .getElementById("browse-searchinput")
      .value.toLowerCase();
    if (searchinput === "") {
      setInput("");
    } else {
      setInput(searchinput);
    }
  }
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
        setData(newData);
      }
    });
  }, []);
  let trendingarray = [];
  const trending = trendingarray.concat(data);
  const sorted = trending.sort((a, b) => {
    return b.likes - a.likes;
  });
  function checkboxclick() {
    const radiobutton = document.querySelectorAll(".browse");
    if (radiobutton[3].checked === true) {
      alldata.classList.add("d-none");
      fundeddata.classList.remove("d-none");
      trendingdatabase.classList.add("d-none");
      document.searchtext.reset();
      setInput("");
    }
    if (radiobutton[0].checked === true) {
      alldata.classList.remove("d-none");
      fundeddata.classList.add("d-none");
      trendingdatabase.classList.add("d-none");
      document.searchtext.reset();
      setInput("");
    }
    if (radiobutton[2].checked === true) {
      alldata.classList.add("d-none");
      fundeddata.classList.add("d-none");
      trendingdatabase.classList.remove("d-none");
      document.searchtext.reset();
      setInput("");
    }
  }
  function displayname(e) {
    const display = document.getElementById("browse-display");
    if (e.target.checked === true) {
      display.innerText = e.target.value;
    }
  }
  return (
    <>
      <div className="browse-data">
        <div
          className="radiobuttons bg-dark
         d-flex flex-column justify-content-center align-items-center"
        >
          <div className="mt-4 w-50">
            <div className="d-flex w-100">
              <form className="d-flex w-100" name="searchtext">
                <input
                  className="bg-transparent text-light searchinput w-100 border rounded p-2"
                  type="text"
                  id="browse-searchinput"
                  placeholder="Type To Search..."
                  aria-label="Search"
                  onKeyUp={search}
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
        <div className="dropdown d-flex align-items-end justify-content-end">
          <button
            className="btn btn-secondary dropdown-toggle text-light bg-dark m-5"
            type="button"
            id="browse-display"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul className="dropdown-menu filterdata bg-dark p-4 w-25">
            <li>
              <input
                type="radio"
                className="btn-check browse"
                name="btnradio"
                id="btnradio0"
                value="All"
                onClick={checkboxclick}
                onChange={displayname}
              />
              <label
                className="btn btn-outline-success browseselect w-100"
                htmlFor="btnradio0"
              >
                All
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="btn-check browse"
                name="btnradio"
                id="btnradio1"
                value="Featured"
                onClick={checkboxclick}
                onChange={displayname}
              />
              <label
                className="btn btn-outline-success browseselect w-100"
                htmlFor="btnradio1"
              >
                Featured
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="btn-check browse"
                name="btnradio"
                id="btnradio2"
                onClick={checkboxclick}
                onChange={displayname}
                value="Trending"
              />
              <label
                className="btn btn-outline-success browseselect w-100"
                htmlFor="btnradio2"
              >
                Trending
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="btn-check browse"
                name="btnradio"
                id="btnradio3"
                onClick={checkboxclick}
                onChange={displayname}
                value="Recently Funded"
              />
              <label
                className="btn btn-outline-success browseselect w-100"
                htmlFor="btnradio3"
              >
                Recently Funded
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="btn-check browse"
                name="btnradio"
                id="btnradio4"
                onClick={checkboxclick}
                onChange={displayname}
                value="New and Networthy"
              />
              <label
                className="btn btn-outline-success browseselect w-100"
                htmlFor="btnradio4"
              >
                New and Networthy
              </label>
            </li>
          </ul>
        </div>
        <div
          className="browsestartup-data d-flex flex-wrap justify-content-center"
          id="browse-alldata"
        >
          {data.map((item, index) => {
            if (input === "") {
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
            } else if (
              item.startupname.toLowerCase().includes(input) === true ||
              item.industry.toLowerCase().includes(input) === true
            ) {
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
        <div
          className="browsestartup-data d-flex flex-wrap justify-content-center d-none"
          id="browse-fundeddata"
        >
          {data.map((item, index) => {
            if (item.funding === false) {
              return;
            } else if (item.funding === true) {
              if (input === "") {
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
              } else if (
                item.startupname.toLowerCase().includes(input) === true ||
                item.industry.toLowerCase().includes(input) === true
              ) {
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
            }
          })}
        </div>
        <div
          className="browsestartup-data d-flex flex-wrap justify-content-center d-none"
          id="browse-trending"
        >
          {sorted.map((item, index) => {
            if (input === "") {
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
            } else if (
              item.startupname.toLowerCase().includes(input) === true ||
              item.industry.toLowerCase().includes(input) === true
            ) {
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

export default BrowseStartup;
