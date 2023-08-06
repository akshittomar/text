import React from 'react'

export default function Alert(props) {
  return (
    <>
         <div className="alert alert-info" role="alert"> { props.alert }</div>
    </>
  )
}
