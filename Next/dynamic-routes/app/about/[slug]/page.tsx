import React from 'react'

const About = async ({params}: {params : Promise<{slug : string}>}) => {
    const props = await params
  return (
    <div>i am {props.slug}</div>
  )
}

export default About