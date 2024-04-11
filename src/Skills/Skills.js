
// import "./Skills.css";

function TechStack({ image }) {
  // const [Python, Javascript, MySQL, Flask] = skills
  return (
    // changed classname to id to make the anchor work in the navbar when clicked
    // the id attribute is not unique! (seen error in the console)  

    <div>
      <h1 className="text-4xl font-bold text-center italic mt-5">TechStack</h1>
      <div className="flex flex-row flex-wrap justify-center p-5 bg-white ">
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />

          </div>
          <p className="text-xl">C#</p>
        </div>
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />
          </div>
          <p className="text-xl">ReactJS</p>
        </div>
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />
          </div>
          <p className="text-xl mb-20">Python</p>
        </div>
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />
          </div>
          <p className="text-xl mb-20">Flask</p>
        </div>
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">


            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

          </div>
          <p className="text-xl mb-20">Postman</p>
        </div>
        <div className="text-center relative">
          <div className="h-[150px] w-[150px] m-1 bg-inherit border-solid rounded-xl shadow-md flex justify-center items-center overflow-hidden">



            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" height="100px" width="100px" alt="" className="block bg-white p-2 mx-auto" />

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

          </div>
          <p className="text-xl mb-20">Docker</p>
        </div>
      </div>
    </div >
  );
}

export default TechStack; 
