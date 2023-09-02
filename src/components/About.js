import React from 'react'

export const About = () => {
    return (
        <div className="bg-slate-800 flex">
            <section className="text-3xl font-serif text-white">
                About section
            </section>
            <section className="bg-[url('./assets/img/avatar3.png')] bg-cover rounded-3xl w-96 h-96"></section>
        </div>
    )
}

export default About
