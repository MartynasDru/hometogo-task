import * as React from 'react';
import './ComponentD.css';

import { connect } from 'react-redux';

interface IComponentDProps { 
    apiStatus: string;
}

const ComponentD: React.SFC<IComponentDProps> = (props) => {
    let apiStatusStyles;
    if (props.apiStatus === 'IDLE') {
        apiStatusStyles = {
            backgroundColor: '#f5f5f5',
            border: '2px solid #aaaaaa',
        }
    } else if (props.apiStatus === 'LOADING') {
        apiStatusStyles = {
            backgroundColor: '#fff2cc',
            border: '2px solid #e4d198',
        }
    } else if (props.apiStatus === 'LOADED') {
        apiStatusStyles = {
            backgroundColor: '#d5e8d4',
            border: '2px solid #b7d1a9',
        }
    } else if (props.apiStatus === 'ERROR') {
        apiStatusStyles = {
            backgroundColor: '#f8cecc',
            border: '2px solid #d69794',
        }
    }
    return (
        <p className="api-status" style={apiStatusStyles}>{props.apiStatus}</p>
    );
}

const mapStateToProps = ( state: any ) => ({
    apiStatus: state.api.apiStatus,
  });

export default connect(mapStateToProps)(ComponentD);