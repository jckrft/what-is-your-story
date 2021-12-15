import './Landing.css'
import head from '../../assets/images/head.png'
import heart from '../../assets/images/heart.png'
import typing from '../../assets/images/typing.png'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <div className='landing-logo'>
        <h1>what is your story?</h1>
      </div>
      <div className='inspire'>
        <p>get inspired</p>
        <img src={head} alt='head' />
        <p>read through the available writing prompts or contribute your own</p>
      </div>
      <div className='write'>
        <p>write it down</p>
        <img src={typing} alt='typing' />
        <p>when you find something that stirs you, start writing!</p>
      </div>
      <div className='save'>
        <p>save it for later</p>
        <img src={heart} alt='heart' />
        <p>save your past work in your account, and browse other user's work</p>
      </div>
    </div>
  )
}
