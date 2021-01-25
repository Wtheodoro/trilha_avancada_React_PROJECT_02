import React, { useState } from 'react'
import EachContact from '../../eachContact'

import Button from '../../button'

function AsideUp(props) {

    const infos = props.contatos

    const [contact, setContact] = useState(false)

    const showContatcs = () => {
        setContact(!contact)
    }

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>
                {
                    contact 
                    ? <div onClick={showContatcs}><Button name={"Esconder Contatos"} /></div>
                    : <div onClick={showContatcs}><Button name={"Mostrar Contatos"} /></div>
                }
                
                

                {
                    contact &&
                    infos.map(i => (
                        <EachContact contact={i} key={i.id}/>
                    ))
                }

            </div>
        </>
    )
}

export default AsideUp