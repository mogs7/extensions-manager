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
        // console.log("index: "+index);
        const copyExtension = [...extensionItems];
        copyExtension[index].isActive = !copyExtension[index].isActive;
        setExtensionItems(copyExtension);
    }

    function deleteExtension(id){
        // console.log("index is: " + index);
        // console.log("current extensionItems list:  "+ extensionItems);
        setExtensionItems(extensionItems => {
            // console.log(extensionItems);
            const filteredList = extensionItems.filter((extension) => {
                return (extension.id !== id)
            })

            const setExtension = filteredList.map((item,index)=> {
                return {
                    ...item,
                    id: index
                }  
            })

            return setExtension;
        })
    }

    const filteredExtensions = extensionItems.filter((extension)=>{
        if (props.filterState == "All"){ return true };
        if (props.filterState == "Active"){ return extension.isActive};
        if (props.filterState == "Inactive") {return !extension.isActive};
    })

    
    // console.log("extensionItems: ", extensionItems);
    // console.log("filteredItems: " ,filteredExtensions);
    

    return (
        filteredExtensions.map((extension, index)=>{
            // console.log(extension);
            return (
                <ExtensionItem 
                    key={index}
                    id={index}
                    {...extension}
                    onToggle = {()=> handleToggle(extension.id)}
                    isRemoved = {()=> deleteExtension(extension.id)}
                    isDark = {props.isDark}
                />
            )
        })
    )
}

export default GridItem;
