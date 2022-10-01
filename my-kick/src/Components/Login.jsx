import {FormControl,FormHelperText,Input, Container,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Cato from '../Components/Cato';
import Footer from '../Components/Footer';


export default function Login(){
    return <div style={{backgroundColor:'#f7f7f6',height:'700px' ,paddingTop:'70px'}}>
  <Container paddingTop='20px' backgroundColor='white' maxW='400px'>
    <FormControl  >
  <Text marginTop='10px'   fontSize='2xl'>Log in</Text>
  <Input marginTop='10px' type='email' placeholder='Email' />
  <Input marginTop='10px' type='password' placeholder='Password' />
  <FormHelperText>Forgot your password?</FormHelperText>
  <Input backgroundColor='#005737' color='white' marginTop='10px' type='submit' value='Log in' />
  <Text marginTop='10px' marginLeft='170px'   fontSize='sm'>or</Text>
  <Input backgroundColor='black' color='white' marginTop='10px' type='submit' value='Sign in with Apple' fontWeight='bold' />
  <Input backgroundColor='#354e86' color='white' margin='10px 0px' type='submit' value='Continue with Facebook' />

  <hr />
  <hr />
  <Text marginTop='10px' marginLeft='70px' fontSize='lg'>New to Kickstarter? <Link to='/signup'>Sign up</Link></Text>
  <hr />
  <hr />
  <Text marginTop='10px' marginLeft='10px' fontSize='xs'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</Text>
</FormControl> 
</Container>
    <Cato />
   <hr />
   <Footer />
     </div>
}