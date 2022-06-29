import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import {useDB} from './DB_message';
function Sidebar() {
    let {messages,markStar,setId,findChosen} = useDB();

    function routeMessage(e) {
        
        findChosen(+e.target.value);
        setId(+e.target.value);
    }
  
  return (
    <>
        <div className='task_control'>
            <div className='collapse'>
                <span className='text'>
                    Collapse inbox
                </span>
            <Icon icon="carbon:collapse-categories" color="black" width="25" height="25" />
            </div>
            <div className='create_task'>
                <span>
                    Create new task
                </span>
            <Icon icon="jam:write" color="black" width="25" height="25" />
            </div>
            <div className='search'>
                <div className='search_part'>
                <select name="message" id="message" placeholder='Search...' className='search_engine' onChange={(e) => routeMessage(e)}>
                    {
                        messages.map(item => <option
                            key={item.dueDate}
                            value={item.orderNumber}
                          >{item.name}</option>)
                    }
                </select>
                <Icon icon="akar-icons:search" color="black" width="25" height="25" />
                </div>
                
                <div className='remove'>
                <Icon icon="iconoir:delete-circled-outline" color="black" width="25" height="25" />
                </div>
            </div>
        </div>

        <div className='message_collection'>
            {
                messages.map(item => <div 
                    className='message' 
                    key={item.orderNumber}
                    style={{
                        backgroundColor: item.star ? '#E3E6E7' : 'white',
                        borderRadius: '15px',
                        border: `3px solid ${item.chosen ? '#0e7be8' : 'black'}`,
                    }}
                    onClick={(e) => {e.stopPropagation() ;setId(item.orderNumber);findChosen(item.orderNumber)}}>

                    <span className='message_times'>
                        <span className='orderNumber'>{item.orderNumber}</span>
                        <span className='dueDate'>{item.dueDate}</span>
                    </span>
                    <span className='message_name'>
                        <span className='name'>{item.name}</span>
                        <Icon icon="ant-design:star-filled" color={item.star ? 'black' : '#dbdbdb'} width="25" height="25" style={{cursor:'pointer'}} onClick={(e) => {e.stopPropagation(); markStar(item.orderNumber)}}/>
                    </span>
                    <span className='message_description'>
                        {item.taskDescription}
                    </span>
                </div>)
            }
        </div>
    </>
  )
}

export default Sidebar