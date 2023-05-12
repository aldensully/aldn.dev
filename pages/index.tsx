import { SlideFade, Box, Button, Text, useColorModeValue, Flex, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import BlogPreviewBox from '../components/blog/blogPreviewBox';
import SearchBar from '../components/searchBar';
import Sidebar from '../components/sidebar';
import Snowfall from '../components/snowfall';


const WelcomeScreen = () => {
  return (
    <div className='bg-bg min-h-screen w-full flex p-5 align-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='flex flex-2 w-full justify-center flex-col items-center'>
          <div className='flex flex-col'>
            <text className='w-full flex-2 text-text text-lg font-bold'>Hi, I'm Alden</text>
            <text className='text-text text-md font-reg w-full md:max-w-[60%]'>This is my personal site and occasional brain dump.</text>
          </div>
          {/*<Link href={'/projects'}>
            <button className='items-center absolute left-[50%] bottom-[20%] translate-x-[-50%] justify-center w-[260px] h-[60px] bg-bg  border-fg rounded-small'>
              <text className='text-text text-sm font-reg'>Enter</text>
            </button>
          </Link>
		  */}
		  <div className='items-center flex flex-row gap-8 absolute left-[50%] bottom-[10%] translate-x-[-50%] justify-center w-[260px] h-[60px] bg-bg  border-fg rounded-small'>
			  <Link href={'/gameoflife'}>
				<button className='items-center justify-center  h-[60px] bg-fg w-[200px]  border-fg rounded-small'>
				  <text className='text-bg text-sm font-reg'>Game of Life</text>
				</button>
			  </Link>
			<Link href={'/playSpace'}>
				<button className='items-center justify-center ph-4  h-[60px] bg-fg w-[220px]  border-fg rounded-small'>
              <text className='text-bg text-sm font-reg'>Play space</text>
            </button>
			  </Link>
		  </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <WelcomeScreen />
  );
};

export default Home;
