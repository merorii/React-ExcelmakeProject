import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import InputPageInfo from '../components/InputPageInfo';

import { useDispatch, useSelector } from 'react-redux';
import { setSubpageNum, setSubTitle } from '../reducers/datas';

const MakeSubBlock = styled.div`
    flex-direction: row;
    &+&{
        margin-left: 10px;
    }
`;

const InputNum = styled.input`
    width: 30px;
    line-height: 30px;
    text-align: right;
    margin-right: 5px;
`;

const InputTitle = styled.input`
    flex:1;
    line-height: 30px;
`;

const MakeSub = ({cnt})=>{
    const datas = useSelector((state)=>state.datas);
    const subpage = useSelector((state)=>state.datas.subpage);
    const subTitle = useSelector((state)=>state.datas.subtitle);
    const [sub, setSub] = useState(datas);

    const dispatch = useDispatch();

    const onChangeNum = (e)=>{
        let _subpage = subpage.map((page, idx)=>{
            if(idx === (cnt-1)) return e.target.value*1;
            else return page;
        });
        setSub({
            ...sub,
            subpage: _subpage,
            cnt: cnt
        });
    }

    const onChangeTitle = (e)=>{
        let _title = subTitle.map((title, idx)=>{
            if(idx === (cnt-1)) return e.target.value;
            else return title;
        });
        dispatch(setSubTitle(_title));
    }
   
    useEffect(()=> {
        dispatch(setSubpageNum(sub.subpage));
    }, [sub]);
    
    return(
        <MakeSubBlock>
            <div>
                <h3>상세{cnt}</h3>
                <InputNum value={subpage[cnt-1]} type="number" min="0" onChange={onChangeNum}/>
                <InputTitle onChange={onChangeTitle} value={subTitle[cnt-1]} style={{background:"#eee", border:"1px solid #aaa", borderRadius:"2px"}}/>
            </div>
            <InputPageInfo page={subpage[cnt-1]} pageNum={cnt} />
        </MakeSubBlock>
    );
}

export default MakeSub;