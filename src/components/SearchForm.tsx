import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

interface Props {
  onSetShowModal: (showModal: boolean) => void;
}

const SearchForm = ({ onSetShowModal }: Props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  // const [localDate, setLocalDate] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [classificationName, setClassificationName] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const searchParams: any = {
      ...(keyword ? { keyword } : {}),
      ...(city ? { city } : {}),
      // ...(localDate ? { localDate } : {}),
      ...(stateCode ? { stateCode } : {}),
      ...(classificationName ? { classificationName } : {}),
    };
    onSetShowModal(false);

    console.log(searchParams);
    navigate(`/?${new URLSearchParams(searchParams)}`);
  };

  return (
    <div className="SearchForm">
      <form className="modal" onSubmit={handleSubmit}>
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
        {/* <label htmlFor="localDate">Date: </label>
        <input
          type="date"
          name="localDate"
          id="localDate"
          value={localDate}
          onChange={(e) => setLocalDate(e.target.value)}
        /> */}
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
        <button>
          <i className="fa-solid fa-ticket"> Search</i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

// if (keyword) {
//   searchParams.keyword = keyword;
// }
// if (city) {
//   searchParams.city = city;
// }
// if (dateTime) {
//   searchParams.dateTime = dateTime;
// }
// if (stateCode) {
//   searchParams.stateCode = stateCode;
// }
// if (classificationName) {
//   searchParams.classificationName = classificationName;
// }
