import React from 'react'
import imgPhone from '../../Assets/smartphone.png'
import imgInsta from '../../Assets/instagram.png'
import '../../Assets/css/footer.css'

export default props => (
    <div>
        <footer>
            <img src={imgPhone} alt="FoneIcon" />
            <p>(84) 99999-2930</p>
            <img src={imgInsta} alt="instagramImage" />
            <a href="https://www.instagram.com/murilo_hd/">@murilo_hd</a>

        </footer>
    </div>
)