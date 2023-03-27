import React from 'react'
import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
    className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
    <div className='mt-16 basis-1/2 md:mt-0'>
        <img src={Logo} alt="logo" />
        <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Eos esse id nesciunt asperiores eum consectetur maxime illum voluptas fugiat, 
            necessitatibus sit minima totam amet! Debitis nobis eveniet?
            </p>
            <p>Ⓒ Evogym All Rights Reserved.</p>
    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Luca fran senetic</p>
        <p className='my-5'>Luca fran senetic</p>
        <p>Luca fran senetic</p>
    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Luca fran senetic</p>
        <p className='my-5'>Luca fran senetic</p>
        <p>(888)888-8888</p>
    </div>
    </div>
    </footer>
  )
}

export default Footer