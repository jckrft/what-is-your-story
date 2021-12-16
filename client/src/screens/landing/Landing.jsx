import './Landing.css'
import head from '../../assets/images/head.png'
import heart from '../../assets/images/heart.png'
import typing from '../../assets/images/typing.png'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='landing'>
      <div className='logo'>
        <h1 className='landing-logo'>what is your story?</h1>
      </div>
      <div className='description-box'>
      <div className='inspire'>
        <p className='inspire-tag'>get inspired</p>
        <img src={head} alt='head' />
        <p>read through the available writing prompts or contribute your own</p>
      </div>
      <div className='write'>
        <p className='write-tag'>write it down</p>
        <img src={typing} alt='typing' />
        <p>when you find something that stirs you, start writing!</p>
      </div>
      <div className='save'>
        <p className='save-tag'>save it for later</p>
        <img src={heart} alt='heart' />
        <p>save your past work in your account, and browse other user's work</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
