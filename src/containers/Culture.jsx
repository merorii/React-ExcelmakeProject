import React from 'react';
import styled from 'styled-components';

const CultureBlock = styled.section`
    display: flex;
    align-items: center;
`;

const InputCulture = styled.input`
    width: 200px;
    line-height: 30px;
`;

const Culture = ({culture, setCulture}) => {
  
  const onChangeCulture = (e)=>{
    setCulture(e.target.value)
  }

  return (
    <CultureBlock>
        <h3>CULTURE ACADEMY</h3>
        <InputCulture value={culture} onChange={onChangeCulture}/>
    </CultureBlock>
  );
};

export default Culture;