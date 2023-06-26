import "./Home.css";
import Header from "../Header/Header";
import Search from "../SearchBar/SearchBar";
import "../Trendings/Trendings.css";
import Recommend from "../Recomend/Recommend";
import { useState } from "react";
import data from "../../../data.json";
function Home({ search, setSearch, enterSite, setEnterSite }) {
  const [filterMovie, setfilterMovie] = useState(data);
  const [filterList, setFilterList] = useState(data);
  const [dataObj, setDataObj] = useState(data);
  console.log(setSearch);
  return (
    <div className=" header-right">
      <Header
        filterMovie={filterMovie}
        setfilterMovie={setfilterMovie}
        filterList={filterList}
        setFilterList={setFilterList}
        dataObj={dataObj}
        enterSite={enterSite}
        setEnterSite={setEnterSite}
      />
      <div className="rightSide">
        <Search search={search} setSearch={setSearch} />
        <Recommend
          search={search}
          setSearch={setSearch}
          filterList={filterList}
          setFilterList={setFilterList}
          setDataObj={setDataObj}
        />
      </div>
    </div>
  );
}
export default Home;
