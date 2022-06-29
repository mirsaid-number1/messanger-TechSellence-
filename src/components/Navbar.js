import React from 'react'
import { Icon } from '@iconify/react';
import {useDB} from './DB_message' 
function Navbar() {
  let {messages,id} = useDB();

  function findMessage() {
    let found = messages.find(item => item.orderNumber === id);
    return found;
  }
  return (
    <div className='navbar'>
      <div className='message_details'>
          
          <div className='detail1'>
            <span className='order_number'>Order {findMessage().orderNumber}</span>
            <span className='description'>{findMessage().taskDescription}</span>
            <div className='more_details'>
              <ul className='table1'>
                <li>Created by:</li>
                <li>Sent by:</li>
              </ul>
              <ul className='table2'>
                <li>{findMessage().creator}</li>
                <li>{findMessage()?.sendBy}undefined</li>
              </ul>
            </div>
            
          </div>
        <div className='detail2'>
          <span className='task_name'>
            {findMessage().name}
          </span>
          <div className='more_details'>
            <ul className='table1'>
              <li>Due date:</li>
              <li>Send to:</li>
            </ul>
            <ul className='table2'>
              <li>{findMessage().dueDate}</li>
              <li>{findMessage().sendTo}</li>
            </ul>
          </div>
        </div>

      </div>

      <div className='message_settings'>
        <div className='upper_settings'>
          
          <a href='#'>Workflow Name</a>
          
          <div className='admin_panel'>
            <img src='./avatar.png' alt='user' />
             <div className='admin_details'>
              <ul className='table1'>
                <li className='detail'>Welcome Mr. Das</li>
                <li className='detail'>Admin Mode <Icon icon="bi:shield-lock" className='icon' color="black" width="25" height="25" /></li>
              </ul>
              <ul className='table2'>
                <li className='detail'> Logout <Icon icon="icomoon-free:switch"  className="icon" color="black" width="25" height="25" /></li>
                <li className='detail'> Settings <Icon icon="ci:settings-filled" className='icon' color="black" width="25" height="25" /></li>
              </ul>
             </div>
          </div>
        </div>
        <div className='bottom_settings'>
          <div className='buttons'>
            Files
          <Icon icon="bi:files" color="black" width="25" height="25"className='icon' />
          </div>

          <div className='buttons'>
            Forward
            <Icon icon="akar-icons:arrow-forward-thick-fill" color="black" width="25" height="25"className='icon' />
          </div>

          <div className='buttons'>
            Send Back
            <Icon icon="akar-icons:arrow-back-thick-fill" color="black" width="25" height="25"className='icon' />
          </div>

          <div className='buttons'>
            Reject
            <Icon icon="ic:baseline-do-not-disturb" color="black" width="25" height="25"className='icon' />
          </div>

          <div className='buttons'>
            Next Assessor
            <Icon icon="carbon:next-filled" color="black" width="25" height="25"className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar