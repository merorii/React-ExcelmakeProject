import React, {useState} from 'react';
import styled from 'styled-components';


const Col = styled.div`
    display:flex;
`;

const Row = styled.div`
    background: gray;
    width: 30px;
    height: 30px;
    margin: 5px;
`;

const Coupon = ()=>{
    const [coupon, setCoupon] = useState({
        row: 0,
        col: 0
    })
    const couponArr = [];
    
    const onChangeRow = (e)=>{
        setCoupon({
            ...coupon,
            row: e.target.value*1
        })
    }
    const onChangeCol = (e)=>{
        setCoupon({
            ...coupon,
            col: e.target.value*1
        })
    }

    const onClickCoupon = ()=>{

    }
    return(
        <>
            쿠폰
            고객군수 <input type="number" onChange={onChangeRow}/>
            쿠폰수 <input type="number" onChange={onChangeCol}/>
            {Array(coupon.row).fill('a').map((hello, rowIdx)=>
                <Col key={rowIdx}>
                    {Array(coupon.col).fill('a').map((hello, colIdx)=>
                        <Row key={colIdx} onClick={onClickCoupon}
                        // style={{
                        //     background:(couponArr[rowIdx][colIdx]===1)?'black':'gray'
                        // }}
                        ></Row>
                    )}
                </Col>
            )}
        </>
    );
}

export default Coupon;