import styles from './FilterButton.module.css';

function FilterButton(props){
    
    const fontColor = props.isDark ? 
        props.isActive ? "hsl(227, 75%, 14%)" : "hsl(200, 60%, 99%)" 
        : props.isActive ? "hsl(200, 60%, 99%)" : "hsl(227, 75%, 14%)";

    const bgColor = props.isDark ? 
        props.isActive ? "#C10007" : "hsl(226, 11%, 37%)"
        : props.isActive ? "#C10007" : "transparent";
    
    return ( 
        <button 
            onClick={props.onClick}  
            className={
                `${styles["Button-Style"]} 
                ${props.isActive ? 
                styles["Button-Style-Active"] : 
            ""}` }
            style={{
                color: fontColor,
                backgroundColor: bgColor,
            }}>
        {props.filterName}
        </button>
    )
}

export default FilterButton;