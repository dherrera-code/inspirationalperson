import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react'

const BottomFooter = () => {
  return (
    <Footer container className='rounded-none bg-[#9CA3AF] dark:bg-[#9CA3AF] text-shadow-white'>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h1 className='font-title text-[26px] text-white'>A Life That Inspired Mine</h1>
          <FooterLinkGroup className='text-white'>
            <FooterLink className='font-actor md:me-2 text-[20px]' href="/pages/about">About</FooterLink>
            <FooterLink className='font-actor md:me-2 text-[20px]' href="/pages/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright className='text-white dark:text-white' by="Daniel Herrera™" year={2026} />
      </div>
    </Footer>
  )
}

export default BottomFooter