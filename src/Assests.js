import React, {createContext, useState} from 'react';
import './assests.css'
export const AccordionContext = createContext({
    active: 0,
    setActive: () => {}
});

const Assests = (props) => {

    const [active, setActive] = useState(0);

    return (
        <AccordionContext.Provider
            value={{
                active, setActive
            }}
        >
        <div className="accordion-wrapper">
            
                {props.children}
            
        </div>
        </AccordionContext.Provider>
    )
}

export default Assests; 