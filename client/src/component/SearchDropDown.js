import React from 'react';
import { Link } from 'react-router-dom';
import '../css/searchDropdown.css'


export default function SearchDropdown(props){

    return(
        <div className="search-dropdown-main">
            <div className={props.searchItems.length > 10 ? 'search-dropdown-ul' : ''}>
            {
                props.searchItems.map((name,index)=>{
                    var searchedName = name.split("#")
                    return(
                        <Link className="search-link" to={`/Shop/${searchedName[0]}/Product/${searchedName[1]}`} onClick={props.handleCloseSearch}><div className="search-dropdown-li" key={index}>{searchedName[1]}</div></Link>
                    )
                })
            }
            </div>
        </div>

    )
}
