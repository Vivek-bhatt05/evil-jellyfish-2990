import { SimpleGrid,Box ,Text, Container,Image} from "@chakra-ui/react"

export default function Stories(){
    return <div style={{marginTop:'170px'}}>
        <hr />
    <Container maxW='1300px'>

   <Text marginTop='30px' fontSize='sm'>CREATOR SUCCESS STORIES</Text> 


    <SimpleGrid marginTop='20px' columns={4} spacing={8}>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/031/762/379/6e4c5fc2ddeb649ff57a684a009644fd_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1608142137&gif-q=50&lossless=true&s=fca916c6b0f4126532f5da7b99c02dce' alt='Dan Abramov' />
     <Text marginTop='10px' color='#cccdcd' fontSize='sm'>Community engagement</Text>
     <Text marginTop='10px' fontSize='lg'>Reviving ‘Wax Poetics,’ the cult magazine for long-form music journalism and vinyl culture</Text>
     <Text marginTop='20px' fontSize='sm'>After the magazine closed down, longtime readers Alex Bruh and David Holt launched a campaign to rally an existing and expanding community.</Text>
     </Box>
     <Box height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/031/755/267/c625c10b46408fa8beb2bce279bfb10e_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1608072481&gif-q=50&lossless=true&s=9279b28b1645d946064eb02b61d44113' alt='Dan Abramov' />
     <Text marginTop='10px' color='#cccdcd' fontSize='sm'>Small business</Text>
     <Text marginTop='20px' fontSize='lg'>How tarot creator Krystal Banner strengthens her intuition—and business—on Kickstarter</Text>
     <Text marginTop='10px' fontSize='sm'>The all-or-nothing crowdfunding model can serve as a poll on what projects are worth her time.</Text>
     </Box>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/031/177/159/78d513020e363f5f3483d48678cb3453_original.jpg?ixlib=rb-4.0.2&w=700&fit=max&v=1603807761&gif-q=50&q=92&s=3eb24b7ade2b5cba10694af5175e8e72' alt='Dan Abramov' />
     <Text marginTop='10px' color='#cccdcd' fontSize='sm'>Small press</Text>
     <Text marginTop='10px' fontSize='lg'>Creators: Plan what you can, but prepare for twists and turns</Text>
     <Text marginTop='20px' fontSize='sm'>This poet and printer wanted to engage the communities along the Columbia River. It didn’t go exactly as planned, but their go-with-the-flow attitude brought them through.</Text>
     </Box>
     <Box  height='400px'>
     <Image height='350px' src='https://ksr-ugc.imgix.net/assets/030/834/837/90bf0c6bf6ba888fcd8f35a3a85c1709_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1601587562&gif-q=50&lossless=true&s=819c316f5df2f6e981943a6aab25063a' alt='Dan Abramov' />
     <Text marginTop='10px' color='#cccdcd' fontSize='sm'>Just-for-fun</Text>
     <Text marginTop='10px' fontSize='lg'>Craighton Berman's advice for simple creative campaigns</Text>
     <Text marginTop='20px' fontSize='sm'>This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns.</Text>
     </Box>
    </SimpleGrid>
    </Container>
    </div>
}
