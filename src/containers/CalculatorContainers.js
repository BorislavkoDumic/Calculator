import React, { Component} from 'react';
import { connect } from 'react-redux';
import NumBtn from '../compenentsredux/NumBtn';
import OpeBtn from '../compenentsredux/OpeBtn';
import Result from '../compenentsredux/Result';
import ClearBtn from '../compenentsredux/ClearBtn';
import EqualBtn from '../compenentsredux/EqualBtn'
import {onNumClick,onClearClick,onOpeClick,onEqualClick} from "../actions/index"
import { PLUS, DIVIDE, MULTI, SUBTRACT} from '../utils/actionTypes';


class CalculatorContainers extends Component {
    render(){
        const {number,onNumClick,onOpeClick,onClearClick,onEqualClick,total}= this.props;
        return(
            <div className ="App">
            <div className="calc-wrapper">
                <Result result= {number.displayValue}/>
                <div className = "row">
                    <NumBtn n={7} onClick={() => onNumClick(7)}/>
                    <NumBtn n={8} onClick={() => onNumClick(8)}/>
                    <NumBtn n={9} onClick={() => onNumClick(9)}/>
                    <OpeBtn operator={'+'} onClick={() => onOpeClick(PLUS)}/>
                </div>
                <div className = "row">
                    <NumBtn n={4} onClick={() => onNumClick(4)}/>
                    <NumBtn n={5} onClick={() => onNumClick(5)}/>
                    <NumBtn n={6} onClick={() => onNumClick(6)}/>
                    <OpeBtn operator={'/'} onClick={() => onOpeClick(DIVIDE)}/>
                </div>
                <div className = "row">
                    <NumBtn n={1} onClick={() => onNumClick(1)}/>
                    <NumBtn n={2} onClick={() => onNumClick(2)}/>
                    <NumBtn n={3} onClick={() => onNumClick(3)}/>
                    <OpeBtn operator={'*'} onClick={() => onOpeClick(MULTI)}/>
                </div>
                <div className = "row" >
                    <NumBtn n={0} onClick={() => onNumClick(0)}/>
                    <NumBtn n={'.'} onClick={() => onNumClick('.')}/>
                    <EqualBtn n={'='} onClick={() =>onEqualClick(total? total: '' )}/>
                    <OpeBtn operator={'-'} onClick={() => onOpeClick(SUBTRACT)}/>
                </div>
                <div className ="row">
                <ClearBtn onClick={onClearClick}/>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.calculator,
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onNumClick: n =>{
            dispatch(onNumClick(n));
        },
        onOpeClick: operator =>{
            dispatch(onOpeClick(operator));
        },
        onEqualClick:()=>{
            dispatch(onEqualClick());
        },
        onClearClick:() => {
            dispatch(onClearClick());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainers);