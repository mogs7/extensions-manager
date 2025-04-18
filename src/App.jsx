//import { useState } from 'react';
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import ExtensionItem from "./components/ExtensionItem";
import data from './data.json';
import { useState } from "react";

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
        {
          data.map((extension, index)=>{
            console.log(extension.logo);
            return (
              <ExtensionItem 
                key={index}
                name={extension.name}
                logo={extension.logo}
                desc={extension.description}
                state={extension.isActive}
              />
            )
          })
        }
      </div>
    </div>
  )
}


export default App;
