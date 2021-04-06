import React from 'react';
import styled from 'styled-components';

const InputTitle = styled.input`
    width: 97%;
    line-height: 30px;
    margin:5px 0;
    display: block;
`;

const InputPageInfo = ({page, pageNum})=>{
    const pages = `sub${pageNum}`;

    return(
        <div>
            {Array(page).fill('a').map((hello, idx)=>
                <InputTitle key={idx} className={pages} />
            )}
        </div>
    );
}

export default InputPageInfo;