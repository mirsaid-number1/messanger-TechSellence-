import React from 'react'
import { Icon } from '@iconify/react';
import {useDB} from './DB_message'


function Message() {
  const {} = useDB();
  return (
    <div className='message_wrapper'>
      <div className='message_nav'>
        <div className='unit1'>
        <Icon icon="ant-design:save-outlined" className="icon"color="white" width="20" height="20" />
        <Icon icon="akar-icons:star" className="icon"color="white" width="20" height="20" />
        <Icon icon="clarity:upload-cloud-line" className="icon"color="white" width="20" height="20" />
        <Icon icon="fluent:print-24-filled" className="icon"color="white" width="20" height="20" />
        <Icon icon="akar-icons:search" className="icon"color="white" width="20" height="20" />
        </div>
        <div className='unit2'>
          <span className='part'></span>
        <Icon icon="akar-icons:circle-chevron-up" className="icon"color="white" width="20" height="20" />
        <Icon icon="akar-icons:circle-chevron-down" className="icon"color="white" width="20" height="20" />
        <span> 1 / 10</span>
        
        <span className='part'> </span>
        <Icon icon="fa:mouse-pointer" className="icon"color="blue" width="20" height="20" />
        <Icon icon="pepicons:hand-grab" className="icon"color="white" width="20" height="20" />
        <Icon icon="ant-design:minus-circle-outlined" className="icon"color="white" width="20" height="20" />
        <Icon icon="ant-design:plus-circle-outlined" className="icon"color="white" width="20" height="20" />
        <select name='zoom' id='zoom' className='zoom'>
          <option key={200}>200</option>
          <option key={210}>210</option>
          <option key={220}>220</option>
          <option key={230}>230</option>
          <option key={240}>240</option>
        </select>
        <Icon icon="mdi:file-document-multiple-outline" className="icon"color="white" width="20" height="20" />
        <Icon icon="codicon:symbol-keyword" className="icon"color="white" width="20" height="20" />
        <Icon icon="ic:twotone-speaker-notes" className="icon"color="white" width="20" height="20" />
       
        <span className='part'></span>
        <Icon icon="icon-park-outline:write" className="icon"color="white" width="20" height="20" />
        <Icon icon="bi:vector-pen" className="icon"color="white" width="20" height="20" />
        <Icon icon="fa6-solid:pen-to-square" className="icon"color="white" width="20" height="20" />
        <Icon icon="bi:trash" className="icon"color="white" width="20" height="20" />
        <Icon icon="ci:refresh" className="icon"color="white" width="20" height="20" />
        
        </div>
      </div>
      <div className='message_content'>
        <div className='white_board'>
          <header className='header_part'>
          <div className='director'>
            Morgan Stanley
          </div>
          <div className='desc'>
            Investment Management
          </div>
          <div className='title'>
            CounterPoint Global Insights
          </div>
          <div className='expanded_title'>
            Myth Busting,Popular Delusions, and The Variant Perception
          </div>
          <span className='line'></span>
          <div className='dates'>
            <span className='link1'>Consilient Observer</span>
            <span className='vborder'>

            </span>
            May 20, 2020
            </div>
          </header>
          
        </div>

      </div>  
    </div>
  )
}

export default Message