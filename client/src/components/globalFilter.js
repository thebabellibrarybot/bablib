import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {


    return(
        <div>
            Search: {' '}
            <input value={filter || ''}
            onChange={e => setFilter(e.target.value)} />
        </div>
    )
}

export default GlobalFilter;

// NOTE thi is client side filtering and only works with data
/// loaded up to a few thousand rows. For larger databases look into
//// server side filtering *****