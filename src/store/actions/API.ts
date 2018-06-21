import axios from 'axios';
import * as actionTypes from './actions';

export const setApiData = ( data: any ) => {
    return {
        apiData: data,
        type: actionTypes.FETCH_API_DATA,
    }
}

export const refreshApiStatus = ( apiStatus: any ) => {
    return {
        apiStatus,
        type: actionTypes.REFRESH_API_STATUS,
    }
}

export const fetchApiData = ( apiUrl: string ) => {
    return (dispatch: any):void => {
        dispatch(refreshApiStatus('LOADING'));
        axios.get( apiUrl )
            .then( (response: any ) => {
                const formatResponseData = [];
                if ( apiUrl === 'https://swapi.co/api/people/' ) {
                    for ( let i = 0; i < 10; i++) {
                        formatResponseData.push(response.data.results[i]);
                    }
                } else if ( apiUrl === 'https://www.potterapi.com/v1/characters?key=$2a$10$RDOy0Oq7X37GAiofYSpmCucISSOTOnXGHtrdj0EtqnKKuAoMSi4te' ) {
                    for ( let i = 0; i < 10; i++ ) {
                        formatResponseData.push(response.data[i]);
                    }
                }
                dispatch(setApiData(formatResponseData));
                dispatch(refreshApiStatus('LOADED'));
            })
            .catch ( (error: any) => {
                dispatch(refreshApiStatus('ERROR'));
            });
    }
}

export const changeApi = () => {
    return {
        type: actionTypes.CHANGE_API,
    }
}

export const checkboxesCounter = ( counter: number ) => {
    return {
        selectedCharactersCounter: counter,
        type: actionTypes.SELECTED_CHARACTERS_COUNTER,
    }
}