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

const ExportExcel = ({couponArrTxt}) => {

    const br = useSelector((state)=>state.datas.br);
    const subTitle = useSelector((state)=>state.datas.subtitle);
    const mainNum = useSelector((state)=>state.datas.mainpage);

    const [mainData, setMainData] = useState([
        [
            'mainBannerLength', mainNum
        ],
        [
            'naviTitle', subTitle.slice(0, mainNum).join(' | ')
        ]
    ]);

    const [data, setData] = useState([
        {
            menuGroup:'',
            slides:'',
        },
        {
            menuGroup:'',
            slides:'',
        },
        {
            menuGroup:'',
            slides:'',
        },
        {
            menuGroup:'',
            slides:'',
        }
    ]);

    useEffect(()=>{
        setMainData([
            [
                'mainBannerLength', mainNum
            ],
            [
                'naviTitle', subTitle.slice(0, mainNum).join(' | ')
            ]
        ]);
    }, [subTitle, mainNum]);
    
  const exportData = ()=>{
    Array(data.length).fill('a').forEach((hello, idx)=>{
        const sub = document.querySelectorAll(`.sub${idx+1}`);
        let subText='';
        sub.forEach((sub)=>{
            subText += sub.value+' | '
        })
        data[idx].slides = subText.substr(0, subText.length-3);
        data[idx].menuGroup = subTitle[idx];
    });
    
    exportDataToXlsx(data, mainData, couponArrTxt, `ak_${br.code}`);
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