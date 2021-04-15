import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import XLSX from 'xlsx';
import { useSelector } from 'react-redux';

const Button = styled.button`
    width: 100%;
    line-height: 50px;
    margin: 50px 0 30px;
    background: #aaa;
    border-radius: 10px;
    color: #fff;
    border: none;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background: #858585;
    }
`;

const ExportExcel = ({couponArrTxt, culture}) => {

    const br = useSelector((state)=>state.datas.br);
    const subTitle = useSelector((state)=>state.datas.subtitle);
    const mainTitle = useSelector((state)=>state.datas.maintitle);
    const mainNum = useSelector((state)=>state.datas.mainpage);

    const [mainData, setMainData] = useState([
        [
            'mainBannerLength', mainNum
        ],
        [
            'mainBanner', mainTitle.slice(0, mainNum).join(' | ')
        ]
    ]);

    const [data, setData] = useState([
        {
            title:'',
            subtitle:'',
            cultureAcademy: culture
        },
        {
            title:'',
            subtitle:'',
        },
        {
            title:'',
            subtitle:'',
        },
        {
            title:'',
            subtitle:'',
        },
        {
            title:'',
            subtitle:'',
        }
        // { index: 1, name: 'apple', price: '1,200' }, 
    ]);

    useEffect(()=>{
        setMainData([
            [
                'mainBannerLength', mainNum
            ],
            [
                'mainBanner', mainTitle.slice(0, mainNum).join(' | ')
            ]
        ]);
    }, [mainTitle, mainNum]);
    
    useEffect(()=>{
        setMainData([
            [
                'mainBannerLength', mainNum
            ],
            [
                'mainBanner', mainTitle.slice(0, mainNum).join(' | ')
            ]
        ]);
    }, [mainTitle, mainNum]);
    
  const exportData = ()=>{
    Array(data.length).fill('a').forEach((hello, idx)=>{
        const sub = document.querySelectorAll(`.sub${idx+1}`);
        let subText='';
        sub.forEach((sub)=>{
            subText += sub.value+' | '
        })
        data[idx].subtitle = subText.substr(0, subText.length-3);
        data[idx].title = subTitle[idx];
    });
    data[0].cultureAcademy = culture;
    
    exportDataToXlsx(data, mainData, couponArrTxt, `ak_${br}`);
  }

  const exportDataToXlsx = ( data, mainData, couponData, filename ) => { 
      const new_workbook = XLSX.utils.book_new(); // excel 파일에 해당

      const worksheetMain = XLSX.utils.json_to_sheet(mainData); // excel sheet하단의 worksheet에 해당 
      XLSX.utils.book_append_sheet(new_workbook, worksheetMain, 'main'); // excelsheet를 excel파일에 넣음 

      const worksheetSub = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(new_workbook, worksheetSub, 'sub');

      const worksheetCoupon = XLSX.utils.json_to_sheet(couponData); 
      XLSX.utils.book_append_sheet(new_workbook, worksheetCoupon, 'coupon'); 


      XLSX.writeFile(new_workbook, filename + '.xlsx'); 
  }

  return <Button onClick={exportData}>Export</Button>
};

export default ExportExcel;