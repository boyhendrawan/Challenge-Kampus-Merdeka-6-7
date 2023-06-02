import React from 'react'

function input(props) {
  return (
    <input
    className={props.className}
    name={props.name}
    placeholder={props.placeholder}
    onChange={props.onChange}
    onBlur={props.onBlur}
    />
  )
}

export default input