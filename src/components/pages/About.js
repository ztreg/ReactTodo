import React from 'react'

 function About() {
    return (
        <React.Fragment >
            <h1 style={aboutStyle}>About</h1>
            <p style={aboutStyle}>This is the ToDoList app v1.0.0 it is part
                 of a react crash course</p>
        </React.Fragment>
    )
}

const aboutStyle = {
    backgroundColor: 'white',
    padding: '10px'
}

export default About;
