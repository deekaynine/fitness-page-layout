import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { motion } from "framer-motion"
import HText from '@/shared/HText'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
    const benefits:Array<BenefitType> = [
        {
            icon: <HomeModernIcon className='h-6 w-6'/>,
            title: "State of the Art Facilities",
            description: `Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Quidem temporibus minima numquam natus.`,
        },
        {
            icon: <UserGroupIcon className='h-6 w-6'/>,
            title: "100's of Diverse Classes",
            description: `Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Quidem temporibus minima numquam natus.`,
        },
        {
            icon: <AcademicCapIcon className='h-6 w-6'/>,
            title: "Expert and Pro Trainers",
            description: `Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Quidem temporibus minima numquam natus.`,
        },
    ]

    const container = {
        hidden: {},
        visible: {
            transition: {staggerChildren: 0.2}
        }
    }

  return (
    <section
    id="benefits"
    className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div className='md:my-5 md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5}}
            transition={{delay: 0.2 ,duration: 0.5}}
            variants={{
                hidden: {opacity:0, x:-70},
                visible: {opacity:1, x: 0},
            }}>
                <HText>MORE THAN JUST A GYM.</HText>
                <p className='my-5  text-sm'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quidem temporibus minima numquam natus. Et, voluptatum aperiam reiciendis 
                    illum expedita incidunt consequatur iste quis eius omnis ut, libero alias 
                    corrupti ad?
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div className="md:flex items-center justify-between gap=8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount :0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphics and */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* Graphic */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className='mx-auto' />

                {/* Description */}
                <div>
                    {/* Title */}
                        <div className='relative'>
                            <div className='before: absolulute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                               <motion.div 
                               initial="hidden"
                               whileInView="visible"
                               viewport={{ once:true, amount:0.5}}
                               transition={{duration: 0.5}}
                               variants={{
                                   hidden: {opacity:0, x:-70},
                                   visible: {opacity:1, x: 0},
                               }}>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className='text-primary-500'>FIT</span>
                                </HText>
                              </motion.div>
                            </div>
                        </div>
                    {/* Description */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5}}
                    transition={{delay: 0.2 ,duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x: 50},
                        visible: {opacity:1, x: 0},
                    }}>
                        <p className='my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Amet distinctio incidunt animi sint suscipit eligendi quo modi nam magni 
                         ipsam corrupti laudantium excepturi id ab tempore fugit et tempora, repellat 
                        iure laboriosam praesentium nostrum similique ea! Maxime voluptates commodi excepturi.</p>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis quidem, rerum ut dignissimos enim itaque 
                        ab rem voluptatem aspernatur aliquid.</p>
                    </motion.div>

                    {/* Button */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default Benefits