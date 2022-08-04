import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchTerms from "../models/SearchTerms";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [classificationName, setClassificationName] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    //  potential fix?
    // const endPoints = "";
    //   const searchTerms: SearchTerms = {
    //     keyword: keyword,
    //     city: city,
    //     dateTime: dateTime,
    //     stateCode: stateCode,
    //     classificationName: classificationName
    //   };
    // navigate(
    //   {searchTerms.keyword && endPoints=`${endPoints}` + `&keyword=` + `${searchTerms.keyword}`}
    // )
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
      <label htmlFor="dateTime">Date: </label>
      <input
        type="datetime"
        name="dateTime"
        id="dateTime"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
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
