import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/sakshi.jpg'
const Home = ({ratio}) => {
    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
                x:0,
                opacity: 1,
            },
        },
        button:{
            initial:{
                y:"-100%",
                opacity: 0,
            },
            whileInView:{
                y:0,
                opacity: 1,
            },
        },
    };
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientCount = (num,ref) => {
        animate(0,num,{
            duration:1,
            onUpdate:(v)=>{
                ref.current.textContent = v.toFixed()
            }
        })
    }
  return (
    <div id="home">
      <section>
        <div>
            { ratio< 2 && <motion.h1 {...animations.h1} >
                Hi, I'm <br/> Sakshi Rawat
            </motion.h1>}
            <TypeWriter 
                options={{
                    strings:["A Developer","A Designer","A Creator"],
                    autoStart: true,
                    cursor: "",
                    loop:true,
                    wrapperClassName: "typewriterpara"
                }}
            />
            <div>
                <a href="mailto:sakshurawat786@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight/></a>

            </div>
            <article>
                <p>+<motion.span ref={clientCount} whileInView={()=>animationClientCount(100,clientCount)}></motion.span></p>
                <span>Client Worldwide</span>
            </article>
            
            <aside>
            <article>
                <p>+
                   {ratio < 2 && <motion.span ref={projectCount} whileInView={()=>animationClientCount(500,projectCount)}>

                    </motion.span>}
                </p>
                <span>Projects Made</span>
            </article>
            <article data-special>
                <p>Contact</p>
                <span>sakshurawat786@gmail.com</span>
            </article>
            </aside>
            
        </div>
      </section>
        
      <section>
        <img src={me} alt="Sakshi" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home
