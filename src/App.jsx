//import { useState } from 'react';
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import { useEffect, useState } from "react";
import GridItem from "./components/GridItems";

function App() {

  const [filterButtonState, setFilterButtonState] = useState("All");
  const [isDark, setIsDark] = useState(false);

  function toggleTheme(){
    setIsDark(!isDark);
  }

  useEffect(() => {
    Object.assign(document.body.style, {
      background: isDark ? "linear-gradient(180deg, #040918 0%, #091540 100%)" : "hsl(200, 60%, 99%)",
      margin: "0 auto",
      fontFamily: '"Noto Sans", sans-serif',
      transition: "3000ms ease-in",
    });
  }, [isDark]);

  return (
    <div className="Content-Wrapper">
      <Header 
        isDark={isDark}
        isToggled={toggleTheme}
      />
      <div className="Title-And-Filter">
        <h1 className="w-md text-2xl" style={{color: !isDark ? "hsl(227, 75%, 14%)" : "hsl(200, 60%, 99%)"}}>Extensions List</h1>
        <div className="Filter-Button-Container">
          <FilterButton 
            isDark={isDark}
            filterName="All" 
            isActive = {filterButtonState == "All"}
            onClick = {()=>setFilterButtonState("All")}
          />
          <FilterButton 
            isDark={isDark}
            filterName="Active" 
            isActive = {filterButtonState == "Active"}
            onClick = {()=>setFilterButtonState("Active")}
          />
          <FilterButton
            isDark={isDark} 
            filterName="Inactive" 
            isActive = {filterButtonState == "Inactive"}
            onClick = {()=>setFilterButtonState("Inactive")}
          />
        </div>
      </div>
      <div className="Grid-Container">
        <GridItem 
          filterState={filterButtonState} 
          isDark={isDark}
          />
      </div>
    </div>
  )
}


export default App;
