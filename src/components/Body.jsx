import React from 'react';
import Client from './Client';
import Footer from './Footer';
import Team from './Team';
import Text from './Text';

function Body() {
  return (
    <div className='bg-[#1A1A1A] py-8 max-w-[66%] mx-auto'>
        <Text heading="MLabs">
            <span>
              We are a Haskell, Rust, Blockchain and AI consultancy.
            </span>
        </Text>
        <Text heading="Services">
            <span>
            Most of our work is in Haskell and Rust, in the <sapn className="text-[#E91E5E]">blockchain, fintech</sapn> and <span className='text-[#E91E5E]'>payments</span> space. However, we also work across other industries.
            </span>
        </Text>
        <span className='text-white tracking-wider text-2xl my-4 py-12  leading-10'>Full range of services:</span>
        <Text heading="How we work">
            <span>
                We implement projects end-to-end or augment your existing team, including any full-stack and devops work that may be needed.
            </span>
        </Text>
        <Client />
        <Team />
        <Text heading="Careers">
            <span>
              For careers please see Careers
            </span>
        </Text>
    </div>
  )
}

export default Body