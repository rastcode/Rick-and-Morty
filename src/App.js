import { useEffect, useState } from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Cards from "./components/Cards";
import SearchBtn from "./components/SearchBtn";

function App() {
  // list of charachters
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  let { info, results } = users;
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
    )
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, [pageNumber, search]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchHandel = () => {
    setSearch(inputValue);
  };

  return (
    <div className="main">
      <Search inputValue={inputValue} handleChange={handleChange} />
      <SearchBtn searchHandel={searchHandel} />
      <Pagination pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
      <Cards results={results} />
    </div>
  );
}

export default App;
