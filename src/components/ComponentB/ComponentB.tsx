import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/API';

interface IComponentBProps { 
    onChangeApi: () => any;
}

const ComponentA: React.SFC<IComponentBProps> = (props) => {
    const handleCheckbox = () => {
        props.onChangeApi();
    }

    return (
        <input type="checkbox" onChange={handleCheckbox} />
    );
}

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onChangeApi: () => (dispatch(actionCreators.changeApi()))
    }
}

export default connect(null, mapDispatchToProps)(ComponentA);