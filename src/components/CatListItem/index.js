import React from 'react'

export default function CatListItem(props) {
    return (
       <li>{props.name||"this cat"} is a great cat! <button onClick={()=>props.catDelClickHandler(props.id)}>delete!</button></li>
    )
}
