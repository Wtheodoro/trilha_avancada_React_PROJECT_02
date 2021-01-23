import React from 'react'
import AsideUp from '../asideUp'
import AsideDown from '../asideDown'

function AsideContainer(props) {

    const { contatos, educacao } = props.data

    return  (
        <>
            <aside>
                <AsideUp contatos={contatos}/>
                <AsideDown educacao={educacao}/>
            </aside>
        </>
    )
}

export default AsideContainer