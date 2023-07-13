import React from 'react';

const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29] '>
            <div>
                <div>
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12' >Hello I'm</h6>
                        <h1 className='font-semibold ext-3xl md:text-5xl my-4'> Michał Kuczyński</h1>
                        <p className='md:w-96'>Freelance UI designer , Fullstack developer, & Data Analyst.
                        I create seamless web experiences for end-users</p>
                        <div className='mt-5'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>
                                About me</button>
                            <button className='btn outline px-6 py-1.5 rounded border-none text-white ml-5'>Projects</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;