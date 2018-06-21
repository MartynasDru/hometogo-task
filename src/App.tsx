import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import ComboBox from './components/ComboBox/ComboBox';
import ComponentA from './components/ComponentA/ComponentA';
import ComponentB from './components/ComponentB/ComponentB';
import ComponentC from './components/ComponentC/ComponentC';
import ComponentD from './components/ComponentD/ComponentD';

import * as actionCreators from './store/actions/API';

interface IAppProps {
  apiStatus: string;
  componentACounter: number;
  componentBCounter: number;
  componentCCounter: number;
  componentDCounter: number;
  onChooseActiveApi: () => any;
}

class App extends React.Component<IAppProps> {
    public componentDidUpdate() {
        this.props.onChooseActiveApi();
    }
    public render() {
        const AComponents = [];
        const BComponents = [];
        const CComponents = [];
        const DComponents = [];
        for (let i = 0; i < this.props.componentACounter; i++) {
            AComponents.push(<ComponentA />);
        }
        for (let i = 0; i < this.props.componentBCounter; i++) {
            BComponents.push(<ComponentB />);
        }
        for (let i = 0; i < this.props.componentCCounter; i++) {
            CComponents.push(<ComponentC />);
        }
        for (let i = 0; i < this.props.componentDCounter; i++) {
            DComponents.push(<ComponentD />);
        }
        return (
        <div className="main">
            <div className="main__text-box">
                <h1>Are you Star Wars or Harry Potter fan?</h1>
                <p>See if you know these characters from either of these movies.</p>
                <p style={{marginBottom: '5px'}}>(Checked checkbox means you`d like to check your knowledge in Star Wars saga, unchecked - Harry Potter)</p>
                <div style={{marginBottom: '10px'}} className="main__api-decision">
                    {BComponents}
                </div>
                {AComponents}
                {DComponents}
            </div>
            {CComponents}
            <ComboBox />
        </div>
        );
    }
}

const mapStateToProps = ( state: any ) => ({
    apiStatus: state.api.apiStatus,
    componentACounter: state.comboBox.componentACounter,
    componentBCounter: state.comboBox.componentBCounter,
    componentCCounter: state.comboBox.componentCCounter,
    componentDCounter: state.comboBox.componentDCounter,
});

const mapDispatchToProps = ( dispatch: any) => {
    return {
        onChooseActiveApi: () => (dispatch(actionCreators.chooseApi())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
