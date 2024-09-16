import React from 'react';
import Button from '../../shared/Button';

const Vision = () => {
  return (
    <div className='px-10 mt-8 lg:mt-52 relative pb-[430px] lg:pb-[550px] 2xl:pb-[800px]' id="vision">
        <div className='max-w-full lg:max-w-2xl 2xl:max-w-[800px] max-lg:flex max-lg:items-center max-lg:flex-col text-center'>
            <h2 className='uppercase'>Vision</h2>
            <h3 className='pt-8 pb-4 lg:pb-2 font-bold leading-tight tracking-normal font-dmsans text-lg lg:text-2xl 2xl:text-3xl'>DeRent's mission to revolutionize real estate using blockchain technology.</h3>
            <p>We are pioneering a new era of real estate, where transactions are accessible, efficient, and inclusive. By leveraging cutting-edge technology, we're building a vibrant community that connects property owners, tenants, investors, and developers worldwide. Our platform offers a comprehensive suite of tools and resources to navigate the complexities of the real estate market with ease. As we continue to grow, DeRent remains dedicated to redefining real estate for the digital age.</p>
            <div className="flex items-center gap-4 mt-8">
              <Button
                label="How to Buy"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal"
              />
              <Button
                label="Learn More"
                variant="secondary"
                icon="/img/Info.svg"
                alt="info"
                onClick={() => {}}
                position="end"
                className="uppercase  font-display font-normal"
              />
            </div>
            
        </div>
        <div className='absolute top-12 right-0 w-[400px] h-[400px] max-lg:hidden'>
                <img src='/img/Linked_Path_Group.png' alt="Linked_Path" className='w-full'/>
            </div>
        <div className='howwItBg absolute bottom-56 left-0 right-0'></div>
    </div>
  );
};

export default Vision;
