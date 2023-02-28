import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai'
import me from '../assets/sakshi.jpg'
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="avatar" />
        <h2>Sakshi Rawat</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque reprehenderit consectetur.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
            <a href=""><AiFillInstagram /></a>
        </article>
        <article>
            <a href=""><AiFillGithub /></a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer
