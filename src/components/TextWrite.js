import React from 'react'
import { Icon } from '@iconify/react';
import {useDB} from './DB_message'



function TextWrite() {
  return (
    <div className='text_section'>
      <div className='text_mini_nav'>
      <div className='text_settings'>
        <button className='btn bold'>B</button>
        <button className='btn italic'>I</button>
        <button className='btn underlined'>I</button>
        <button className='btn deleted'>I</button>
        <button className='btn '>Aa</button>
        <button className='btn '>A <sup><Icon icon="ant-design:caret-up-filled" color="black" width="10" height="10" /></sup></button>
        <button className='btn '>A <sup><Icon icon="ant-design:caret-down-outlined" color="black" width="10" height="10" /></sup></button>
        <select name='font' id='font' className='font'>
          <option key={'calibri'}>Calibri (Body)</option>
          <option key={'sans-sarif'}>sans-sarif</option>
          <option key={'elephant'}>elephant</option>
          <option key={'times-roman'}>times-roman</option>
          <option key={'default'}>default</option>
        </select>
        <select name='size' id='size' className='size'>
          <option key={18}>18</option>
          <option key={19}>19</option>
          <option key={20}>20</option>
          <option key={30}>30</option>
          <option key={40}>40</option>
        </select>
      </div>
      <div className='comments'>
      <Icon icon="ant-design:paper-clip-outlined" color="black" width="35" height="35" />
      <button className='comment'>comment</button>
      </div>
      </div>
      <div className='text_board'>
        <textarea type={'text'} className='text' />
      </div>
    </div>
  )
}

export default TextWrite