//import React from 'react'
import { ItemRoot } from '../model/Etsy'
import '../css/main.css'

type Props = ItemRoot;

const CardData = (props: Props) => {
  function CharacterTrimmed(argument: string, length: number) {
    var trimmedString = argument.length > length ? 
      argument.substring(0, length - 3) + "..." : 
      argument;
    return trimmedString;
  }
  function ConvertCurrency(argument: string, currency: string) {
    switch(currency) {
      case 'USD':
        return '$'+argument;
      case 'EUR':
        return '€'+argument;
      case 'GBP':
        return argument + ' GBP';
      default:
        return argument;
    }
  }
  function ColorPrice(value: string) {
    let remnant = parseInt(value.split('.')[1]);
    let result = remnant <= 10 ? 'level-low' :
      (remnant > 10 && remnant <= 20) ? 'level-medium' :
      'level-high';
    return 'item-quantity ' + result;
  }

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={props.url}>
          <img src={props.MainImage?.url_570xN}></img>
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{CharacterTrimmed(`${props.title}`, 50)}</p>
        <p className='item-price'>{ConvertCurrency(`${props.price}`, `${props.currency_code}`)}</p>
        <p className={ColorPrice(`${props.price}`)} key={props.listing_id}>{props.quantity} left</p>
      </div>
    </div>
  )
}

export default CardData;