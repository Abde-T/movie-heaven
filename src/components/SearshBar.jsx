import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearshBar(props) {
    
    return (
        <>
        <input
            id="movie"
            placeholder="Search.."
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            ></input>
          <FontAwesomeIcon icon="play" className="search__icon" />
          
    </>
    );
}

export default SearshBar;