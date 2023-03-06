import React, { useContext,useState } from 'react';
import { RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const {price,setPrice} = useContext(HouseContext)
  const[isOpen,setIsOpen] = useState(false)

  const prices = [
    {
      value:'Price Range(any)'
    },
    {
      value:'10000-13000'
    }
  ]

  return(
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=>setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
          {isOpen?(
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            ):(
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )}
        </div>
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          prices.map((price,index)=>{
            return(
              <Menu.Item
              onClick={()=>setPrice(price)}
              className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}
              >
                {price}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
