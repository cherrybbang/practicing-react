import { useEffect } from "react";

function Effect() {
    useEffect(() => {
        console.log('all the time');
    })

    useEffect(() => {
        console.log('only once');
    }, [])

    const variable = 123;
    useEffect(() => {
        console.log(`on ${variable} update`)
    }, [variable])
}

export default Effect;