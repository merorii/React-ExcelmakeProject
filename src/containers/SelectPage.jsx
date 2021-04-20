import React, {useState} from 'react';
import MakeSub from './MakeSub';
import styled from 'styled-components';

const SelectPageBlock = styled.section`
    display: flex;
    padding-bottom: 20px !important;
`;

const SelectPage = ()=>{

    const [pages, setPages] = useState({
        state: true,
        cnt: 4,
    });

    return(
        <SelectPageBlock>
            {Array(pages.cnt).fill('a').map((hello, idx)=>
                <MakeSub 
                    cnt={idx+1} 
                    key={idx} 
                />
            )}
        </SelectPageBlock>
    );
}

export default SelectPage;