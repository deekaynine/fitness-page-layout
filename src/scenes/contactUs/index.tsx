import { SelectedPage } from '@/shared/types'
import React from 'react'
import {motion} from "framer-motion"
import {useForm} from "react-hook-form"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'


type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const inputStyles= `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

const ContactUs = ({setSelectedPage}: Props) => {


const{
    register,
    trigger,
    formState: {errors}
} = useForm();

const onSubmit = async(e:any) => {
    const isValid = await trigger();
    if (!isValid){
        e.preventDefault()
    }
}

  return (
    <section 
    id="contactus"
    className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div
            className='md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5}}
            transition={{delay: 0.2 ,duration: 0.5}}
            variants={{
                hidden: {opacity:0, x:-70},
                visible: {opacity:1, x: 0},
            }}>
                <HText>
                    <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                </HText>
            </motion.div>
            <p className='my-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, excepturi nam 
                cupiditate corrupti quis repellat! Repellendus, corrupti ratione! Voluptatum, explicabo?
            </p>

            {/* Form and Image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className='mt-10 basis-3/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount:0.5}}
                transition={{delay: 0.2 ,duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y:50},
                    visible: {opacity:1, y: 0},
                }}
                >
                    <form target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/your@email.com"
                    method="POST">
                        <input 
                        className={inputStyles}
                        type="text" 
                        placeholder='NAME'
                        {...register("name",{
                            required: true,
                            maxLength: 30,
                        })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length of 30 is exceeded."}
                            </p>
                        )}
                         <input 
                        className={inputStyles}
                        type="text" 
                        placeholder='EMAIL'
                        {...register("email",{
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                        })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid Email Address Format"}
                            </p>
                        )}
                         <textarea 
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder='MESSAGE'
                        {...register("message",{
                            required: true,
                            maxLength: 1000,
                        })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length of 1000 characters is exceeded."}
                            </p>
                        )}
                        
                        <button 
                        type="submit"
                        className='mb-5 rounded-lg bg-secondary-500 px-20 py-3 
                        transition duration-500 hover:text-white'>
                        SUBMIT
                        </button>
                    </form>
                </motion.div>
                 {/* Image */}
                <motion.div
                className='relative mt-15 basis-2/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount:0.5}}
                transition={{delay: 0.2 ,duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y:50},
                    visible: {opacity:1, y: 0},
                }}>
                    <div className='before:absolute before:-bottom-20 
                    before:-right-10 before:z-[-1] md:before:content-evolvetext '>
                        <img className="w-full" src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
                    </div>
                </motion.div>

            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs