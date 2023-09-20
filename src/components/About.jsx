import React from 'react'

export const About = () => {
    return (
        <div className="flex justify-between flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <section className='max-w-[25rem]'>
                        <h2 className='text-3xl font-serif text-white'>About me</h2>
                        <p className='text-xs font-sans text-white max-w-2xl'>Welcome, thank you for passing by!
                            I enjoy finding solutions to unforeseen issues and I maintain a well-structured approach to my work. One of my most fulfilling experiences was
                            being part of a group effort that significantly improved our workflow. I want to help making a better world for everyone and I would love to use this career to do so.</p>
                    </section>
                    <section className="bg-[url('./assets/img/avatar5.png')] bg-cover rounded-3xl w-96 h-96"></section>
                </div>
                <div class="flip-card-back">
                    <h2>After completing the Analyst Programmer's degree,
                        I began my career working on projects for small companies and later moving on to a big and international company as The Sandbox.</h2>
                </div>
            </div>
        </div>
    )
}

export default About
