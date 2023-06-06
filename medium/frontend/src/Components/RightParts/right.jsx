import React from 'react'
import { HStack, Avatar, Heading ,Text} from '@chakra-ui/react'
import "./right.css";
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Right() {
    return (
        // <div style={{border:"1px solid red", width:"416px", margin:"auto", marginRight:"0px", position:"relative"}}>
            <div className='right' >
            <div>
                <button>Get unlimited access</button>
            </div>
            <div>
                <input type="text" id='search' placeholder="Search" />
            </div>
            <div className='li-tag'>
                <BsDot color='green' size='50px'/>
                <span>What We're Reading Today</span>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='xs' name='popo'  src='https://bit.ly/broken-link' />
                    <Heading as='h6' fontWeight={600} size='xs'>popo</Heading>
                </HStack>
                <Link to='/homepage/647f03282de134538ab96ea7'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Why Midlife Is Going to Be Especially Hard On Millennials</Heading>
                </Link>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='xs' name='ppman'  src='https://bit.ly/broken-link' />
                    <Heading as='h6' fontWeight={600} size='xs'>ppman</Heading>
                </HStack>
                <Link to='/homepage/647f07b02de134538ab96f2f'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Ted Lasso Will Be Back</Heading>
                </Link>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='xs' name='Abhinav Sharma'  src='https://bit.ly/broken-link' />
                    <Heading as='h6' fontWeight={600} size='xs'>Abhinav Sharma</Heading>
                </HStack>
                <Link to='/homepage/647f03282de134538ab96ea7'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Ensuring the Successful Launch of Ads on Netflix</Heading>
                </Link>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='xs' name='Spopobich'  src='https://bit.ly/broken-link' />
                    <Heading as='h6' fontWeight={600} size='xs'>Spopobich</Heading>
                </HStack>
                <Link to='/homepage/647f07b02de134538ab96f2f'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Bible Banned in Schools as Book Censorship Backfires Big Time</Heading>
                </Link>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='xs' name='Danma Ryuji'  src='https://bit.ly/broken-link' />
                    <Heading as='h6' fontWeight={600} size='xs'>Danma Ryuji</Heading>
                </HStack>
                <Link to='/homepage/647f07b02de134538ab96f2f'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>On the nature of elegance</Heading>
                </Link>
                <Text fontSize='xs' mt={4} color="green.500" cursor="pointer"> See the full list</Text>
            </div>
            <div className='topic'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Reading list</Heading>
                <Text fontSize='sm' mt={4} color="gray.600" cursor="pointer"> Click the  on any story to easily add it to your reading list or a custom list that you can share.</Text>
            </div>
        </div>
        // </div>
    )
}
