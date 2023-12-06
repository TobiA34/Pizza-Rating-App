import React from 'react'
import PropTypes from 'prop-types'

function Card({children}) {
  return (
    <div className={`card`}>
      {children}
    </div>
  )

// Style conditions
// return (
//     <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff', color: reverse ? '#fff':}}>
//         {children}
//     </div>
// )
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card
