import React, {useReducer, useState} from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { changenum, setMainTitle } from '../reducers/subpages';
import { useEffect } from 'react';

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

const MakeSub = ({cnt})=>{
    const subpage = useSelector((state)=>state.subpages);
    const [sub, setSub] = useState(subpage);

    const dispatch = useDispatch();

    const selectSubPage = (type)=>{
        let _subpage = subpage.subpage.map((page, idx)=>{
            if(idx === (cnt-1)) return (type==='plus')?page+1:page-1;
            else return page;
        });
        setSub({
            ...sub,
            subpage: _subpage,
            cnt: cnt
        });
    }

    useEffect(()=> {
        dispatch(changenum(sub.subpage));
    }, [sub]);

    const onChangeTitle = (e)=>{
        let _title = subpage.title.map((title, idx)=>{
            if(idx === (cnt-1)) return e.target.value;
            else return title;
        });
        dispatch(setMainTitle(_title));
    }

    return(
        <>
            <h3>상세{cnt} 개수</h3>
            <InputNum value={subpage.subpage[cnt-1]} readOnly/>
            <ButtonNum onClick={()=>selectSubPage('plus')}>+</ButtonNum>
            <ButtonNum onClick={()=>selectSubPage('minus')}>-</ButtonNum>
            <InputTitle onChange={onChangeTitle}/>
        </>
    );
}

export default MakeSub;