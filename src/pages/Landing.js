import React from "react";
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect/'

const Landing = () => {

  return (
    <div id='landing'>
      <div className="landing-wrapper" >
        <motion.div initial={{ x: 0 }} animate={{ y: 100 }} exit={{ y: -1000 }} transition={{ delay: 0.05 }} className="">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="">
            <div className='rolling-wrapper'>
                <div className="rolling-header">
                    <Typewriter 
                        options={{ strings: [
                        'adaptive',
                        'collaboratorive',
                        'growth-oriented',
                        'motivated',
                        'candid',
                        'empathetic'
                     ],
                        autoStart: true,
                        loop: true,
                        delay: 15,
                        deleteSpeed: 16
                     }}
                />
            </div>
            </div>
                <div className='landing-name'>Laneia</div>
          </motion.div>
        </motion.div>
    </div>
</div>
  )
}

export default Landing