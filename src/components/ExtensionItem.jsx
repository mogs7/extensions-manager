import { Switch } from '@headlessui/react';
import extenstionItemStyles from './ExtensionItem.module.css';

function ExtensionItem(props){
    
    return (
        <div style={props.isDark ? {
            backgroundColor: "hsl(225, 23%, 24%)", 
            boxShadow: "none",
            borderWidth: "1px",
            borderColor: "hsl(226, 11%, 37%)"} 
            : {
                backgroundColor: "white", 
                boxShadow: "0 0 7px hsl(217, 61%, 90%)"
            }}
            className={extenstionItemStyles["Extension-Container"]}>
            <div style={{display: "flex", gap: "10px"}}>
                <img className={extenstionItemStyles["Extension-Logo"]} src={props.logo} alt="" />
                <div>
                    <h2 style={{color: props.isDark ? "hsl(200, 60%, 99%)" : ""}}>{props.name}</h2>
                    <p style={{color: props.isDark ? "hsl(0, 0%, 78%)" : ""}}>{props.description}</p>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button className={props.isDark ? extenstionItemStyles["Extension-Remove-Button"]+" "+extenstionItemStyles["Extension-Remove-Button-override"] : extenstionItemStyles["Extension-Remove-Button"]} onClick={props.isRemoved}>Remove</button>
                <Switch
                    checked={props.isActive}
                    onChange={props.onToggle}
                    className={`${
                        props.isActive ? 'bg-red-700' : 'bg-gray-400'
                    } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer duration-200`}
                    >
                    <span className="sr-only">Toggle Button</span>
                    <span
                        className={`${
                            props.isActive ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
            </div>
        </div>
        
    )
}

export default ExtensionItem;
