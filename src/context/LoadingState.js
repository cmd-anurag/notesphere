import { useState } from "react";
import LoadingContext from './LoadingContext';

const LoadingState = (props) => {
    const [loading, setLoading] = useState(false);
    return (
    <LoadingContext.Provider value={{loading, setLoading}}>
        {props.children}
    </LoadingContext.Provider>
    )
}

export default LoadingState