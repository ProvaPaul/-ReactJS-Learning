import React from 'react';

const Demo = (props) => {
    return (
        <div>
            <h1>{props.name} from {props.country}</h1>
            <p>{props.children}</p>
        </div>
    );
};

export default Demo;