//import React, { useMemo } from "react";
//import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';


const TombDetails = ({ tomblist }) => {
    return (
        <div className = "tombs-list">
            <table >
                <thead>
                    {tomblist._id}
                </thead>
                <tbody>
                    {tomblist.current_lib}
                </tbody>
            </table>
        </div>
    )
}

export default TombDetails