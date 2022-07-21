import React, { createContext, useContext, useState } from 'react';

const PersonContext = createContext();

const App = (data) => {
    const [person, setPerson] = useState(data);
    console.log("person data: ", person)

    return (<div className="App component">
        <PersonContext.Provider value={{ person, setPerson }}>
            <h1>Main App</h1>
            <SubComp1 />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = () => {
    //console.log(person)
    const { person, setPerson } = useContext(PersonContext)

    const handleChange = () => {
        setPerson({
            ...person,
            location: {
                city: "new york",
                postcode: "1125",
                state: "NY",
                street: "Some street"
            }
        })
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
        setPerson({
            ...person,
            name: {
                title: "Mr",
                first: "John",
                last: "Doe",
            }
        })
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