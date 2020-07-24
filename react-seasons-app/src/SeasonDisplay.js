import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
    summer : {
        key  : 'summer',
        text : "Let's hit the beach",
        icon : "sun"
    },
    winter : {
        key : 'winter',
        text : "Brr... It's chilly",
        icon : "snowflake"
    }
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9)
        return latitude > 0 ? SeasonConfig.summer : SeasonConfig.winter;
    else 
        return latitude > 0 ? SeasonConfig.winter : SeasonConfig.summer;
}

const SeasonalDisplay = (props) => {
    const seasonConfig = getSeason(props.latitude, new Date().getMonth());

    return (
        <div className={`season-display ${seasonConfig.key}`}>
            <i className={`${seasonConfig.icon} massive icon icon-left`} />
            <h1>{seasonConfig.text}</h1>
            <i className={`${seasonConfig.icon} massive icon icon-right`} />
        </div>
    );
}

export default SeasonalDisplay;