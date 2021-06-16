import React from 'react'
import './Form.css'


const Color = (color, active, onClick) =>{
    return(
        // <ul className="color-select-list">
        //     <li><button type="button">색상1</button></li>
        //     <li><button type="button">색상2</button></li>
        //     <li><button type="button">색상3</button></li>
        //     <li><button type="button">색상4</button></li>
        // </ul>
        <li><button type="button" className={`btn-color ${color.active && 'active'}`} style={{backgroundColor:color.color}} onClick={color.onClick}>색상</button></li>
    )
}

const Palette = ({colors, selected, onSelect}) => {
  
    const colorList = colors.map(
        (color) => (<Color
        color = {color}
        active = {selected === color}
        onClick={()=> onSelect(color)} 
        key={color}
        />)
    );
    return (
        <ul className="color-select-list">
            {colorList}
        </ul>
    )
}

export default Palette;
