import * as actionTypes from '../actions/actions';

const initialState = {
    activeApi: 'https://www.potterapi.com/v1/characters?key=$2a$10$RDOy0Oq7X37GAiofYSpmCucISSOTOnXGHtrdj0EtqnKKuAoMSi4te',
    apiData: [],
    apiStatus: 'IDLE',
    selectedCharactersCounter: 0,
}

const getApiData = ( state: any, action: any ) => { 
    return { 
        ...state,
        apiData: action.apiData,
        apiStatus: action.apiStatus,
    };
}

const refreshApiStat = ( state: any, action: any ) => {
    return {
        ...state,
        apiStatus: action.apiStatus,
    }    
}

const apiToggle = ( state: any, action: any ) => {
    if ( !state.checkboxChecked ) {
        return {
            ...state,
            activeApi: 'https://swapi.co/api/people/',
            checkboxChecked: true,
        }
    }
    return {
        ...state,
        activeApi: 'https://www.potterapi.com/v1/characters?key=$2a$10$RDOy0Oq7X37GAiofYSpmCucISSOTOnXGHtrdj0EtqnKKuAoMSi4te',
        checkboxChecked: false,
    }
}

const countCheckboxes = ( state: any, action: any ) => {
    return {
        ...state,
        selectedCharactersCounter: action.selectedCharactersCounter,
    }
}

const reducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_API_DATA: return getApiData( state, action );
        case actionTypes.REFRESH_API_STATUS: return refreshApiStat( state, action );
        case actionTypes.CHANGE_API: return apiToggle( state, action );
        case actionTypes.SELECTED_CHARACTERS_COUNTER: return countCheckboxes( state, action );
        default: return state;
    }
}

export default reducer;