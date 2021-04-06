export const SET_BRANCH = 'SET_BRANCH';
export const SET_SUBPAGE_NUM = 'SET_SUBPAGE_NUM';
export const SET_SUB_TITLE = 'SET_SUB_TITLE';
export const SET_MAINPAGE_NUM = 'SET_MAINPAGE_NUM';
export const SET_MAIN_TITLE = 'SET_MAIN_TITLE';

export const setPageBranch = (data)=>({
    type: SET_BRANCH,
    data, 
});
export const setSubpageNum = (data)=>({
    type: SET_SUBPAGE_NUM,
    data, 
});
export const setSubTitle = (data)=>({
    type: SET_SUB_TITLE,
    data, 
});
export const setMainpageNum = (data)=>({
    type: SET_MAINPAGE_NUM,
    data, 
});
export const setMainTitle = (data)=>({
    type: SET_MAIN_TITLE,
    data, 
});


const initialState = {
    br: 'bd',
    mainpage: 4,
    maintitle: ['금주의 할인소식','GIFT & EVENT','쇼핑뉴스','AK 매거진'],
    subpage: [1,4,4,6,2],
    subtitle: ['MY 쿠폰','리워드','이벤트','쇼핑뉴스','푸드'],
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_BRANCH:
            return {
                ...state,
                br: action.data
            };
        case SET_SUBPAGE_NUM:
            return {
                ...state,
                subpage: action.data
            };
        case SET_SUB_TITLE:
            return { 
                ...state,
                subtitle: action.data
            };
        case SET_MAINPAGE_NUM:
            return {
                ...state,
                mainpage: action.data
            };
        case SET_MAIN_TITLE:
            return { 
                ...state,
                maintitle: action.data
            };
        default:
            return state;
    }
}

export default reducer;