import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [classificationName, setClassificationName] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    //// navigation link/search results
  };

  const searchTerm = {
    keyword,
    city,
    startDateTime,
    endDateTime,
    stateCode,
    classificationName,
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label htmlFor="keyword">Keyword: </label>
      <input
        type="text"
        name="keyword"
        id="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <label htmlFor="city">City: </label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="startDateTime">Start Date: </label>
      <input
        type="datetime"
        name="startDateTime"
        id="startDateTime"
        value={startDateTime}
        onChange={(e) => setStartDateTime(e.target.value)}
      />
      <label htmlFor="endDateTime">End Date: </label>
      <input
        type="datetime"
        name="endDateTime"
        id="endDateTime"
        value={endDateTime}
        onChange={(e) => setEndDateTime(e.target.value)}
      />
      <label htmlFor="stateCode">State: </label>
      <input
        type="text"
        name="stateCode"
        id="stateCode"
        value={stateCode}
        onChange={(e) => setStateCode(e.target.value)}
      />
      <label htmlFor="classificationName">Genre: </label>
      <input
        type="text"
        name="classificationName"
        id="classificationName"
        value={classificationName}
        onChange={(e) => setClassificationName(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
