import React, {useState} from 'react';
import styled from 'styled-components';
import XLSX from 'xlsx';
import MakeSubInput from '../components/MakeSubInput';
import { useSelector } from 'react-redux';

const InputInfoPageBlock = styled.section`

`;

const InputBlock = styled.div`
    display: flex;
`;

const InputInfoPage = ()=>{

    const br = useSelector((state)=>state.subpages.br);
    const subpage = useSelector((state)=>state.subpages.subpage);
    const title = useSelector((state)=>state.subpages.title);

    const [data, setData] = useState([
        {
            title:'',
            subtitle:'',
            cultureAcademy:''
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

    const exportData = ()=>{
        Array(4).fill('a').forEach((hello, idx)=>{
            const sub = document.querySelectorAll(`.sub${idx+1}`);
            let subText='';
            sub.forEach((sub)=>{
                subText += sub.value+' | '
            })
            console.log(data)
            data[idx].subtitle = subText.substr(0, subText.length-3);
            data[idx].title = title[idx];
        });
        console.log(data)
        exportDataToXlsx(data, `ak_${br}`);
    }

    const exportDataToXlsx = ( data, filename ) => { 
        const worksheet = XLSX.utils.json_to_sheet(data); // excel sheet하단의 worksheet에 해당 
        const new_workbook = XLSX.utils.book_new(); // excel 파일에 해당
        XLSX.utils.book_append_sheet(new_workbook, worksheet, 'sub'); // excelsheet를 excel파일에 넣음 

        // const worksheet2 = XLSX.utils.json_to_sheet(data); // excel sheet하단의 worksheet에 해당 
        // XLSX.utils.book_append_sheet(new_workbook, worksheet2, 'coupon'); // excelsheet를 excel파일에 넣음 

        XLSX.writeFile(new_workbook, filename + '.xlsx'); 
    }

    return(
        <InputInfoPageBlock>
            <InputBlock>
                {subpage.map((page, idx)=>
                    <MakeSubInput page={page} pageNum={idx+1} key={idx} />
                )}
            </InputBlock>
            <button onClick={exportData}>출력</button>
        </InputInfoPageBlock>
    );
}

export default InputInfoPage;