import React from 'react';
import { Button } from '../../components/Form';

export const ResultListItem = props => (
    <li className='list-group-item'>
        <h5>{ props.headline }</h5>
        <a href={ props.url }>Go to Article</a>
        <p>Published: { props.date }</p>
        <Button text='Save Article' />
    </li>
);