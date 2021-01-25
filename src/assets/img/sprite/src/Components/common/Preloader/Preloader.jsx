import React from 'react'
import preloader from '../../../assets/images/loader.svg'

function Preloader() {
    return (
        <div style={{width: 20, height: 20, backgroundColor: 'blue'}}>
            < img src={preloader} style={{width: '100%', height: '100%'}} />
        </div>
    )
}

export default Preloader
