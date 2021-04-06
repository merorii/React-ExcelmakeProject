import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setMainpageNum, setMainTitle } from '../reducers/datas';

const SelectPageBlock = styled.section`
    display: flex;
    align-items: center;
`;

const InputNum = styled.input`
    width: 30px;
    line-height: 30px;
    text-align: right;
    margin-right: 10px;
`;

const InputTitle = styled.input`
    width: 100px;
    line-height: 30px;
    margin-right: 5px;
`;

const MainSelectPage = ()=>{
    const mainNum = useSelector((state)=>state.datas.mainpage);
    const mainTitle = useSelector((state)=>state.datas.maintitle);
    const dispatch = useDispatch();

    const onChangeMainTitleNum = (e)=>{
        dispatch(setMainpageNum(e.target.value*1));
    }

    const onChangeMainTitle = (e, idx)=>{
        let _title = mainTitle.map((title, titleIdx)=>{
            if(idx === titleIdx) return e.target.value;
            else return title;
        });
        dispatch(setMainTitle(_title));
    }
    
    return(
        <SelectPageBlock>
            <h3>메인</h3>
            <InputNum 
                value={mainNum} 
                type="number" min="0" max="4"
                onChange={onChangeMainTitleNum}
            />
            {Array(mainNum).fill('a').map((hello, idx)=>
                <InputTitle 
                    value={mainTitle[idx]} 
                    onChange={(e)=>onChangeMainTitle(e, idx)}
                    key={idx}
                />
            )}
        </SelectPageBlock>
    );
}

export default MainSelectPage;