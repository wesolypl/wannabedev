import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

const Icon = ({ src, ...props }) => (
  <div>
    <SVG src={src} />
  </div>
)

export default Icon
