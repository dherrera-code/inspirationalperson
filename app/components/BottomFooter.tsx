import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="A Life that Inspires title"
            name="A Life that Inspires"
          /> */}
          <h1 className='font-title text-[26px]'>A Life That Inspired Mine</h1>
          <FooterLinkGroup>
            <FooterLink href="/pages/about">About</FooterLink>
            {/* <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink> */}
            <FooterLink href="/pages/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Daniel Herrera™" year={2026} />
      </div>
    </Footer>
  )
}

export default BottomFooter