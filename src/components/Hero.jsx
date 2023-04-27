const Hero = () => {
  return (
     <header className='w-full flex
     justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src="/ai4.png" alt="sumz_logo" className="w-28 object-contain" />

          <button
            type="button"
            onClick={() => window.open('https://www.linkedin.com/in/ernesti-sario-010b6a214/')} className="black_btn">
            My Profile
          </button>
        </nav>

        <h1 className="head_text"> Summarize Articles <br className="max-md:hidden" />
          <span className="shiny_deep_blue_gradient">In Seconds</span>
        </h1>
        <h2 className="desc">
          Simplify reading with EasySummarizer, an open-source tool transforming lengthy articles into concise summaries
        </h2>
     </header>
  )
}

export default Hero