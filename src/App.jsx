
import './App.css'
import Logo from './images/hamburger.png'
import kaifimg from './images/kaifimg.jpg'
import resume from './pdfs/Kaif_Khan_Frontend_Developer_Resume.pdf'
import instagram from './images/instagram.png'
import github from './images/github.png'
import home from './images/home.png'
import about from './images/about.png'
import skill from './images/skills.png'
import price from './images/price.png'
import contact from './images/contact.png'



function App() {

  return (
    <>
      <div className="absolute top-0 z-[-2] h-[full]  scroll-smooth w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] sm:h-[full]">
        <div>
        </div>
        <nav className='flex items-center justify-center  bg-white w-[100vw] h-16 fixed bottom-0 z-10 opacity-80' >
          <div>
            <ul className='w-60 gap-6 flex mx-14 my-7 items-end  '>
              <a href="#">
                <li>
                  <img src={home} alt="home" />
                  <div>
                  </div>
                </li>
              </a>
              <a href="#About">
                <li>
                  <img src={about} alt="about" />
                </li>
              </a>
              <a href="#skill">
                <li>
                  <img src={skill} alt="skill" />
                </li>
              </a>
              <a href="#pricing">
                <li>
                  <img src={price} alt="price" />
                </li>
              </a>
              <a href="#contact">
                <li>
                  <img src={contact} alt="contact" />
                </li>
              </a>
            </ul>
          </div>

          <div className=' hidden mx-9  my-9  w-13 float-right cursor-pointer h-9 absolute left-37 top-[-1.5rem] sm:left-[24rem] md:hidden'>
            <img src={Logo} alt="ham" className='w-9 mx-2' />
          </div>
        </nav>
        <div className='mx-auto my-36 mb-3 w-48 border-4 border-white rounded-[60rem]'>
          <img src={kaifimg} alt="my-img" className='rounded-[60rem]' />
        </div>
        <div className='mx-auto '>
          <p className='text-white font-bold font-sans text-2xl mx-7  leading-12 sm:mx-30 text-center '>
            Welcome to my Web
            Development Portofolio!
          </p>
        </div>
        <div className='mx-auto sm:px-11 '>
          <p className='text-gray-400 text-xl font-sans  text-balance mx-11 my-7 leading-10 sm:text-center  '>
            Im Kaif Khan, a passionate web developer based in India. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
          </p>
        </div>

        <div className='mx-10 sm:mx-46  md:mx-60 lg:mx-91 xl:mx-[31rem] 2xl:mx-[39rem]'>
          <a href="Kaif_Khan_Frontend_Developer_Resume.pdf" download={resume} >
            <button type="button" className='text-black font-bold font-sans text-center cursor-pointer bg-white w-full rounded-[7px] h-10 sm:w-full'>
              My Resume
            </button> </a>
        </div>
        <div id='About' >
          <section>
            <div className='text-center absolute my-40 mx-12 mb-9  underline text-3xl text-white font-sans font-extrabold'>
              About Me
            </div>
            <div className='text-gray-400 text-xl font-sans pr-2 text-balance mx-12 my-60  absolute leading-10'>
              <p>
                My name is kaif khan from mumbai india, I am front-End-Dveloper,use to work in diffrent web-technology<br></br>like Html Css java-script
                react.js  Framwork like Tailwind-Css handling the website front-end and use other tool kit like Git Git-Hub.
              </p>
            </div>
            <div className='text-center my-[45rem] mx-12 mb-9 absolute  underline text-3xl text-white font-sans font-bold sm:mt-[30rem] lg:mt-[25rem]'>
              My Resume
            </div>
            <div className='text-gray-400 text-xl font-sans pr-2 text-balance mx-12 my-[51rem]  absolute leading-10 sm:mt-[35rem] lg:my-[30rem]'>
              <p>
                Highly skilled and creative Web Developer with 5+ years of experience in<br></br>crafting visually stunning and functionally robust websites and web applications.
              </p>
            </div>
            <div className='text-center my-[70rem] mx-12 mb-9 absolute  underline text-3xl text-white font-sans font-bold sm:mt-[50rem] lg:mt-[40rem]'>
              Social Media
            </div>
            <div>
              <ul>
                <li className='absolute my-[75rem] mx-11 sm:mt-[55rem] lg:mt-[45rem]'>
                  <img src={instagram} alt="instagram-logo" />
                </li>
                <li className='absolute my-[75rem] mx-30 sm:mt-[55rem] lg:mt-[45rem]'>
                  <img src={github} alt="instagram-logo" />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div >
          <section>
            <div className=' text-center my-[83rem] mb-0 text-2xl text-white font-sans font-bold sm:my-[65rem] sm:mb-0 lg:my-[54rem] lg:mb-0' >
              <p id='skill' className=''>my skill</p>
            </div>
            <div className='text-white text-center my-8 text-5xl font-bold'>
              What I do
            </div>
            <div>
              <p className='text-gray-400 text-center mx-6 text-xl leading-9 my-4'>
                I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.<br></br>Discover below how I can help you.
              </p>
            </div>
            <div className=''>
              <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div className="p-6 grid justify-center text-center">
                    <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                        <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clipRule="evenodd">
                        </path>
                      </svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2">Frontend Web Development:</h5>
                    <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400">Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.</p>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div className="p-6 grid justify-center text-center">
                    <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                        <path fillRule="evenodd" d="M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0112.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 01-1.395-.551A21.69 21.69 0 0018.75 10.5 6.75 6.75 0 0012 3.75zM6.157 5.739a.75.75 0 01.21 1.04A6.715 6.715 0 005.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 01-1.27-.8A6.715 6.715 0 003.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 011.04-.211zM12 7.5a3 3 0 00-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 11-1.112-1.008A10.459 10.459 0 007.5 10.5a4.5 4.5 0 119 0c0 .547-.022 1.09-.067 1.626a.75.75 0 01-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 00-3-3zm0 2.25a.75.75 0 01.75.75A15.69 15.69 0 018.97 20.738a.75.75 0 01-1.14-.975A14.19 14.19 0 0011.25 10.5a.75.75 0 01.75-.75zm3.239 5.183a.75.75 0 01.515.927 19.415 19.415 0 01-2.585 5.544.75.75 0 11-1.243-.84 17.912 17.912 0 002.386-5.116.75.75 0 01.927-.515z" clipRule="evenodd">
                        </path>
                      </svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2">Mobile App Development</h5>
                    <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400"> I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS &amp; Android devices. From concept to deployment, I handle every stage of the development process.</p>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div className="p-6 grid justify-center text-center">
                    <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd">
                        </path>
                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z">
                        </path>
                      </svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2">Technology Stack</h5>
                    <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400">I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</p>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none"><div className="p-6 grid justify-center text-center">
                  <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                      <path fillRule="evenodd" d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2"> Web Optimization</h5>
                  <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400">Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.</p>
                </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none"><div className="p-6 grid justify-center text-center">
                  <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd">
                      </path>
                    </svg>
                  </div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2">User-Centric Design</h5>
                  <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400">My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.</p>
                </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div className="p-6 grid justify-center text-center">
                    <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" strokeWidth="2">
                        <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd">

                        </path>
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z">
                        </path>
                      </svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2">Testing and Quality Assurance</h5>
                    <p className="block antialiased font-sans text-base leading-relaxed  px-8 font-normal !text-gray-400">I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='' id='pricing'>
          <div className='text-center text-white text-2xl mt-40 font-bold font-sans'>
            Pricing
          </div>


          <section className="py-20 text-white bg-white w-[84vw] justify-center mx-[2rem] my-20 rounded-2xl sm:w-[90vw] md:w-[92vw] 
          xl:w-[70vw] xl:mx-[13rem] 2xl:mx-[14rem] ">
            <div className="max-w-5xl mx-auto px-5 sm:px-10">
              <h2 className="text-3xl font-bold mb-10 text-center text-black">Pricing Plans</h2>
              <div className="grid gap-8 md:grid-cols-3">

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-center">Basic</h3>
                  <p className="text-4xl font-bold text-center mb-4">$0<span className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                  <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>1 Page Website</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Responsive Design</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Basic SEO</li>
                  </ul>
                  <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose Plan</a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col border-2 border-indigo-600 dark:border-indigo-400 relative">
                  <span className="absolute top-0 right-0 bg-indigo-600 text-white text-sm px-3 py-1 rounded-bl-md rounded-tr-md">Most Popular</span>
                  <h3 className="text-xl font-semibold mb-4 text-center">Pro</h3>
                  <p className="text-4xl font-bold text-center mb-4">$199<span className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                  <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Up to 5 Pages</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Advanced SEO</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Custom Design</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text4821-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>1 Month Support</li>
                  </ul>
                  <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose Plan</a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-center">Enterprise</h3>
                  <p className="text-4xl font-bold text-center mb-4">$499<span className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                  <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Unlimited Pages</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>E-commerce Integration</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Priority Support</li>
                    <li className="mb-2 flex items-center"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Analytics Setup</li>
                  </ul>
                  <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose Plan</a>
                </div>
              </div>
            </div>
          </section>
          <div id='contact'>
            <section className="px-8 py-16">
              <div className="container mx-auto mb-20 text-center">
                <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white mb-4">Contact Us</h1>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed  mx-auto w-full lg:w-5/12 !text-gray-400">Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.</p>
              </div>
              <div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50">
                  <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
                    <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-black">
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">Contact Information</h4>
                      <p className="block antialiased font-sans font-normal  mx-auto mb-8 text-base !text-gray-400">Fill up the form and our Team will get back to you within 24 hours.</p>
                      <div className="flex gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd">
                          </path>
                        </svg>
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">+91(750) 686 0428</h6>
                      </div>
                      <div className="flex my-2 gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z">
                          </path>
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z">
                          </path>
                        </svg>
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">kaifkhan51371@gmail.com</h6>
                      </div>
                      <div className="flex mb-10 gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                          <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd">
                          </path>
                        </svg>
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">Open Support from Me</h6>
                      </div>
                      <div>
                        <ul className='flex gap-3'>
                          <li className='  '>
                            <img src={instagram} alt="instagram-logo" />
                          </li>
                          <li className=''>
                            <img src={github} alt="instagram-logo" />
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-5">
                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i className="fa-brands fa-facebook text-lg">
                            </i>
                          </span>
                        </button>
                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i className="fa-brands fa-instagram text-lg">
                            </i>
                          </span>
                        </button>
                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-github text-lg">
                          </i>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                      <form action="#">
                        <div className="mb-8 grid gap-4 lg:grid-cols-2">
                          <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-3 md:mb-0">
                            <input placeholder="eg. kaif" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal  outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900" name="first-name">
                            </input>
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">First Name </label>
                          </div>
                          <div className="relative w-full min-w-[200px] h-12 !min-w-full">
                            <input placeholder="eg. khan" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal  outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900" name="last-name">
                            </input>
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Last Name
                            </label>
                          </div>
                        </div>
                        <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-8">
                          <input placeholder="eg. kaifkhan51371@mail.com" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal  outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900" name="first-name">
                          </input>
                          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Email
                          </label>
                        </div>
                        <p className="block antialiased font-sans font-normal text-inherit !text-blue-gray-500 text-sm mb-2">What are you interested on?</p>
                        <div className="-ml-3 mb-14 ">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor=":r0:">
                              <input className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-gray-900 checked:border-gray-900 checked:before:bg-gray-900" id=":r0:" type="radio" checked="" name="type">
                              </input>
                              <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8">
                                  </circle>
                                </svg>
                              </span>
                            </label>
                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor=":r0:">Design</label>
                          </div>
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor=":r1:">
                              <input className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-gray-900 checked:border-gray-900 checked:before:bg-gray-900" id=":r1:" type="radio" name="type">
                              </input>
                              <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8">
                                  </circle>
                                </svg>
                              </span>
                            </label>
                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor=":r1:">Development</label>
                          </div>
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor=":r2:">
                              <input className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-gray-900 checked:border-gray-900 checked:before:bg-gray-900" id=":r2:" type="radio" name="type">
                              </input>
                              <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8">
                                  </circle>
                                </svg>
                              </span>
                            </label>
                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor=":r2:">Support</label>
                          </div>
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor=":r3:">
                              <input className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-gray-900 checked:border-gray-900 checked:before:bg-gray-900" id=":r3:" type="radio" name="type">
                              </input>
                              <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8">
                                  </circle>
                                </svg>
                              </span>
                            </label>
                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor=":r3:">Other</label>
                          </div>
                        </div>
                        <div className="relative w-full min-w-[200px] !min-w-full mb-8">
                          <textarea name="first-name" className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal  outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900 !resize-none" placeholder=" ">
                          </textarea>
                          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-1 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">Your Message</label>
                        </div>
                        <div className="w-full flex justify-end">
                          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-black text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full md:w-fit" type="button">Send message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer>

          <div className='text-white font-sans font-light my-25 text-2xl text-center'>
            Copyright©2025,kaifkhan.All Right Reserved.
          </div>
        </footer>
      </div>
    </>

  )
}
export default App

