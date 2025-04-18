import ExtensionItem from "./ExtensionItem";
import data from "../data.json";

function GridItem(props){
    return (
        data.map((extension, index)=>{
            console.log(props.filterState);
            
            if (props.filterState == "All"){
                return (
                    <ExtensionItem 
                        key={index}
                        {...extension}
                    />
                )
            } else if (props.filterState == "Active" && extension.isActive){
                return (
                    <ExtensionItem 
                        key={index}
                        {...extension}
                    />
                )
            } else if (props.filterState == "Inactive" && !extension.isActive){
                return (
                    <ExtensionItem 
                        key={index}
                        {...extension}
                    />
                )
            }
        })
    )
}

export default GridItem;
