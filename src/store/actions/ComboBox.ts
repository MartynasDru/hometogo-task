import * as actionTypes from './actions';

export const addComponent = ( componentType: string ) => {
    return {
        componentType,
        type: actionTypes.ADD_COMPONENT,
    }
}