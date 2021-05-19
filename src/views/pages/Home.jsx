import React from 'react'
import img from '../../Assets/eu.jpeg'

import Image from '../../components/pictures/Image'
import Perfil from '../../components/Perfil'
export default  props =>(
    <div className = 'home'>
        <Image folder ={img} ></Image>
        <Perfil></Perfil>
    </div>
)
