export default function ProjectPage({ params }) {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
              {params.projectName}
            </h2>
        
            <div className="mt-3 py-6 px-4">
              <div className="grid grid-rows-2 grid-flow-col gap-4 ">
                 {/* <h5 className="text-xl font-semibold mb-2">xxx</h5>
                 <p className="text-[#ADB7BE]">description</p> */}
                 <div className="w-1/4">123</div>
                 <div className="w-1/4">123</div>
              </div>
            </div>
        </>
        
    );
  }