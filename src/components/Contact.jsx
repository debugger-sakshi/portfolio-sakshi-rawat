import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {motion} from 'framer-motion';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebase'
const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [disabledBtn,setDisabledBtn] = useState(false);

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        setDisabledBtn(true)
        try{
        await addDoc(collection(db,"contacts"),{
          name,
          email,
          message
        })
        // console.log(name,email,message)
        setName("")
        setEmail("")
        setMessage("")
        setDisabledBtn(false)
        toast.success("Message Sent")
      }catch(error){
        setDisabledBtn(false)
        toast.error("Error",error )
        
      }
    }
    const animation = {
      form:{
        initial:{
          x:"-100%",
          opacity:0,
        },
        whileInView:{
          x:0,
          opacity:1,
        }
      },
      button:{
        initial:{
          y:"-100%",
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1,
        },
        transition:{
          delay:0.5
        }
      }
    }
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={onSubmitHandler} {...animation.form} >
            <h2>Contact me</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' required />
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message' required />
            <motion.button type='submit' className={disabledBtn?'disablebtn':''} {...animation.button} disabled={disabledBtn}>Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src="https://raw.githubusercontent.com/meabhisingh/react-portfolio/master/src/assets/vg.png" alt="Vector Graphic" />
      </aside>
    </div>
  )
}

export default Contact
