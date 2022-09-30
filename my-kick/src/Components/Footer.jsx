import { SimpleGrid,Box ,Text, Container,Flex,Spacer} from "@chakra-ui/react"

export default function Footer(){
    return <div style={{marginTop:'0px'}}>
    <hr />
<Container marginTop='80px' maxW='900px'>
<SimpleGrid marginTop='20px' columns={3} spacing={8}>
 <Box  height='200px'>

 <Text marginTop='10px' fontWeight='bold' fontSize='sm'>ABOUT</Text>
 <Text marginTop='10px' fontSize='sm'>About us</Text>
 <Text marginTop='0px' fontSize='sm'>Our charter</Text>
 <Text marginTop='0px' fontSize='sm'>Stats</Text>
 <Text marginTop='0px' fontSize='sm'>Press</Text>
 <Text marginTop='0px' fontSize='sm'>Jobs</Text>
 </Box>
 <Box height='200px'>

 <Text marginTop='10px' fontWeight='bold' fontSize='sm'>SUPPORT</Text>
 <Text marginTop='10px' fontSize='sm'>Help Center </Text>
 <Text marginTop='0px' fontSize='sm'>Our Rules </Text>
 <Text marginTop='0px' fontSize='sm'>Creator Resources</Text>
 <Text marginTop='0px' fontSize='sm'>Forward Fund</Text>
 <Text marginTop='0px' fontSize='sm'>Brand assests</Text>
 </Box>
 <Box  height='200px'>

 <Text marginTop='10px' fontWeight='bold' fontSize='sm'>MORE FROM KICKSTARTER</Text>
 <Text marginTop='10px' fontSize='sm'>Newsletters</Text>
 <Text marginTop='0px' fontSize='sm'>Kickstarter Magazine</Text>
 <Text marginTop='0px' fontSize='sm'>The Creative Independent</Text>
 <Text marginTop='0px' fontSize='sm'>The Kickstarter Blog</Text>
 <Text marginTop='0px' fontSize='sm'>Mobile apps</Text>
 <Text marginTop='0px' fontSize='sm'>Research</Text>
 </Box>
</SimpleGrid>
</Container>
<hr />
<hr />
<hr />
<div style={{height:'60px',padding:'10px'}}>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Spacer />
  <Box marginLeft="-300px" p='2'>
    <Flex width='900px' justifyContent='space-between' alignItems='center' gap='2'>
         <Text fontSize='sm'>Trust & Safety</Text>
         <Text fontSize='sm'>Terms of Use</Text>
         <Text fontSize='sm'>Privacy Policy</Text>
         <Text fontSize='sm'>Cookie Policy</Text>
         <Text fontSize='sm'>Accessibility Statement</Text>
         <Text fontSize='sm'>CA Notice of Consent</Text>
    </Flex>
      </Box>
  <Spacer />
</Flex>
    </div>
</div>

}