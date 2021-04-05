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

    return(
        <>
            쿠폰
            고객군수 <input type="number" onChange={onChangeRow}/>
            쿠폰수 <input type="number" onChange={onChangeCol}/>
            {Array(coupon.row).fill('a').map((hello, idx)=>
                <Col key={idx}>
                    {Array(coupon.col).fill('a').map((hello, idx)=>
                        <Row key={idx}></Row>
                    )}
                </Col>
            )}
        </>
    );
}

export default Coupon;