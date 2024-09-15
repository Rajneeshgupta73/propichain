import React from 'react';
import Button from '../shared/Button';

const Vision = () => {
  return (
    <div className='px-10 mt-72 relative pb-[800px]'>
        <div className='max-w-2xl 2xl:max-w-[1000px]'>
            <h2 className='uppercase'>Vision</h2>
            <h3 className='pt-8 pb-2 font-bold leading-tight tracking-normal font-dmsans'>DeRent's mission to revolutionize real estate using blockchain technology.</h3>
            <p className='text-2md font-medium'>We are pioneering a new era of real estate, where transactions are accessible, efficient, and inclusive. By leveraging cutting-edge technology, we're building a vibrant community that connects property owners, tenants, investors, and developers worldwide. Our platform offers a comprehensive suite of tools and resources to navigate the complexities of the real estate market with ease. As we continue to grow, DeRent remains dedicated to redefining real estate for the digital age.</p>
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
        <div className='absolute top-0 right-0 w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px]'>
                <img src='/img/Linked_Path.png' alt="Linked_Path" className='w-full'/>
            </div>
        <div className='absolute bottom-0 right-0 left-0'>
            <img src='/img/Ресурс 2_1_4.png' alt="shape"/>
        </div>
    </div>
  );
};

export default Vision;
