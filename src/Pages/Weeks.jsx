import React, { useState, useRef, useEffect } from "react";
import ArrowUp from "/ArrowUp.svg";
import ArrowDown from "/arrow-down.svg";
const Weeks = () => {
  const [selected, setSelected] = useState("Week 1");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const allOptions = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const filteredOptions = allOptions.filter((opt) => opt !== selected);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="table-wrapper">
       <div className="top-filter"> 
        <div className="custom-dropdown" ref={dropdownRef}>
          <div className="selected" onClick={() => setIsOpen(!isOpen)}>
            {selected}
            <span className="arrow">
              <img src={isOpen ? ArrowUp : ArrowDown} alt="arrow" width={16} />
            </span>
          </div>

          {isOpen && (
            <ul className="dropdown-list">
              {[selected, ...filteredOptions].map((item, index) => (
                <li
                  key={index}
                  className={item === selected ? "selected-item" : ""}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
       </div>
      
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th></th>
              <th className="count-box">
                {" "}
                <button className="btn-borderblack">BAR</button>{" "}
              </th>
              <th colSpan={2}>
                <button className="btn-border">DXY</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">AUDUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">NZDUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">EURUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">GBPUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">USDJPY</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">USDCAD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">EURUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">GBPUSD</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">USDJPY</button>
              </th>
              <th colSpan={2}>
                <button className="btn-border">USDCAD</button>
              </th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
              <th>COUNT</th>
              <th>DNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <div className="color-black">1</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <div className="day-label">M</div>
              </td>
              <td>
                <div className="color-black">2</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <div className="day-label">O</div>
              </td>
              <td>
                <div className="color-black">3</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <div className="day-label">N</div>
              </td>
              <td>
                <div className="color-black">4</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="color-black">5</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="color-black">6</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="color-black">1</div>
              </td>

              <td>
                <div className="double-data">
                  <div className="red">5</div>
                  <div className="green">8</div>
                </div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weeks;
