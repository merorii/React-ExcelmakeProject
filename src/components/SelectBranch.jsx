import React from 'react';
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

    const branchList = ['분당', '수원', '원주', '평택'];

    return(
        <BranchBlock>
            <h3>지점선택</h3>
            {branchList.map((branch, idx)=>
                <Branch key={idx}>{branch}</Branch>
            )}
        </BranchBlock>
    );
}

export default SelectBranch;