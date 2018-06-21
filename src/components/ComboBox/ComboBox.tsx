import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/ComboBox';

interface IComboBoxProps { 
    onAddComponent: ( componentType: string ) => any;
}

const ComboBox: React.SFC<IComboBoxProps> = (props) => {
    const handleAddComponent = () => {
        const componentHTML = (document.querySelector(".comboBox")) as HTMLSelectElement;
        const componentIndex = componentHTML.selectedIndex;
        const component = componentHTML.options[componentIndex];
        const componentType = component.value;
        if ( componentType !== 'SELECT' ) {
            props.onAddComponent( componentType );
        }
    }
    return (
        <div>
            <select className="comboBox" style={{
                borderRadius: '50px',
                fontSize: '16px',
                height: '30px',
                margin: '0 10px',
            }}>
                <option value="SELECT">Select component</option>
                <option value="A">Component A</option>
                <option value="B">Component B</option>
                <option value="C">Component C</option>
                <option value="D">Component D</option>
            </select>
            <button 
                onClick={handleAddComponent}
                style={{
                    backgroundColor: '#db514b',
                    border: 'none',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '16px',
                    height: '30px',
            }}>Add</button>
        </div>
    );
}

const mapDispatchToProps = ( dispatch: any) => {
    return {
        onAddComponent: ( componentType: string ) => dispatch(actionCreators.addComponent( componentType ))
    }
}

export default connect(null, mapDispatchToProps)(ComboBox);