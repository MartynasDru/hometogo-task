import * as actionTypes from '../actions/actions';

const initialState = {
    componentACounter: 1,
    componentBCounter: 1,
    componentCCounter: 1,
    componentDCounter: 1,
}

const addComponent = ( state: any, action: any ) => {
    if ( action.componentType === 'A' ) {
        return {
            ...state,
            componentACounter: state.componentACounter+1,
        }
    } else if ( action.componentType === 'B' ) {
        return {
            ...state,
            componentBCounter: state.componentBCounter+1,
        }
    } else if ( action.componentType === 'C' ) {
        return {
            ...state,
            componentCCounter: state.componentCCounter+1,
        }
    } else if ( action.componentType === 'D' ) {
        return {
            ...state,
            componentDCounter: state.componentDCounter+1,
        }
    }
    return null;
}

const reducer = ( state = initialState, action: any ) => {
    switch(action.type) {
        case actionTypes.ADD_COMPONENT: return addComponent( state, action );
        default: return state;
    }
}

export default reducer;