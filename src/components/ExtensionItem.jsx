import { useState } from 'react';
import { Switch } from '@headlessui/react';
import extenstionItemStyles from './ExtensionItem.module.css';

function ExtensionItem(props){
    const [isActive, setIsActive] = useState(props.isActive);

    return (
        <div className={extenstionItemStyles["Extension-Container"]}>
            <div style={{display: "flex", gap: "10px"}}>
                <img className={extenstionItemStyles["Extension-Logo"]} src={props.logo} alt="" />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button className={extenstionItemStyles["Extension-Remove-Button"]}>Remove</button>
                <Switch
                checked={isActive}
                onChange={setIsActive}
                className={`${
                    isActive ? 'bg-red-700' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer duration-200`}
                >
                <span className="sr-only">Toggle Button</span>
                <span
                    className={`${
                        isActive ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
                </Switch>
            </div>
        </div>
        
    )
}

export default ExtensionItem;
