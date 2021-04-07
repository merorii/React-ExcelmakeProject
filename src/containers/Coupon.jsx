import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const InputNum = styled.input`
    width: 30px;
    line-height: 30px;
    text-align: right;
    margin-right: 5px;
`;

const Col = styled.div`
    display:flex;
`;

const Row = styled.input`
    background: gray;
    width: 30px;
    height: 30px;
    margin: 5px;
    display: block;
`;

const CouponMake = styled.p`
    margin: 0;
    width: 100px;
    background: #eee;
    text-align: center;
    line-height: 33px;
    border: 1px solid #aaa;
    cursor: pointer;
    &:hover{
        background: #ccc;
    }
`;

const Coupon = ({couponArrTxt, setCouponArrTxt})=>{
    
    const [coupon, setCoupon] = useState({
        row: 0,
        col: 0
    });

    const [couponArr, setCouponArr] = useState([]);
    const [couponBarcode, setCouponBarcode] = useState('');
    
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

    const onChangeBarcode = (e)=>{
        setCouponBarcode(e.target.value)
    }

    useEffect(()=>{
        setCouponArr(
            Array(coupon.row).fill('a').map((rowTxt)=>
                rowTxt = Array(coupon.col).fill(0)
            )
        )
    },[coupon])

    const couponMake = ()=>{
        let arrtxt = '';
        let arr = [];
        couponArr.forEach((arrs,idx)=>{
            arrtxt='';
            arrtxt += (idx<9?`0${idx+1}`:idx+1) + ": [";
            arrs.forEach((arr,idx2)=>{
                if(arr === 1) arrtxt += `"0${idx2+1}",`
            })
            if(arrtxt.substr(arrtxt.length-1, 1) !== '[') arrtxt = arrtxt.substr(0, arrtxt.length-1);
            arrtxt += "]";
            idx===0
            ?arr.push({ 
                "고객군" : arrtxt, 
                "바코드 쿠폰 번호": couponBarcode !== '' && (couponBarcode*1)<9?`0${couponBarcode}`:couponBarcode, 
                "마지막 쿠폰 번호": couponArr.length<10?`0${couponArr.length}`:couponArr.length, 
                "사용하기 없는 쿠폰 번호": '[]'
            })
            :arr.push({ "고객군" : arrtxt });
            console.log(arr)
        })
        setCouponArrTxt(arr);
    }

    const onClickCoupon = (rowIdx, colIdx)=>{
        setCouponArr(
            couponArr.map((arrs, row)=>{
                return arrs.map((arr, col)=>{
                    if(row === rowIdx && col === colIdx) return arr===0?1:0;
                    else return arr;
                })
            })
        );
    }

    return(
        <section style={{paddingBottom: 30}}>
            <h3>쿠폰</h3>
                <div>
                    <label>고객군수 <InputNum type="number" min="0" onChange={onChangeRow}/></label>
                    <label>쿠폰수 <InputNum type="number" min="0" onChange={onChangeCol}/></label>
                    <label>바코드쿠폰 <InputNum type="number" min="0" onChange={onChangeBarcode}/></label>
                
                    {Array(coupon.row).fill('a').map((hello, rowIdx)=>
                        <Col key={rowIdx}>
                            <span style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                margin: '0 10px 10px 0'
                            }}>
                                {rowIdx<9?`0${rowIdx+1}`:rowIdx+1}
                            </span>
                            {Array(coupon.col).fill(0).map((hello, colIdx)=>
                                <div>
                                    {rowIdx === 0 && 
                                    <p style={{ 
                                        textAlign: 'center'
                                    }}>
                                        {colIdx<9?`0${colIdx+1}`:colIdx+1}
                                    </p>}
                                    <Row 
                                        type="checkbox" min="0" 
                                        key={colIdx} 
                                        onClick={()=>{onClickCoupon(rowIdx, colIdx)}}
                                    />
                                </div>
                            )}
                        </Col>
                    )}
                
                </div>
                <div style={{marginTop:20}}>
                    <CouponMake onClick={couponMake}>쿠폰MAKE!</CouponMake>
                    <textarea value={couponArrTxt.map((txt)=>txt.고객군)} readOnly style={{marginTop: 10, width: '100%', height: 100}}></textarea>
                </div>
        </section>
    );
}

export default Coupon;