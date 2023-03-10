import React,{useState,useEffect,createContext} from 'react';
import {housesData} from '../data'

export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  const [houses,setHouses] = useState(housesData)
  const [country,setCountry] = useState('Location (any)')
  const [countries,setCountries] = useState([])
  const [property,setProperty] = useState('Property (any)')
  const [properties,setProperties] = useState([])
  const [price,setPrice] = useState('Price range (any)')
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    })
    const uniqueCountries = ['Locations (any)',...new Set(allCountries)]
    setCountries(uniqueCountries)
  },([houses]));

  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    })
    const uniqueProperties = ['Type (any)',...new Set(allProperties)]
    setProperties(uniqueProperties)
  },([houses]));

  

  return (<HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
  }}>{children}</HouseContext.Provider>);

  };


export default HouseContextProvider;
