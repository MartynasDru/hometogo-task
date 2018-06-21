import * as actionTypes from '../actions/actions';

const initialState = {
    activeApi: 'https://www.potterapi.com/v1/characters?key=$2a$10$RDOy0Oq7X37GAiofYSpmCucISSOTOnXGHtrdj0EtqnKKuAoMSi4te',
    apiData: [],
    apiStatus: 'IDLE',
    selectedCharactersCounter: 0,
    totalApiCheckboxes: 0,
    totalCheckedApiCheckboxes: 0,
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

const chooseActiveApi = ( state: any, action: any ) => {
    return {
        ...state,
        activeApi: action.activeApi,
    }
}

const countCheckboxes = ( state: any, action: any ) => {
    return {
        ...state,
        selectedCharactersCounter: action.selectedCharactersCounter,
    }
}

const checkedApisCntr = ( state: any, action: any ) => {
    return {
        ...state,
        totalCheckedApiCheckboxes: action.totalCheckedApiCheckboxes,
    }
}

const apisCounter = ( state: any, action: any ) => {
    return {
        ...state,
        totalApiCheckboxes: action.totalApiCheckboxes,
    }
}

const reducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_API_DATA: return getApiData( state, action );
        case actionTypes.REFRESH_API_STATUS: return refreshApiStat( state, action );
        case actionTypes.SELECTED_CHARACTERS_COUNTER: return countCheckboxes( state, action );
        case actionTypes.CHECKED_APIS_COUNTER: return checkedApisCntr( state, action ); 
        case actionTypes.APIS_COUNTER: return apisCounter( state, action );
        case actionTypes.CHOOSE_ACTIVE_API: return chooseActiveApi( state, action );
        default: return state;
    }
}

export default reducer;