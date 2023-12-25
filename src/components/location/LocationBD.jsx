import { useEffect, useState } from "react";
import { dhakaCityArea } from "../area/Area";

const LocationBD = ({ setGetDistrict, setGetDivision }) => {
  const [divisions, setDvisions] = useState("");
  const [district, setDistrict] = useState("");
  const [upozilla, setUpozilla] = useState("");
  const [selectedDivision, setDivision] = useState("");
  const [areaDhaka, setAreaDhaka] = useState("");

  const baseUrl = "https://bdapi.p.rapidapi.com/v1.1/division";
  const header = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "8c732bdb84msh75566043882df76p191d65jsn12eebb418aaf",
    "X-RapidAPI-Host": "bdapi.p.rapidapi.com",
  };

  // DIVISION
  useEffect(() => {
    fetch(`https://bdapi.p.rapidapi.com/v1.1/divisions`, { headers: header })
      .then((res) => res.json())
      .then((data) => setDvisions(data));
  }, []);

  // DISTRICT
  useEffect(() => {
    fetch(`${baseUrl}/${selectedDivision}`, { headers: header })
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, [selectedDivision]);

  // UPOZILA
  useEffect(() => {
    fetch(`${baseUrl}/${selectedDivision}`, { headers: header })
      .then((res) => res.json())
      .then((data) => setUpozilla(data));
  }, [selectedDivision]);

  const handleDivision = (event) => {
    setDivision(event.target.value);
    setGetDivision(event.target.value);
  };

  const [selectedDistrict, setSelectedDistrict] = useState();
  const handleDistrict = (event) => {
    setSelectedDistrict(event.target.value);
    setGetDistrict(event.target.value);
  };

  const myUp = upozilla?.data?.filter(
    (up) => up?.district === selectedDistrict
  );

  const handleDhakaCityArea = (event) => {
    setAreaDhaka(event.target.valu);
  };

  const selectBtnStyle =
    "w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400";

  return (
    <div
      className={`grid grid-cols-1 ${
        selectedDistrict === "Dhaka" ? "lg:grid-cols-3" : "lg:grid-cols-2"
      } justify-center items-center gap-3 w-full`}
    >
      <select
        data-te-select-init
        value={selectedDivision}
        onChange={handleDivision}
        className={selectBtnStyle}
      >
        <option hidden>Select Divition</option>
        {divisions?.data?.map((item, i) => (
          <option key={i} value={item?._id}>
            {item?.division}
          </option>
        ))}
      </select>

      <select
        value={selectedDistrict}
        onChange={handleDistrict}
        data-te-select-init
        className={selectBtnStyle}
      >
        <option hidden>Select District</option>
        {district?.data?.map((item) => (
          <option key={item?.id} value={item?.district}>
            {item?.district}
          </option>
        ))}
      </select>
      

      {selectedDistrict === "Dhaka" && (
        <select
          value={areaDhaka}
          onChange={handleDhakaCityArea}
          data-te-select-init
          className={selectBtnStyle}
        >
          <option>Select Area</option>
          {dhakaCityArea?.map((area) => (
            <option key={area?.id} value={area?.name}>
              {area?.name}
            </option>
          ))}
        </select>
      )}

      {/* <div>
        {myUp?.map((item, i) => (
          <div key={i}>
            <select data-te-select-init className={selectBtnStyle}>
              <option hidden>Select Area</option>
              {item?.upazilla?.map((itm, i) => (
                <option key={i} value="1">
                  {itm}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default LocationBD;
