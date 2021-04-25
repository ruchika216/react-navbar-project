import React, { Component } from 'react'
import ActiveThumbnail from './ActiveThumbnail';
import ThumbnailGrid from './ThumbnailGrid';
import axios from 'axios';

export default class Gallary extends Component {

    componentDidMount()

    render() {
        return (
            <div style={galleryStyles}>
                {/* Left Side  */}
               <div style={{flex: 1 }}>
                    <ActiveThumbnail />
                    <ThumbnailGrid />
               </div>
                {/* Rignt Side */}

               <div style={{flex: 1 }}>
                Right
               </div>
            </div>
        )
    }
}

const galleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex',


}
