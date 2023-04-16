import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} │ {place}
                </span>
                <p className='font-medium w-full md:text-sm mt-2'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Bachelor Of Science In Information Technology"
                        time="2022 - Present" place="WVSU -PC"
                        info="The School of ICT is an academic department that offers courses in information 
                        and communication technology. 
                        It prepares students for careers in IT through theoretical coursework and practical projects."/>

                    <Details
                        type="Senior HighSchool Graduate"
                        time="2019 - 2022" place="SACRED HEART ACADEMY - SHA"
                        info="STEM stands for Science, Technology, Engineering, and Mathematics. 
                        It is an educational approach that integrates these four subjects to develop critical thinking, 
                        problem-solving, and analytical skills. STEM education focuses on providing students with hands-on learning experiences 
                        that are relevant to real-world applications." />

                        <Details
                        type="Junior HighSchool Graduate"
                        time="2016 - 2020" place="COLEGIO DE LA INMACULADA CONCEPTION - CIC"
                        info="STEM stands for Science, Technology, Engineering, and Mathematics. 
                        Colegio de la Inmaculada Concepcion Hijas de Jesus Pototan is a Catholic school in Pototan, Iloilo, Philippines. 
                        It provides a quality Catholic education based on Gospel values and promotes a sense of community and service. 
                        The school offers a comprehensive curriculum and encourages students to participate in extracurricular activities." />
                </ul>
            </div>
        </div>
    )
}

export default Education