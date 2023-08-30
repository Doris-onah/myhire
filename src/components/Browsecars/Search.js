

function Search() {
    return (
        <div className="w-full md:h-[250px] h-[100px] flex items-center justify-center">
           <div className="flex md:w-[90%] w-[80%] md:h-[90%]  flex-col items-center justify-center">

                <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <h1 className="md:text-4xl hidden md:block font-bold text-white">What are you looking for?</h1>
                   
                     <input type="text" placeholder="Search"  autoComplete="search"
                      className="w-[100%] md:w-[1000px] md:h-[70px] h-[50px] border-2 
                      border-gray-200 bg-inherit px-5 hidden md:block
                      rounded-lg text-sm focus:outline-none"/>

                    <input type="text" placeholder="What are you looking for?"  autoComplete="LOOKING FOR"
                      className="w-[100%] md:w-[1000px] md:h-[70px] h-[50px] border-2 
                      border-gray-300 bg-white px-5 md:hidden block
                      rounded-lg text-sm focus:outline-none"/>
                        </div>
                         </div>
                  
        </div>
    );
}
export default Search;