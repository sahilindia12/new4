'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const NavbarContainer = styled.div`
  background-color: ;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className='0 rounded-sm shadow-md  bg-red-500'>
      <Link href="/" >
        <NavbarLink className=' text-base no-underline' ><label className=' text-[24px]'> Techword..</label></NavbarLink>
      </Link>
     
      <NavbarLinks className=' sm:bg-red-500  md::bg-purple-300 rounded-md mr-10 hidden' isOpen={isOpen}>
      <Link className=' text-white hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/">
          {/* <NavbarLink>About</NavbarLink> */} home
        </Link>
        <Link className=' text-white hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/movie/newmov">
          {/* <NavbarLink>About</NavbarLink> */}newmovi
        </Link>
        <Link className=' text-white hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/">
          {/* <NavbarLink>About</NavbarLink> */} newmo
        </Link>
        <Link className=' text-white hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/component/rvsn">
          {/* <NavbarLink>About</NavbarLink> */} movies
        </Link>
        <Link className=' text-white hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/component/rvsn">
          {/* <NavbarLink>About</NavbarLink> */} adddata
        </Link>
      
      
      </NavbarLinks>

      <button className='  text-white md:hidden sm:block   '  onClick={toggleNavbar}><img className=' w-10  rounded-lg bg-white' src='/menu.png' alt='nv'/>
      </button>

    
    </NavbarContainer>
  );
};

export default Navbar;