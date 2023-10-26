import {useState} from 'react'
import AboutMe from './Routes/AboutMe'
import Links from './Routes/Links'
import Contact from './Routes/Contact'
import './App.css'

export default function App() {
  const [aboutMe, setAboutMe] = useState(true)
  const [links, setLinks] = useState(false)
  const [contact, setContact] = useState(false)

  function clickAboutMe() {
    setAboutMe(true)
    setLinks(false)
    setContact(false)
  }

  function clickLinks() {
    setAboutMe(false)
    setLinks(true)
    setContact(false)
  }

  function clickContact() {
    setAboutMe(false)
    setLinks(false)
    setContact(true)
  }

  return (
    <div className="App">
      <div className="header-container">
        <h1>Welcome</h1>
      </div>
      <div className="link-container">
        <button onClick={() => clickAboutMe()}>About Me</button>
        <button onClick={() => clickLinks()}>Links</button>
        <button onClick={() => clickContact()}>Contact Me</button>
      </div>
      <div className="body-container">
        <div className="photo-container">
          <img/>
        </div>
        {aboutMe && !links && !contact
          ? (<AboutMe/>)
          : (links && !aboutMe && !contact
            ? (<Links/>)
            : (<Contact/>)
          )
        }
      </div>
    </div>
  )
}