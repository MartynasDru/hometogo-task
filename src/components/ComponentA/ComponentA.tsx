import * as React from 'react';
import './ComponentA.css';

import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/API';

interface IComponentAProps { 
    onFetchApiData: ( apiUrl: string ) => any;
    activeApi: string;
}

const ComponentA: React.SFC<IComponentAProps> = (props) => {
    const handleClick = () => {
        props.onFetchApiData( props.activeApi );
    }
    return (
        <button className="button-fetch" onClick={handleClick}>Let`s see!</button>
    );
}

const mapStateToProps = ( state: any ) => ({
    activeApi: state.api.activeApi,
  });

const mapDispatchToProps = ( dispatch: any) => {
    return {
        onFetchApiData: ( apiUrl: string ) => (dispatch(actionCreators.fetchApiData( apiUrl )))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);