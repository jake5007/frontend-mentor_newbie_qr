import React from 'react'
import PropTypes from 'prop-types'

function Container({imgSrc, title, description}) {
  return (
    <div className='container'>
        <img src={imgSrc} alt="QR_image" />
        <span className='title'>{title}</span>
        <span className='desc'>{description}</span>
    </div>
  )
}

Container.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Container;

