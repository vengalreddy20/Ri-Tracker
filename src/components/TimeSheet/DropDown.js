import React from 'react'
import styles from './dropdown.module.css'
function DropDown(props) {

    const onSelect = event => {
        props.selectItem(props.name, event.target.value);
    };


    return (
        <div>
            <div>{props.name}</div>
            <div>
                <select onChange={onSelect} id={styles.dropdown}>
                    <option>Select project</option>
                    {props.meals.map(meal => (
                        <option key={meal.id} value={meal.id}>
                            {meal.value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
    

export default DropDown
