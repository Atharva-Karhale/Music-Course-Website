import Footer from "./Footer"
import { Meteors } from "./ui/meteors"


function ContactPage() {
  return (
    <div className=" shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 overflow-hidden flex flex-col items-center justify-center">

        <h1 className=" text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-7xl mt-40">Contact Us</h1>
        
        <p className=" w-[40rem] text-center text-[#919191]">We`&apos;`re here to help with any questions about our courses, programs, or events. Reach out and let up know how we can assist you in your musical journey.</p>
        <form className=" flex flex-col mb-20">
            <input type="email" className="mt-8 bg-[#090909] px-8 py-3 text-teal-600 rounded-md w-[44rem] placeholder:text-[#666666]" placeholder="Your email address"/>
            
            <textarea rows={11} className="mt-8 bg-[#090909] px-8 py-3 text-teal-600 rounded-md w-[44rem] placeholder:text-[#666666]" placeholder="Your message"/>
        </form>
        <Meteors number={30} />

        <Footer />
    </div>
  )
}

export default ContactPage