export const SET_BRANCH = 'SET_BRANCH';
export const SET_SUBPAGE_NUM = 'SET_SUBPAGE_NUM';
export const SET_SUB_TITLE = 'SET_SUB_TITLE';
export const SET_MAINPAGE_NUM = 'SET_MAINPAGE_NUM';

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

const initialState = {
    br: {code:'bg', text:'분당'},
    mainpage: 4,
    subpage: [2,5,5,3],
    subtitle: ['사은행사 & MY 쿠폰','이벤트 & 특가','쇼핑뉴스','분당의 부엌'],
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
        default:
            return state;
    }
}

export default reducer;