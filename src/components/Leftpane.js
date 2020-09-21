import React from 'react';
import './Leftpane.css';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import Tooltip from '@material-ui/core/Tooltip';

import { useStateValue } from '../StateProvider';
import uuid from 'react-uuid';
import { actionTypes } from '../reducer';

export default function Leftpane() {
    const [{array, loggedIn}, dispatch] = useStateValue();
    
    const addContent = () => {
        dispatch({
            type: actionTypes.ADD_CONTENT,
            data: {
                id: uuid(),
                record:  new Date().toDateString(),
                content: '',
                selected: true
            } 
        
        })
        
    }

    const deleteContent = (id) => {
        dispatch({
            type: actionTypes.DELETE_CONTENT,
            id: id
        })
    }

    const selectContent = (id) =>{
        dispatch({
            type: actionTypes.SELECT_CONTENT,
            id: id
        })
    }

    return (
        <div className="leftpane">
            {/* header - Search bar and Add Button */}
            {/* Content div */}
            <div className="leftpane__header">
                <div className="leftpane__headerSearch">    
                    <SearchIcon className="search__inputIcon" />
                    <input placeholder="Search Sticky Notes" />
                </div>
                <Tooltip title="Add" aria-label="add">
                <IconButton onClick={(e)=>{
                    e.preventDefault();
                    addContent();
                      
                }} className="leftpane__headerIconButton">
                    <AddIcon></AddIcon>
                </IconButton>
                </Tooltip>
            </div>
            <div>
                {
                    array.map((data)=>(
                        <div className="leftpane__content">
                            <div className="leftpane__contentData" >
                                <div className= {
                                    data.selected? "leftpane__contentDataColorWide" :
                                    "leftpane__contentDataColor"
                                }>

                                </div>

                                <div className="leftpane__contentDate">
                                    <div className="nohover">
                                        { data.record }
                                    </div>
                                    <div className="hovered">
                                       <IconButton size="small" onClick={(e)=>{ 
                                           e.preventDefault();
                                           deleteContent(data.id);
                                           }}>
                                            <DeleteIcon fontSize='small'/>
                                       </IconButton> 
                                       {/* <IconButton size="small">
                                            <ColorLensIcon fontSize='small'/>
                                        </IconButton> */}
                                    </div>
                                </div>
                                <div className="leftpane__contentDataText" onClick={(e)=>{
                                    e.preventDefault();
                                    selectContent(data.id);
                                }}>
                                    { data.content }
                                </div>
                                <div className="leftpane__author" >
                                    <div>
                                        <CreateIcon className="leftpane__authorIcon" fontSize='small'/> 
                                    </div>
                                    <small>{ loggedIn }</small>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
