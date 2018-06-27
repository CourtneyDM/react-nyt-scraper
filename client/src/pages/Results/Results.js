import React from 'react';
import Section from '../../components/Section';
// import { Button } from '../../components/Form';


const Results = props => (
    <Section name='results'>
        <ul className='list-group'>{ props.children }</ul>
    </Section>
);
// );
// class Results extends Component {
//     render() {
//         return (
//             <Section name='results'>
//                 <h3>Results</h3>
//                 { props.children }
//                 <Button text='Save Article' />
//             </Section>
//         );
//     }
// }

export default Results;