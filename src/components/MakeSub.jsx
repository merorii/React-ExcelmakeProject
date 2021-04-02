import React, {useReducer} from 'react';
// import styled from 'styled-components'

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value : state.value+1};
        case 'DECREMENT':
            return {value : state.value-1};
        default:
            return state;
    }
}

const MakeSub = ({text, setPages, subpage, cnt})=>{

    const [state,dispatch] = useReducer(reducer, {
        value: subpage?4:1
    });

    const selectSubPage = ()=>{
        setPages({
            state: true,
            cnt: state.value
        });
    }

    return(
        <>
            <h3>{text}{subpage||cnt} 개수</h3>
            <input value={state.value} readOnly/>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
            {subpage && <button onClick={selectSubPage}>make!</button>}
        </>
    );
}

export default MakeSub;