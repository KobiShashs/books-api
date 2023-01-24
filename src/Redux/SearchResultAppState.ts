
// Step 1 - Define your App State
export class SearchResultsAppState {
    public results: string[] = [];
}


//Step 2 - Declare possible Actions
export enum ActionType {
    ADDED_SEARCH_RESULT = "ADDED_SEARCH_RESULT",
    CLEARED_ALL_RESULTS = "CLEARED_ALL_RESULTS"
}

//Step 3 - Set Payload within the Action
export interface ResultAction {
    type: ActionType;
    payload?: any;
}

// Step 4 - Define Creator Functions

export function addedSearchResult(str: string): ResultAction {
    return {
        type: ActionType.ADDED_SEARCH_RESULT,
        payload: str
    }
}

export function clearedAllResults(): ResultAction {
    return {
        type: ActionType.CLEARED_ALL_RESULTS,
        payload: {}
    }
}

// Step 5 - Create Reducer

export function resultsReducer(resultsAppSate: SearchResultsAppState = new SearchResultsAppState(), resultAction: ResultAction): SearchResultsAppState {
    const currentState = { ...resultsAppSate };
    switch (resultAction.type) {
        case ActionType.ADDED_SEARCH_RESULT: {
            const newResult = resultAction.payload;
            currentState.results.push(newResult);
            break;
        }
        case ActionType.CLEARED_ALL_RESULTS: {
            currentState.results = [];
            break;
        }
    }

    return currentState;
}