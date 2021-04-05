import React, {useState} from 'react';
import MakeSub from '../components/MakeSub';
import SelectBranch from '../components/SelectBranch';
import InputPageInfo from './InputPageInfo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const SelectPageBlock = styled.section`
    display: flex;

`;

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
        cnt: 4,
        substate: false,
    });

    const inputSubPage = ()=>{
        setPages({
            ...pages,
            substate: true
        })
    }
    const subpage = useSelector((state)=>state.subpages.subpage)

    return(
        <SelectPageBlock>
            <section>
                <SelectBranch />
                {pages.state && Array(pages.cnt).fill('a').map((hello, idx)=>
                    <MakeSub 
                        cnt={idx+1} 
                        key={idx} 
                    />
                )}
            </section>
            <InputPageInfo subpage={subpage}/>
        </SelectPageBlock>
    );
}

export default SelectPage;