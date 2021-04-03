import React, {useReducer} from 'react';
import styled from 'styled-components'

const InputNum = styled.input`
    width: 30px;
    line-height: 30px;
    text-align: right;
`;

const InputTitle = styled.input`
    width: 300px;
    line-height: 30px;
    display: block;
`;

const ButtonNum = styled.button`
    border: none;
    width: 30px;
    line-height: 30px;
    margin-top: 10px;
    &+&{
        margin-left: 5px;
    }
`;

const Button = styled.button`
    border: none;
    display: block;
    width: 300px;
    line-height: 30px;
`;

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
            <InputNum value={state.value} readOnly/>
            <ButtonNum onClick={()=>dispatch({type:'INCREMENT'})}>+</ButtonNum>
            <ButtonNum onClick={()=>dispatch({type:'DECREMENT'})}>-</ButtonNum>
            {subpage&&<Button onClick={selectSubPage}>make!</Button>}
        </>
    );
}

export default MakeSub;