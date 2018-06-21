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

export const checkboxesCounter = ( count: number ) => {
    return {
        selectedCharactersCounter: count,
        type: actionTypes.SELECTED_CHARACTERS_COUNTER,
    }
}

export const chooseApi = () => {
    const totalCheckedApiCheckboxes = document.querySelectorAll('.main__text-box input[type="checkbox"]:checked').length;
    const totalApiCheckboxes = document.querySelectorAll('.main__text-box input[type="checkbox"]').length;
    let activeApi; 
    if ( totalCheckedApiCheckboxes === totalApiCheckboxes ) {
        activeApi = 'https://swapi.co/api/people/';
    } else {
        activeApi = 'https://www.potterapi.com/v1/characters?key=$2a$10$RDOy0Oq7X37GAiofYSpmCucISSOTOnXGHtrdj0EtqnKKuAoMSi4te'
    }

    return {
        activeApi,
        type: actionTypes.CHOOSE_ACTIVE_API,
    }
}