import ExtensionItem from "./ExtensionItem";
import data from "../data.json";
import { useState } from "react";

function GridItem(props){
    
    const [extensionItems, setExtensionItems] = useState(data); 

    function handleToggle(index) {
        const copyExtension = [...extensionItems];
        copyExtension[index].isActive = !copyExtension[index].isActive;
        setExtensionItems(copyExtension);
    }

    const filteredExtensions = extensionItems.filter((extension)=>{
        if (props.filterState == "All"){ return true };
        if (props.filterState == "Active"){ return extension.isActive};
        if (props.filterState == "Inactive") {return !extension.isActive};
    })

    return (
        filteredExtensions.map((extension, index)=>{
            return (
                <ExtensionItem 
                    key={index}
                    id={index}
                    {...extension}
                    onToggle = {()=> handleToggle(index)}
                />
            )
        })
    )
}

export default GridItem;
