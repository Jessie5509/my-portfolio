import React from 'react'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <div className="flex justify-center h-96 items-center">
            <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2, type: 'spring' }}
                className="text-5xl max-w-lg">Hi! I'm Jess a Full Stack Developer</motion.p>
        </div>
    )
}

export default Home
