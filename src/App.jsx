//import { useState } from 'react';
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import GridItem from "./components/GridItems";

function App() {

  const [filterButtonState, setFilterButtonState] = useState("All");

  return (
    <div className="Content-Wrapper">
      <Header />
      <div className="Title-And-Filter">
        <h1 className="w-md text-2xl">Extensions List</h1>
        <div className="Filter-Button-Container">
          <FilterButton 
            filterName="All" 
            isActive = {filterButtonState == "All"}
            onClick = {()=>setFilterButtonState("All")}
          />
          <FilterButton 
            filterName="Active" 
            isActive = {filterButtonState == "Active"}
            onClick = {()=>setFilterButtonState("Active")}
          />
          <FilterButton 
            filterName="Inactive" 
            isActive = {filterButtonState == "Inactive"}
            onClick = {()=>setFilterButtonState("Inactive")}
          />
        </div>
      </div>
      <div className="Grid-Container">
        <GridItem filterState={filterButtonState} />
      </div>
    </div>
  )
}


export default App;
