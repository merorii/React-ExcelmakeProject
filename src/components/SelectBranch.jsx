import React, {useState} from 'react';
import styled from 'styled-components'

const BranchBlock = styled.section`
    margin: 10px;
    display: flex;
    align-items: center;

    h3{
        margin: 0;
        margin-right: 20px;
    }
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

    const [nowBranch, setBranch] = useState('bd');

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

    const onClickBranch = (br)=>{
        setBranch(br);
    }

    return(
        <BranchBlock>
            <h3>지점선택</h3>
            {branchList.map((branch, idx)=>
                <Branch 
                    key={idx} 
                    onClick={()=>onClickBranch(branch.br)}
                    style={{
                        borderColor: (nowBranch === branch.br)&&'#222',
                        color: (nowBranch === branch.br)&&'#222'
                    }}
                >
                    {branch.text}
                </Branch>
            )}
        </BranchBlock>
    );
}

export default SelectBranch;