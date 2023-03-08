import React from 'react'
import "./Contact.css"
import Suhail from "./../Images/Suhail.png"
import Sakshi from "./../Images/Sakshi.jpg"
import Shalini from "./../Images/Shalini.jpg"
import Siyona from "./../Images/Siyona.png"
import TeamCards from './TeamCards'
function Contact() {
  return (
    <>
      <div className="container ">
        <div className="row my-5">
          <TeamCards name="Suhail Shaikh" description="Done front-end,back-end and also prepared Model" image={Suhail} mail="2020.suhail.shaikh@ves.ac.in"/>
          <TeamCards name="Shalini Mirani" description="Worked as a Web Designer and data analysit | Published Research Paper" image={Shalini} mail="2020.shalini.mirani@ves.ac.in"/>
          <TeamCards name="Sakshi Patil" description="Worked as a Web Designer and data analysit | Published Research Paper" image={Sakshi} mail="2020.sakshi.patil@ves.ac.in"/>
          <TeamCards name="Siyona Singh" description="Worked as a Web Designer and data analysit | Published Research Paper" image={Siyona} mail="2020.siyona.singh@ves.ac.in"/>
        </div>
      </div>
    </>
  )
}
export default Contact;