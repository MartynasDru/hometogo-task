import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/API';

interface IComponentBProps { 
    onChooseActiveApi: () => any;
}

const ComponentA: React.SFC<IComponentBProps> = (props) => {
    const handleCheckbox = () => {
        props.onChooseActiveApi();
    }

    return (
        <input type="checkbox" onChange={handleCheckbox} />
    );
}

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onChooseActiveApi: () => (dispatch(actionCreators.chooseApi())),
    }
}

export default connect(null, mapDispatchToProps)(ComponentA);