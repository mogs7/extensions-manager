import styles from './FilterButton.module.css';

function FilterButton(props){

    return (
        <button onClick={props.onClick} className={`${styles["Button-Style"]} ${props.isActive ? styles["Button-Style-Active"] : ""}`}>{props.filterName}</button>
    )
}

export default FilterButton;