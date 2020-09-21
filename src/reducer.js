import uuid from 'react-uuid';

export const initialState = {
    array: [],

    loggedIn : "Nidhi",

    selectItem: {
        id: '',
        content: 'Hi! Click the Add Icon to Get Started!',
        record: new Date().toDateString(),
        selected: true
    }
}

export const actionTypes = {
    ADD_CONTENT: 'ADD_CONTENT',
    DELETE_CONTENT: 'DELETE_CONTENT',
    MODIFY_CONTENT: 'MODIFY_CONTENT',
    SELECT_CONTENT: 'SELECT_CONTENT',
    
}

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type){
        case actionTypes.ADD_CONTENT:
            const arrayData = [ ...state.array ]
            arrayData.map((array, index)=>{
                array['selected'] = false;
            })
        return {
            ...state,
            array: [...arrayData, action.data],
            selectedItem: action.data
        };
            
        case actionTypes.DELETE_CONTENT:
            const arrayData1 = [ ...state.array ]
            let idx = arrayData1.findIndex((item) => item.id === action.id)
            arrayData1.splice(idx, 1);
            let lastNote = {};
            // console.log(arrayData1, idx)
            if(arrayData1.length > 0){
                arrayData1[arrayData1.length-1]['selected'] = true
                lastNote =  arrayData1[arrayData1.length-1];
            }else{
                lastNote = state.selectItem
            }
        return {
            ...state,
            array: [...arrayData1],
            selectedItem: lastNote
        };

        case actionTypes.SELECT_CONTENT:
            
            const arrayData2 = [ ...state.array ]
            let selectedNote = {};

            arrayData2.map((item)=>{
            if(item['id'] === action.id){
                item['selected'] = true;
                selectedNote = item;
            }
            else{
                item['selected'] = false;
            }
            });
            console.log(selectedNote, "**")

            
            return {
                ...state,
                array: [...arrayData2],
                selectedItem: selectedNote,
            };
        
        case actionTypes.MODIFY_CONTENT:
            let arrayCreate = [ ...state.array ]
            console.log('CAME ', state.selectItem )
            let Note = {};

            if(action.id === 0){
                arrayCreate.push({
                    ['id']: uuid(),
                    ...action.data  
                })     
                
                Note = arrayCreate[0]
            } else {
                arrayCreate.map((item)=>{
                    if(item.id === action.id){
                       item['content'] = action.data.content;
                       item['record'] = action.data.record;
                       item['selected'] = action.data.selected;

                       Note = item;
                    }else{
                        item['selected'] = false;
                    }
                })
            }
            return {
                ...state,
                array: [...arrayCreate],
                selectedItem: Note
            }
        default:
        return state;
    }
}

export default reducer;