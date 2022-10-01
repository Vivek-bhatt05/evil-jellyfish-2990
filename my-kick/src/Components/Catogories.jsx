import { Flex,Box , Spacer ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Catogories(){
    return <div style={{height:'60px',padding:'10px',color:'#35636d'}}>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Spacer />
  <Box p='2'>
    <Flex width='900px' justifyContent='space-between' alignItems='center' gap='2'>
         <Link to='/arts'><Text fontSize='lg'>Arts</Text></Link>
         <Link to='/comic'><Text fontSize='lg'>Comics & Illustration</Text></Link>
         <Link to='/design'><Text fontSize='lg'>Design & Tech</Text></Link>
         <Link to='/film'><Text fontSize='lg'>Film</Text></Link>
         <Link to='/food'><Text fontSize='lg'>Food & Craft</Text></Link>
         <Link to='/game'><Text fontSize='lg'>Games</Text></Link>
         <Link to='/music'><Text fontSize='lg'>Music</Text></Link>
         <Link to='/publish'><Text fontSize='lg'>Publishing</Text></Link>
    </Flex>
      </Box>
  <Spacer />
</Flex>
    </div>
}