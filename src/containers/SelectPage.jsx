import React, {useState} from 'react';
import MakeSub from '../components/MakeSub';
import SelectBranch from '../components/SelectBranch';

const SelectPage = ()=>{

    const [pages, setPages] = useState({
        state: false,
        cnt: 0
    });

    return(
        <>
            <SelectBranch />
            <MakeSub text='페이지' setPages={setPages} subpage={true} />
            {pages.state && Array(pages.cnt).fill('a').map((hello, idx)=>
                <MakeSub text='상세' cnt={idx+1} key={idx}/>
            )}
            <button>와라랄</button>
            <div>
                <h3>제~목~</h3>
                <input />
            </div>
        </>
    );
}

export default SelectPage;