import React from 'react'
import Exp from '../exp'

function ExpContainer(props) {

    const { experiencia } = props.data

    return (
        <div className="experience">
        <h2>Experiência Profissional</h2>

        {experiencia.map(i => (
            <Exp info={i} key={i.id}/>
        ))}
        
        </div>
    )
}

export default ExpContainer