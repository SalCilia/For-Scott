import React, { useState } from 'react';

function Search(props) {
    return (
        <>
            <label for="select-breed">Select Breed</label>
            <select id="select-breed" name='breeds' onChange={e=>props.setBreed(e.target.value)}>
                <option value="">Random</option>
                {props.breedsList && props.breedsList.map(breed => {
                    return (
                        <option value={breed} key={breed}>{breed}</option>
                    )
                })}
            </select>
        </>
    )
}







export default Search