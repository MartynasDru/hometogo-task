import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/API';

interface IComponentBProps { 
    onChooseActiveApi: () => any;
}

const ComponentB: React.SFC<IComponentBProps> = (props) => {
    const handleChooseActiveApi = () => {
        props.onChooseActiveApi();
    }

    return (
        <input type="checkbox" onChange={handleChooseActiveApi} />
    );
}

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onChooseActiveApi: () => (dispatch(actionCreators.chooseApi())),
    }
}

export default connect(null, mapDispatchToProps)(ComponentB);