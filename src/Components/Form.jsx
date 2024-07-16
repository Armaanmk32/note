

function Form({handle}){


   

    return <div className="bg-gray-500 h-screen absolute w-full top-0">
    <div  className="sm:py-12 py-6 sm:px-12 flex justify-center">

        <form className="bg-SecondColor rounded h-[300px] mt-32  sm:h-[350px] w-[290px] sm:w-[350px]">
        <i onClick={handle} class="fa-solid text-black  text-2xl ml-64 sm:ml-[310px] mt-0 sm:mt-4 fa-x"></i>
            
            <br />

            <input className="border-2 w-[240px] sm:w-[300px] ml-6 sm:ml-6 mt-0 sm:mt-3 border-black rounded" type="name" placeholder="enter you name" />
            <br />
            <br />
            <textarea className="border-2 w-[240px] sm:w-[300px] ml-6 sm:ml-6 border-black rounded" rows={6}  placeholder="Enter title" />
           
            <br />
            <br />
            <button className="sm:w-[300px] w-[240px] bg-PrimeryColor rounded ml-6 sm:ml-6 text-2xl text-SecondColor">Save</button>
        </form>

    </div>

   
    </div>
}
export default Form