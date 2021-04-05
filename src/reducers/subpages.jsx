export const SET_BRANCH = 'SET_BRANCH';
export const SET_SUBPAGE_NUM = 'SET_SUBPAGE_NUM';
export const CHANGE_NUM = 'CHANGE_NUM';
export const SET_MAIN_TITLE = 'SET_MAIN_TITLE';

export const setPageBranch = (data)=>({
    type: SET_BRANCH,
    data, 
});
export const setSubpageNum = (data)=>({
    type: SET_SUBPAGE_NUM,
    data, 
});
export const changenum = (data)=>({
    type: CHANGE_NUM,
    data, 
});
export const setMainTitle = (data)=>({
    type: SET_MAIN_TITLE,
    data, 
});


const initialState = {
    br: 'bd',
    cnt: 0,
    subpage: [4,4,6,2],
    title: ['','','',''],
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
        case CHANGE_NUM:
            return { 
                ...state,
                subpage: action.data
            };
        case SET_MAIN_TITLE:
            return { 
                ...state,
                title: action.data
            };
        default:
            return state;
    }
}

export default reducer;