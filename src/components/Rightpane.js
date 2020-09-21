import React, { useState } from 'react';
import './Rightpane.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

export default function Rightpane() {
    const [{selectedItem, array}, dispatch] = useStateValue()

    const [Data, setData] = useState({
        content: 'Hi! Welcome to Sticky Notes!',
        record: new Date().toDateString(),
        selected: true
    })

    const saveContent = (id) =>{
            dispatch({
                type: actionTypes.MODIFY_CONTENT,
                id: id,
                data: Data
            })
    
    }

    const deleteContent = (id) => {
        dispatch({
            type: actionTypes.DELETE_CONTENT,
            id: id
        })
    }

    React.useEffect(() => {
       
      if(selectedItem != undefined && selectedItem != {}){

          setData(selectedItem);
      }
        
    }, [array])

    return (
        <div className="rightpane">
            <div className="rightpane__card">
            <div className="rightpane__cardColor">  </div>  
                <div className="rightpane__cardIcon">
                { selectedItem != undefined && array.length != 0? <IconButton onClick={(e)=>{
                     e.preventDefault();
                     deleteContent(selectedItem.id);
                    }} className="rightpane__delete">
                    <DeleteIcon />
                </IconButton>: <> </> }
                </div>
                
                <textarea type='text'
                onChange = {(e)=>{
                    setData({ ...selectedItem, ["content"] : e.target.value })
                }}
              value={Data.content} className="rightpane__cardTextField" />
                <div className="rightpane__cardDate">
                    {Data.record}
                </div>
                <div className="rightpane__cardButton">
                    { array.length != 0 && selectedItem != undefined ? <Button variant="contained"
                    onClick = {(e)=>{
                        e.preventDefault();
                        saveContent(selectedItem.id);
                    }}
                    startIcon={<SaveIcon/>} size="small" >Save</Button> : 
                    <> </>
                }
                </div>
            </div>
            
        </div>
    )
}
