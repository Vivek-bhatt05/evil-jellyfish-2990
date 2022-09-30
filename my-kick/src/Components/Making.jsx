import { SimpleGrid,Box ,Text, Container,Image} from "@chakra-ui/react"

export default function Making(){
    return <div style={{marginTop:'20px'}}>
    <Container maxW='1300px'>

   <Text fontSize='sm'>THE MAKING OF</Text> 


    <SimpleGrid marginTop='20px' columns={4} spacing={8}>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/035/690/724/3e458d2659d6527d4fd6f07ff59575b7_original.jpg?ixlib=rb-4.0.2&w=700&fit=max&v=1637871724&gif-q=50&q=92&s=9dbe3c1c61c7675597a04bfc695919b3' alt='Dan Abramov' />
     <Text marginTop='10px' fontSize='xl'>Uusi's Secrets for Kickstarter Success</Text>
     <Text marginTop='10px' fontSize='sm'>Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text>
     </Box>
     <Box height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/032/807/542/3180197e9c98c293317ea1f958976633_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1616194025&gif-q=50&lossless=true&s=59e94db5beedbe4dca5d7dc2eeea93e7' alt='Dan Abramov' />
     <Text marginTop='10px' fontSize='lg'>Composer Christopher Tin wants to create an album to commemorate extinct birds</Text>
     <Text marginTop='10px' fontSize='sm'>The Grammy-winning artist is back with a requiem that offers some hope—and a warning—for the planet’s future.</Text>
     </Box>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/032/807/378/63501c9b394f6ec6fde1ad4b6d25cc2b_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1616192713&gif-q=50&lossless=true&s=fbd2ec0bec2e20b71632e8c1b2699466' alt='Dan Abramov' />
     <Text marginTop='10px' fontSize='lg'>9 creators share advice from their journeys to help guide yours</Text>
     <Text marginTop='10px' fontSize='sm'>Over the last several weeks, we hosted a series of small workshops for creators of color and marginalized genders in the UK, in collaboration with gal-dem magazine. Here, we open up some of the insights and advice from those sessions to all.</Text>
     </Box>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/032/699/180/44fbdd589233c610b92decee357951e8_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1615483388&gif-q=50&lossless=true&s=29744c3fe5530c7af5d4227b10491693' alt='Dan Abramov' />
     <Text marginTop='10px' fontSize='lg'>Focusing on the artist behind the comics sensation</Text>
     <Text marginTop='10px' fontSize='sm'>Filmmakers Jim Demonakos and Kevin Hanna are making a documentary about ‘Hellboy’ creator Mike Mignola.</Text>
     </Box>
    </SimpleGrid>
    </Container>
    </div>
}