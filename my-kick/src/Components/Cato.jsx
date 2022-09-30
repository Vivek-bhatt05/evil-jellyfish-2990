import { Flex,Box , Spacer ,Text} from '@chakra-ui/react'

export default function Cato(){
    return <div style={{height:'60px',padding:'20px',marginTop:'190px'}}>
        <hr />
        <hr />
    <Flex  minWidth='max-content' alignItems='center' gap='2'>
  <Spacer />
  <Box marginLeft='-330px' p='2'>
    <Flex width='900px' justifyContent='space-between' alignItems='center' gap='2'>
         <Text fontSize='sm'>Arts</Text>
         <Text fontSize='sm'>Comics & Illustration</Text>
         <Text fontSize='sm'>Design & Tech</Text>
         <Text fontSize='sm'>Film</Text>
         <Text fontSize='sm'>Food & Craft</Text>
         <Text fontSize='sm'>Games</Text>
         <Text fontSize='sm'>Music</Text>
         <Text fontSize='sm'>Publishing</Text>
    </Flex>
      </Box>
  <Spacer />
</Flex>
    </div>
}