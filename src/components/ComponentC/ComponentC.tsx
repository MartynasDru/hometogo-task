import * as React from 'react';
import './ComponentC.css';

import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/API';

interface IComponentCProps {
    apiData: any,
    onCountSelectedCharacters: ( count: number ) => any;
    selectedCharactersCounter: number;
}

const ComponentC: React.SFC<IComponentCProps> = (props) => {
    const handleCounter = () => {
        const totalSelectedCharacters = document.querySelectorAll('.characters-list__character--selection input[type="checkbox"]:checked').length;
        props.onCountSelectedCharacters( totalSelectedCharacters );
    }
    const generateMovieCharacters = props.apiData.map( ( character: any, index: number ) => {
        return (
            <li className="characters-list__character" key={index}>
                <span className="characters-list__character--name">
                    {character.name}
                </span>
                <span className="characters-list__character--selection">
                    <input onChange={handleCounter} style={{fontSize: '20px'}} type="checkbox" />
                    <button style={{
                        border: '1px solid #aaaaaa',
                        textTransform: 'uppercase',
                    }} >Select</button>
                </span>
            </li>
        );
    } )
    return (
        <div>
            { props.apiData.length > 0 ? <div style={{textAlign: 'right'}}>Total selected characters: {props.selectedCharactersCounter}</div> : null}
            <ul className="characters-list">
                {generateMovieCharacters}
            </ul>
        </div>
    );
}

const mapStateToProps = ( state: any ) => ({
    apiData: state.api.apiData,  
    selectedCharactersCounter: state.api.selectedCharactersCounter,
});

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onCountSelectedCharacters: ( count: number ) => (dispatch(actionCreators.selectedCharactersCounter( count )))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentC);