import { Text,SimpleGrid,Box, Heading,Flex,Image } from "@chakra-ui/react";

export default function Counts(){
    return <div style={{width:'500px', margin:'20px auto'}}>
        <Box>
         <Text fontSize='4xl'>Bring a creative project to life.</Text>

         <div style={{width:'200px', margin:'30px auto', color:'#35636d'}}>
         <Text fontSize='md'>ON KICKSTARTER:</Text>
         </div>

         <div style={{width:'1200px',marginLeft:'-350px' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
         <SimpleGrid columns={3} spacing={0}>
           <Box paddingTop='20px' textAlign='center' borderWidth='1px' color='#35636d' width='400px' height='120px'>
            <Heading size='xl'>227,196</Heading>
            <Text fontSize='sm'>projects funded</Text>
           </Box>
           <Box paddingTop='20px' textAlign='center' borderWidth='1px' color='#35636d'  width='400px' height='120px'>
           <Heading size='xl'>$6,261,149,845</Heading>
            <Text fontSize='sm'>towards creative work</Text>
           </Box>
           <Box paddingTop='20px' textAlign='center' borderWidth='1px' color='#35636d'  width='400px' height='120px'>
           <Heading size='xl'> 69,897,561</Heading>
            <Text fontSize='sm'>pledges</Text>
           </Box>
         </SimpleGrid>
         </div>


         <div style={{ width:'1400px' , margin:'30px -350px',border:'1px'}}>
         <Flex>

           <Box  p='4' borderRight='1px'  width='700px'>
            <Heading  size='sm' style={{color:'#35636d'}}>Featured Projects</Heading>
            <Image marginTop='20px' boxSize='300px' height='350px' width='630px' src='https://ksr-ugc.imgix.net/assets/038/506/143/07610eba48f8094a86bb8c2a1bde3348_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1662479074&auto=format&frame=1&q=92&s=d3102fc822d4da9e3e1a50e1b21e195f' alt='image' />
            <Text  marginTop='20px' fontSize='3xl'>Glendalis</Text>
            <Text  marginTop='20px' fontSize='xl'>A young Latinx protagonist is joined by an active, supporting cast of friends and family in this new body of work from Angela Cappetta</Text>
           </Box>


           <Box p='4' width='500px'>
           <Heading size='xs' style={{color:'#35636d'}}>RECOMMENDED FOR YOU</Heading>

          <div style={{margin:'20px',textAlign:'left'}}>
           <Flex direction='column'>
            <Box margin='10px'>
                <Flex justifyContent='space-around'>
                    <Box>
                    <Image height='100px' width='150px' src="https://ksr-ugc.imgix.net/assets/038/642/968/e671a29c46ca3b44c2cf413b989dec99_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663645130&auto=format&frame=1&q=92&s=8f006e38b8f7cb43536abedd4f686cac" alt="ima" />
                    </Box>
                    <Box>
                    <Text  fontSize='xs'>The Natural History of Cryptid Creatures</Text>
                    <Heading  size='xs' style={{color:'#35636d'}}>84% funded</Heading>
                    <Text  fontSize='xs'>By Doctor Octoroc</Text>
                    </Box>
                </Flex>
            </Box>
            <hr />
            <Box margin='10px'> 
                  <Flex justifyContent='space-around'>
                    <Box>
                        <Image height='100px' width='150px' src="https://ksr-ugc.imgix.net/assets/038/293/083/04546b05736b828d0f8f6599029dedf5_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1660651327&auto=format&frame=1&q=92&s=8744df62afe3312e74b57b649942810f" alt="ima" />
                    </Box>
                    <Box>
                    <Text  fontSize='xs'>C:\Change - A Chiptune Tribute to Beck</Text>
                    <Heading  size='xs' style={{color:'#35636d'}}>84% funded</Heading>
                    <Text  fontSize='xs'>By Doctor Octoroc</Text>
                    </Box>
                </Flex>
                </Box>
            <hr />
            <Box margin='10px'>
            <Flex justifyContent='space-around'>
                    <Box>
                    <Image height='100px' width='150px' src="https://ksr-ugc.imgix.net/assets/038/722/513/3c377fc1d175b2111172ad6e96833d1d_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1664298425&auto=format&frame=1&q=92&s=1ae3593890fd55788ac861e3ab7bc00b" alt="ima" />
                    </Box>
                    <Box>
                    <Text  fontSize='xs'>OSCAR WILDE ON BLACK PAPER</Text>
                    <Heading  size='xs' style={{color:'#35636d'}}>84% funded</Heading>
                    <Text  fontSize='xs'>By Doctor Octoroc</Text>
                    </Box>
                </Flex>
            </Box>
           </Flex>
           </div>
           </Box>
         </Flex>
         </div>

    </Box>
    </div>
}