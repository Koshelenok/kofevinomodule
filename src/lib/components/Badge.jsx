import React from 'react';

const Badge = ({value}) => {
    return (
        <div className={`badge ${!value ? 'badge--none' :''} `}>
            <h4 className="heavy">{value ?? 0}</h4>
        </div>
    )
}
export default Badge;