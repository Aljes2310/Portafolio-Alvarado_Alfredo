import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { ContactUs } from './components/contact';

function App() {

  return (
    <div>
      <main className=''>
      <section className="sm:min-h-screen sm:bg-gradient-to-r sm:from-purple-800 sm:to-rose-400
      bg-gradient-to-b from-cyan-800 to-red-400 w-full h-full"> {/* h: height */}
        <nav className='sm:py-10 sm:mb-12 flex justify-center pt-10 sm:justify-end  ml-14 sm:ml-0'>
        <h1 className="font-serif"></h1>
          <ul className='flex flex-row'>
            <li className='bg-gradient-to-r from-blue-400 to-cyan-500 p-2 ml-3 
            text-center rounded-md mr-20 w-36 h-full font-bold'> <a  target= "_blank" href="https://www.canva.com/design/DAFaBBkz7nc/77GLSvQ1JlWd8v9M8gAjUg/view?utm_content=DAFaBBkz7nc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"> 
            Resume - CV </a></li>
          </ul>
        </nav>
        <div className="justify-center px-10 py-6 ml-12 sm:ml-0 text-center">
          <div className=' flex sm:flex-row justify-center flex-col'>
            <div className='basis-1/2 text-center'> 
          <h2 className='font-serif sm:text-7xl text-white sm:mt-8 text-4xl mt-10 mr-12 sm:mr-0'>Alfredo Alvarado</h2>
          <h3 className='sm:mt-5 sm:text-4xl text-3xl font-bold sm:ml-0  mt-3 mr-12 '>Back End Developer </h3>
          <p className='mt-5 sm:text-2xl mr-12 sm:mr-0 text-center'>Hi! I'm Alfredo, this is my personal portfolio created with
          Vite+React 
          and Tailwindcss. It's deployed using Vercel.</p>
            <div className='flex flex-row sm:px-10 mt-10 gap-4 justify-center mr-10 sm:mr-0'>
            <img src="/vite.svg" width="50" alt="50"/> <span className='text-4xl'> + </span> 
            <img src='/react.svg' width="50" alt="50" /><span className='text-4xl'> + </span> 
            <img src='/tailwind.png' width="50" alt="50"/>
            </div>
          </div>
            <div className='border border-purple-800 bg-gradient-to-b from-purple-800 to-rose-400 overflow-hidden  sm:w-48
            rounded-full sm:h-64 sm:mr-36 sm:mt-10 mt-10 mr-20 h-60 w-40 hidden lg:hidden'> {/* hidden lg:block ocultar en telefono */}
            <img src="" 
            className='basis-1/4 sm:basis-1/2 overflow-hidden h-60 w-40 sm:w-64 sm:h-64  mr-20 hidden lg:hidden' ></img>
            </div>
          </div>
        </div>

        <div className='flex flex-row mr-1 sm:mr-0 mt-10 pb-10 gap-x-10 text-5xl justify-center sm:mt-20 sm:pb-10 sm:pl-10' >
        
          <a href="https://www.linkedin.com/in/alfredo-alvarado-espinoza-31058422a/" target="_blank"><AiFillLinkedin/></a>
          <a href="https://github.com/Aljes2310" target="_blank"><BsGithub/> </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aljes2310@gmail.com" target="_blank"><AiOutlineMail/></a>
          </div>
        

        </section>

        {/*languages */}

        <section className="sm:min-h-screen bg-gradient-to-b from-purple-800 to-rose-400">
         
          <div className='text-center sm:pt-20 pb-20 pt-5 ml-10 sm:ml-0'>
            <h3 className='sm:text-5xl sm:text-center mt-10 text-white font-bold sm:ml-26 text-3xl text-center sm:mr-5 px-8 mr-14'>Languages, frameworks and tools</h3>
            <p className='sm:mt-16 mt-10 px-8 mr-14 sm:px-60 sm:justify-center font-serif sm:text-2xl text-white'>My core is Back End Development, so I know in deep about <span className='text-black  sm:text-2xl'> Python </span> (django, Flask), <span className='text-black  sm:text-2xl'>Javascript/Typescript </span>(Express, nodejs), <span className='text-black'> SQL</span> (mysql, postgresql), NOSQL (Mongodb), ORM (Prisma), Git (Work in Team).    
            <span className='text-black sm:text-2xl'> Also, I have a basic Front End knowledge in React, Boostrap, Html, Tailwindcss. </span>
            </p>
            <div className='mt-10 flex flex-row sm:flex-col gap-x-1 sm:gap-x-0 mr-20 sm:mr-0'>
              {/* python */}
              <div className='flex sm:flex-row sm:gap-x-20 sm:mt-10 sm:ml-0 sm:justify-center flex-col gap-y-10 ml-10'> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" className='sm:h-28 sm:w-28 h-20 w-20 pt-6'/> 
            <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" className='sm:h-28 sm:w-28 h-20 w-20' />
            </div>
            {/* javascript */}
            <div className='flex sm:flex-row sm:gap-x-20 sm:mt-10 sm:ml-0 sm:justify-center flex-col gap-y-10 ml-10'>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className='sm:h-28 sm:w-28 h-20 w-20'/> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" className='sm:h-28 sm:w-28 h-20 w-20'/> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" className='sm:h-28 sm:w-28 h-20 w-20'/>
            </div>
              {/* base de datos */}
            <div className='flex sm:flex-row sm:gap-x-20 sm:mt-10 sm:ml-0 sm:justify-center flex-col gap-y-10 ml-10'>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className='sm:h-28 sm:w-28 h-20 w-20'/> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className='sm:h-28 sm:w-28 h-20 w-20'/> 
            <img src="https://prismalens.vercel.app/header/logo-dark.svg" className='sm:h-28 sm:w-28 h-20 w-20'></img>
              </div>
                {/* front end basico */}

                <div className='flex sm:flex-row sm:gap-x-20 sm:mt-10 sm:ml-0 sm:justify-center flex-col gap-y-10 ml-10'>
          
            <img src='/react.svg' className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src='/tailwind.png' className='sm:h-28 sm:w-28 h-20 w-20' />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className='sm:h-28 sm:w-28 h-20 w-20'/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className='sm:h-28 sm:w-28 h-20 w-20'/>
                  </div>
                
            </div>
          </div>
        </section>

        {/* seccion proyectos? */}

        <section className="sm:min-h-screen bg-gradient-to-b from-purple-800 to-rose-400 pb-10">
        
          <h3 className='pt-20 font-bold text-5xl text-center text-white mr-1 sm:mr-0'> Projects</h3>
      <p className='text-center sm:text-2xl font-serif mt-12 text-white px-16 mr-3 sm:px-0 smmr-0'> The following projects was made during Back End Bootcamp using several languages and tools </p>
      <div className='flex sm:flex-row sm:gap-x-20 sm:mt-14 justify-center  border-black flex-col sm:mb-10'> 

      {/* card 1 */}
          <div class="border-4 sm:max-w-sm rounded overflow-hidden shadow-xl mt-10 content-center border-indigo-900 border-double sm:p-5 p-2 ml-10 sm:m-0 mr-10 sm:mr-0">
  <a href='https://health-tracker-frontend-peach.vercel.app/' target="_blank"> <img class="h-full w-full sm:ml-0 sm:w-full sm:h-60 mr-10" src="/health.JPG"/></a>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">Health Tracker</div>
    <p class=" text-sm mt-5 text-center text-white sm:text-base">
      App web that help you to remember your medication or pills easily. Just fill out the form with the start and final date, hours interval , text and you will recieve a recordatory message at the exact time that you need to take you medicine.
    </p>
  </div>
  <div class="sm:px-6 sm:pt-4 sm:pb-2 sm:gap-x-10 grid grid-cols-2 text-center">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Twilio</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
  </div>
</div>
{/* card 2 */}
<div class="border-4 sm:max-w-sm rounded overflow-hidden shadow-xl mt-10 content-center border-indigo-900 border-double sm:p-5 p-2 ml-10 sm:m-0 mr-10 sm:mr-0">
  <a href='https://github.com/RenatoCespedes/playlist-project' target="_blank">   <img class="h-full w-full sm:ml-0 sm:w-full sm:h-60 mr-10" src="/headphone.JPG"/></a>
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 text-center">Playlist API</div>
    <p class=" text-sm mt-5 text-center text-white sm:text-base">
      API REST TypeScript + Express. Models created by Prisma as ORM . Using this API REST you can save your music and create Playlist
      through json requests.  <span className='text-black'>Click on the screen you will get to the repository in github.</span>
    </p>
  </div>
  <div class="sm:px-6 sm:pt-4 sm:pb-2 sm:gap-x-10 grid grid-cols-2 text-center sm:mt-6">
  <span class="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</span>
    <span class="inline-block pt-3 sm:pt-0 bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
    <span class="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JWT - bycript</span>
  </div>
</div>

{/* card 3 */}
<div class="border-4 sm:max-w-sm rounded overflow-hidden shadow-xl mt-10 content-center border-indigo-900 border-double sm:p-5 p-2 ml-10 sm:m-0 mr-10 sm:mr-0">
  <a href='https://github.com/Aljes2310/API-Pagos-Servicios' target="_blank">   <img class="h-full w-full sm:ml-0 sm:w-full sm:h-60 mr-10 bg-white" src="https://www.django-rest-framework.org/img/logo.png"/></a>
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 text-center">Payments API</div>
    <p class=" text-sm mt-5 text-center text-white sm:text-base">
      API REST Django. Using this API REST you can create and modify your services, make payments for services, show payments. 
      <span className='text-black'> Click on the screen you will get to the repository in github.</span>
    </p>
  </div>
  <div class="sm:px-6 sm:pt-4 sm:pb-2 sm:gap-x-10 grid grid-cols-2 text-center sm:mt-10">
  <span class="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Django</span>
    <span class="text-center bg-gray-200 rounded-full px-1 py-1  font-semibold text-gray-700 mr-2 mb-2">sqlite</span>
    <span class="inline-block bg-gray-200 rounded-full  px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">rest-framework</span>
    <span class="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-center">JWT</span>
  </div>
</div>


</div>
        </section>
        
   {/* contact */}

    <section className="     sm:min-h-screen bg-gradient-to-b from-purple-800 to-rose-400 pb-10">
      <h1 className='pt-20 font-bold sm:text-5xl text-center text-white text-4xl sm:mr-0 mr-2'> Contact me </h1>
      
      <div className="sm:h-full sm:w-full flex sm:flex-row sm:justify-right sm:min-h-screen overflow-hidden 
      sm:content-center sm:pt-10 sm:px-0 flex-col text-center sm:text-left mr-2 sm:ml-44 sm:basis-1/2">
      <div>
      <ContactUs/>
      </div>
      
      <div className='border-4 border-purple-800 sm:ml-60 sm:mt-60 bg-gradient-to-b from-purple-800 to-rose-400 
       rounded-full sm:w-96 sm:h-96 overflow-hidden h-36 w-36 ml-32'>
        <img src="/yoimiya.png" 
        className='h-36 w-36  sm:w-96 sm:h-96  overflow-hidden '/>
      </div>
      </div>
      
      
    </section>


      </main>
    </div>
  )
} 

export default App
