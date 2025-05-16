import React, { useState, useRef, useEffect } from "react";
import ArrowDown from "/arrow-down.svg";
import ArrowUp from "/ArrowUp.svg"; 
import InfoIcon from "/infoicon.svg";
import { Container } from "react-bootstrap";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
    <>
      <div className="p-5">
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
        <div className="data-accordion">
          {/* Accordion Item 1 */}
          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
          >
            <div className="accordion-title" onClick={() => toggleAccordion(0)}>
              <div className="left-heading">
                <img src={InfoIcon} alt="arrow" />
                Daily Data
              </div>
              <img
                src={ArrowDown}
                alt="arrow"
                className={`arrow-img ${activeIndex === 0 ? "rotate" : ""}`}
              />
            </div>
            <div className="accordion-content">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th className="color-red">COUNT</th>
                    <th className="color-black">HOD</th>
                    <th className="color-black">HOW</th>
                    <th className="color-black">BAR</th>
                    <th className="color-black">Low</th>
                    <th className="color-black">LOD</th>
                    <th className="color-green">COUNT</th>
                    <th className="color-black">DATE</th>
                    <th className="color-black">TIME</th>
                    <th className="color-black">0</th>
                    <th className="color-black">H</th>
                    <th className="color-black">L</th>
                    <th className="color-black">C</th>
                    <th className="color-black">HL</th>
                    <th className="color-black">OC</th>
                    <th className="color-green">GREEN</th>
                    <th className="color-pink">PINK</th>
                    <th className="color-gray">GRAY</th>
                    <th className="color-yellow">YELLOW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="red">1</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-yellow-box">gray</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">2</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOD</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOW</div>
                    </td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-gray-box">gray</div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">3</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td>
                      <div className="btn-status btn-green-box">LOW</div>{" "}
                    </td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-pink-box">pink</div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">4</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td>
                      <div className="btn-status btn-green-box">green</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">5</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
          >
            <div className="accordion-title" onClick={() => toggleAccordion(1)}>
             <div className="left-heading">
                <img src={InfoIcon} alt="arrow" />
               H4 Data
              </div>
              <img
                src={ArrowDown}
                alt="arrow"
                className={`arrow-img ${activeIndex === 0 ? "rotate" : ""}`}
              />
            </div>
            <div className="accordion-content">
                <table className="custom-table">
                <thead>
                  <tr>
                    <th>COUNT</th>
                    <th className="color-black">HOD</th>
                    <th className="color-black">HOW</th>
                    <th className="color-black">BAR</th>
                    <th className="color-black">Low</th>
                    <th className="color-black">LOD</th>
                    <th className="color-green">COUNT</th>
                    <th className="color-black">DATE</th>
                    <th className="color-black">TIME</th>
                    <th className="color-black">0</th>
                    <th className="color-black">H</th>
                    <th className="color-black">L</th>
                    <th className="color-black">C</th>
                    <th className="color-black">HL</th>
                    <th className="color-black">OC</th>
                    <th className="color-green">GREEN</th>
                    <th className="color-pink">PINK</th>
                    <th className="color-gray">GRAY</th>
                    <th className="color-yellow">YELLOW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="red">1</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-yellow-box">gray</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">2</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOD</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOW</div>
                    </td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-gray-box">gray</div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">3</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td>
                      <div className="btn-status btn-green-box">LOW</div>{" "}
                    </td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-pink-box">pink</div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">4</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td>
                      <div className="btn-status btn-green-box">green</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">1</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                    <tr>
                    <td>
                      <div className="red">5</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-yellow-box">gray</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">6</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOD</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOW</div>
                    </td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-gray-box">gray</div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">7</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td>
                      <div className="btn-status btn-green-box">LOW</div>{" "}
                    </td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-pink-box">pink</div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">8</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td>
                      <div className="btn-status btn-green-box">green</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">9</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                    <tr>
                    <td>
                      <div className="red">10</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-yellow-box">gray</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">11</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOD</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOW</div>
                    </td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-gray-box">gray</div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">12</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td>
                      <div className="btn-status btn-green-box">LOW</div>{" "}
                    </td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-pink-box">pink</div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">13</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td>
                      <div className="btn-status btn-green-box">green</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">14</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                    <tr>
                    <td>
                      <div className="red">15</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-yellow-box">gray</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">16</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOD</div>
                    </td>
                    <td>
                      <div className="btn-status btn-red-box">HOW</div>
                    </td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-gray-box">gray</div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">17</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td>
                      <div className="btn-status btn-green-box">LOW</div>{" "}
                    </td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td>
                      <div className="btn-status btn-pink-box">pink</div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">18</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td>
                      <div className="btn-status btn-green-box">green</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="red">19</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="color-black">1</td>
                    <td></td>
                    <td>-</td>
                    <td className="color-green">4</td>
                    <td>2025.03.24</td>
                    <td>00:00</td>
                    <td>1.2896</td>
                    <td>1.29743</td>
                    <td>1.28876</td>
                    <td>1.29225 </td>
                    <td>87</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
