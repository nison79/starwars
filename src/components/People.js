import React from 'react'
import Person from './Person'
import { useQuery } from 'react-query'


const fetchPeople = async () => {
    const res = await  fetch('http://swapi.dev/api/people');
    return res.json();
}

function People() {
    const { data , status } = useQuery('people', fetchPeople);
        
    return (
        <div className = 'planets'>
            <h2>People</h2>
            

            {status === 'loading' && (<div>Loading People...</div>)}
            {status === 'error' && (<div>Error fetching data</div>)}
            {status === 'success' && (
                <div>
                    { data.results.map(person => <Person person={person} key = {person.name} />)}
                </div>
                )}
        </div>
    )
}

export default People;
