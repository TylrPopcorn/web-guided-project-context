import React, { createContext, useContext, useReducer } from 'react';

import { reducer, initialState } from "./reducer"
import { setName, setLocation, } from "./reducer"

import data from "./data"

const PersonContext = createContext();

const App = () => {
    const [person, dispatch] = useReducer(reducer, initialState);

    return (<div className="App component">
        <PersonContext.Provider value={{ person, dispatch }}>
            <h1>Main App</h1>
            <SubComp1 />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = () => {
    //console.log(person)
    const { person, dispatch } = useContext(PersonContext)

    const handleChange = () => {
        dispatch(setLocation({
            city: "new york",
            postcode: "1125",
            state: "NY",
            street: "Some street"
        }))
    }

    return (
        <div className="component">
            <h1>Sub comp1</h1>
            <h2>{person.name.title}{person.name.first}{person.name.last}</h2>
            <button onClick={handleChange}>Change Location</button>
            <SubComp2 />
        </div>
    )
}

const SubComp2 = () => {
    return (
        <div className="component">
            <h1>Sub comp2</h1>
            <SubComp3 person={person} setPerson={setPerson} />
        </div>
    )
}

const SubComp3 = () => {
    const { person, setPerson } = useContext(PersonContext)

    const handleClick = () => {
        dispatch(setName({
            name: {
                title: "Mr",
                first: "John",
                last: "Doe",
            }
        })
        )
    }


    return (
        <div className="component">
            <h1>Sub comp3</h1>
            <h2>{person.location.street}{person.location.city}{person.location.state}</h2>
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}


export default App;