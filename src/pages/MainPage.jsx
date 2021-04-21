import React, { useState } from 'react';
import styled from 'styled-components';

import Coupon from '../containers/Coupon';
import SelectPage from '../containers/SelectPage';
import SelectBranch from '../components/SelectBranch';
import ExportExcel from '../components/ExportExcel';

const MainPageBlock = styled.div`
  margin: 20px;
  section{
    background: #fff;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 10px;

    h3{
        margin-right: 20px;
    }
  }
`;

const MainPage = () => {
  
  const [couponArrTxt, setCouponArrTxt] = useState([]);

  return (
    <MainPageBlock>
      <SelectBranch />
      <SelectPage />
      <Coupon 
        couponArrTxt={couponArrTxt} 
        setCouponArrTxt={setCouponArrTxt}
      />
      <ExportExcel 
        couponArrTxt={couponArrTxt} 
      />
    </MainPageBlock>
  );
};

export default MainPage;