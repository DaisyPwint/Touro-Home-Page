
export default function ContentSection() {
  return (
    <section className="lg:pt-36 md:pt-32 pt-28 flex flex-col items-center">
      <h1 className='text-2xl md:text-3xl font-bold pb-16'>Sign up to our newsletter</h1>
      <form className="bg-white rounded-xl shadow-md flex items-center gap-3 md:h-20 h-16 md:w-9/12 w-full overflow-hidden">
        <input type="email" placeholder="Enter Your Email Here" className="w-3/4 pl-8 font-medium outline-none" />
        <div className='w-1/4'>
          <button className='bg-blue-400 text-white w-full overflow-hidden h-16 md:h-20 md:rounded-br-xl md:rounded-tr-xl'>Submit</button>
        </div>
      </form>    
    </section>
  )
}
