import { useState, useEffect } from 'react';
import data from '../data.json'

function HomePage() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        setdata(dataJson);
    }, []);

    return (
       <main>
        <h1>Homepage</h1>
        <ul>
            {data.map((item) => (
               <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <img src="{item.image" alt="{item.title" />
               </li> 
            ))}
        </ul>
       </main> 
    );
};

export default Home;