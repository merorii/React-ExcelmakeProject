import React, {useState} from 'react';
import MakeSub from './MakeSub';
import styled from 'styled-components';

const SelectPageBlock = styled.section`
    display: flex;
`;

const SelectPage = ()=>{

    const [pages, setPages] = useState({
        state: true,
        cnt: 5,
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