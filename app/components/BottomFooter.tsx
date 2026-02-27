import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react'

const BottomFooter = () => {
  return (
    <Footer container className='rounded-none dark:bg-[#9CA3AF]'>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h1 className='font-title text-[26px]'>A Life That Inspired Mine</h1>
          <FooterLinkGroup>
            <FooterLink className='font-actor md:me-2 text-[20px]' href="/pages/about">About</FooterLink>
            <FooterLink className='font-actor md:me-2 text-[20px]' href="/pages/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright className='dark:text-white' href="#" by="Daniel Herrera™" year={2026} />
      </div>
    </Footer>
  )
}

export default BottomFooter