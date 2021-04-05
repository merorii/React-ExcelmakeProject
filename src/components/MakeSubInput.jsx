import React, {useRef} from 'react';
import styled from 'styled-components'

const MakeSubInputBlock = styled.div`
`;

const InputTitle = styled.input`
    width: 300px;
    line-height: 30px;
    margin:5px;
    display: block;
`;

const MakeSubInput = ({page, pageNum})=>{


    const pages = `sub${pageNum}`;

    const nameInput = useRef();
    
    return(
        <MakeSubInputBlock>
            {pages}
            {Array(page).fill('a').map((hello, idx)=>
                <InputTitle key={idx} value={idx} className={pages} readOnly ref={nameInput}/>
            )}
        </MakeSubInputBlock>
    );
}

export default MakeSubInput;