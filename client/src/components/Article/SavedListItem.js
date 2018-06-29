import React from 'react';

export const SavedListItem = props => (
    <React.Fragment>
        <li className='list-group-item list-item'>
            <h5>{ props.title }</h5>
            <span>Link to Article:{ " " }
                <a href={ props.url } target='_blank'>{ props.url }</a>
            </span>

            <p>Date Published: { props.date }</p>
        </li>
    </React.Fragment>
);