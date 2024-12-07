'use client'
import Image from "next/image"
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  return (
    <section id="about" className="max-w-[1200px] px-4 mx-auto py-[140px] " data-aos="fade-up"
    data-aos-duration="3000">
        <div className="flex items-center flex-wrap gap-y-[120px]">
            <div className="relative">
            <Image src="/images/female.png" width={520} height={530} alt="female picture" />
            <div className="absolute -bottom-[100px]  flex justify-center w-full">
               <div>
               <h3 className="text-[26px] capitalize text-center">Veronica Korzh</h3>
                <span className="block text-sm text-[#65656f] mt-2 text-center">CEO and co-founder</span>
                <p className="mt-3 text-xs text-[#65656f] text-center max-w-[220px] w-full">Tech entrepreneur and creator, years of operations global engineering teams</p>
                <div className="flex items-center justify-center space-x-2 mt-5">
                    <Link href={'#'}><FaLinkedin /></Link>
                    <Link href={'#'}><FaXTwitter /></Link>
                </div>
               </div>
            </div>
            </div>
           
            <div className="relative ml-auto">
            <Image src="/images/man.png" width={520} height={530} alt="man picture" />
            <div className="absolute -bottom-[100px]  flex justify-center w-full">
               <div>
               <h3 className="text-[26px] capitalize text-center">Vova Lando</h3>
                <span className="block text-sm text-[#65656f] mt-2 text-center">CEO and co-founder</span>
                <p className="mt-3 text-xs text-[#65656f] text-center max-w-[220px] w-full">Software Architect and tech evangelist, years of work in various tech product companies</p>
                <div className="flex items-center justify-center space-x-2 mt-5">
                    <Link href={'#'}><FaLinkedin /></Link>
                    <Link href={'#'}><FaXTwitter /></Link>
                </div>
               </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About