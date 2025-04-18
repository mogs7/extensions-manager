import ExtensionItem from "./ExtensionItem";
import data from "../data.json";
import { useState } from "react";

function GridItem(props){
    
    const [extensionItems, setExtensionItems] = useState(
        data.map((item,index) => ({
            ...item,
            id: index
            }
        ))
    ); 

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

    
    console.log(extensionItems);
    

    return (
        filteredExtensions.map((extension, index)=>{
            // console.log(extension);
            return (
                <ExtensionItem 
                    key={index}
                    {...extension}
                    onToggle = {()=> handleToggle(extension.id)}
                />
            )
        })
    )
}

export default GridItem;
