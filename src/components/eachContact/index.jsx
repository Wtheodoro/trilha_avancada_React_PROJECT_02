import React from 'react'

function EachContact(props) {

    const { tipo, contato } = props.contact
    return (
        <>
            <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>{tipo}</h4>
                <p>{contato}</p>
              </div>
            </li>
          </div>
        </>
    )
}

export default EachContact