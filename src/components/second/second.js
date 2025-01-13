import { useEffect, useState } from 'react';
import './second.css';

//useEffect listens for changes in the components' life cycle and runs the function when the life cycle changes
//useEffect takes a function as a parameter and an array of dependencies as a second parameter that specifies when to run the function
//useEffect returns a cleanup function that is called when the component is unmounted


function Seconds({ minutes, setMinutesHandler }) {
    const [sec, setSec] = useState(); //useState only initializes the state once at the beginning

    //useEffect is used to perform specific action when the component is rendered
    //useEffect takes a function as a parameter and an array of dependencies as a second parameter that specifies when to run the function

    useEffect(() => {
        setSec(minutes * 60)
    }, [minutes]);


    useEffect(() => {
        if (sec === 0)
            setMinutesHandler(0);//we set minutes to 0 when sec is 0 to remove the seconds component from DOM
    }, [sec,setMinutesHandler]);


    useEffect(() => {
        const interval = setInterval(() => {
            setSec((prev) => prev - 1);
        }, 1000);
        return () => { clearInterval(interval) };//clear the interval when the component is unmounted(removed from DOM)
    }, []); //when the dependencies array is empty, the effect runs only once at mounting the component



    return (

        <h3>{sec} Seconds</h3>
    );
}

export default Seconds;