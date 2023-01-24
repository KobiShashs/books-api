import { useEffect, useState } from "react";
import "./History.css";
import store from "../../../Redux/Store";
import { clearedAllResults } from "../../../Redux/SearchResultAppState";

function History(): JSX.Element {
    const [results, setResults] = useState<string[]>(store.getState().resultsReducer.results);


    useEffect(() => {
        return store.subscribe(()=>setResults(store.getState().resultsReducer.results));
    },[]);

    const clear = () => {
        // setResults([]);
        store.dispatch(clearedAllResults());
    }
    return (
        <div className="History">
            <h1>Search Result History</h1>
            <button onClick={clear}>Clear All</button>
            <ol>
                {results.map((str, idx) => <li key={"str" + idx}>{str}</li>)}
            </ol>
        </div>
    );
}

export default History;
