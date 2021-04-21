import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPageBranch, setSubTitle } from '../reducers/datas';

const BranchBlock = styled.section`
    display: flex;
    align-items: center;
`;

const Branch = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border: 2px solid #aaa;
    border-radius: 5px;
    color: #aaa;
    cursor: pointer;

    &+&{
        margin-left: 20px;
    }
`;

const SelectBranch = ()=>{
    const [nowBranch, setBranch] = useState({
        code: 'bd',
        text: '분당'
    });

    const datas = useSelector((state)=>state.datas.subtitle);

    const dispatch = useDispatch();
    const onSetBranch = (br) => {
        dispatch(setPageBranch({
            code: br.br,
            text: br.text
        }));
        setBranch({
            code: br.br,
            text: br.text
        });
        dispatch(setSubTitle(datas.map((data, idx)=>
            idx === 3?`${br.text}의 부엌`:data
        )));
    };
    
    const branchList = [
        {
            text:'분당',
            br: 'bd'
        }, 
        {
            text:'수원',
            br: 'sw'
        }, 
        {
            text:'원주',
            br: 'wj'
        }, 
        {
            text:'평택',
            br: 'pt'
        }
    ];

    return(
        <BranchBlock>
            <h3>지점선택</h3>
            {branchList.map((branch, idx)=>
                <Branch 
                    key={idx} 
                    onClick={()=>onSetBranch(branch)}
                    style={{
                        borderColor: (nowBranch.code === branch.br)&&'#222',
                        color: (nowBranch.code === branch.br)&&'#222'
                    }}
                >
                    {branch.text}
                </Branch>
            )}
        </BranchBlock>
    );
}

export default SelectBranch;