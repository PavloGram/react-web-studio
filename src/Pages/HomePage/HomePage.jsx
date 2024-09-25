import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Benefits from '../../Components/Benefits/Benefits'
import Works from '../../Components/Works/Works'
import Team from '../../Components/Team/Team'
import Clients from '../../Components/Clients/Clients'
import Modal from '../../Components/Modal/Modal'

function HomePage() {
  const [isActiveModal, setIsActiveModal] = useState(false)
  return (
    <>
    <Hero setIsActiveModal={setIsActiveModal}/>
    <Benefits/>
    <Works/>
    <Team/>
    <Clients/>
    <Modal isActive={isActiveModal} setIsActiveModal={setIsActiveModal}/>
    </>
  )
}

export default HomePage