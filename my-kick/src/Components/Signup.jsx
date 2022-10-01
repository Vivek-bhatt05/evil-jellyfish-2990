import {FormControl,Input, Container,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Cato from '../Components/Cato';
import Footer from '../Components/Footer';

export default function Signup(){
    return <div style={{backgroundColor:'#f7f7f6',height:'700px' ,paddingTop:'70px'}}>
    <Container paddingTop='20px' backgroundColor='white' maxW='400px'>
      <FormControl  >
      <Text margin='12px 0px' marginLeft='70px' fontSize='lg'>Have an account? <Link to='/login'>Log in</Link></Text>
    <hr />

    <Text marginTop='10px'   fontSize='2xl'>Sign up</Text>
    <Input marginTop='10px' type='text' placeholder='Name' />
    <Input marginTop='10px' type='email' placeholder='Email' />
    <Input marginTop='10px' type='password' placeholder='Password' />
    <Input backgroundColor='#005737' color='white' marginTop='10px' type='submit' value='Create account' />
    <Text marginTop='10px' marginLeft='10px' fontSize='xs'>By signing up, you agree to our Privacy Policy, Cookie Policy and Terms of Use.</Text>
    <Text marginTop='10px' marginLeft='170px'   fontSize='sm'>or</Text>
    <Input backgroundColor='black' color='white' marginTop='10px' type='submit' value='Sign in with Apple' fontWeight='bold' />
  
    <hr />
    <hr />
  </FormControl> 
  </Container>
      <Cato />
     <hr />
     <Footer />
       </div>
}