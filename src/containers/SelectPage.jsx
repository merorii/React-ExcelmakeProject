import React, {useState} from 'react';
import MakeSub from '../components/MakeSub';
import SelectBranch from '../components/SelectBranch';
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    display: block;
    width: 300px;
    line-height: 30px;
    margin-top: 10px;
`;

const SelectPage = ()=>{

    const [pages, setPages] = useState({
        state: true,
        cnt: 4
    });

    return(
        <>
            <SelectBranch />
            <MakeSub text='페이지' setPages={setPages} subpage={true} />
            {pages.state && Array(pages.cnt).fill('a').map((hello, idx)=>
                <MakeSub text='상세' cnt={idx+1} key={idx}/>
            )}
            {pages.state && <Button className="button">시작!</Button>}
        </>
    );
}

export default SelectPage;