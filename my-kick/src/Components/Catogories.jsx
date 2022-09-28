import { Flex,Box , Spacer ,Text} from '@chakra-ui/react'

export default function Catogories(){
    return <>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Spacer />
  <Box p='2'>
    <Flex width='900px' justifyContent='space-between' alignItems='center' gap='2'>
         <Text fontSize='lg'>Arts</Text>
         <Text fontSize='lg'>Comics & Illustration</Text>
         <Text fontSize='lg'>Design & Tech</Text>
         <Text fontSize='lg'>Film</Text>
         <Text fontSize='lg'>Food & Craft</Text>
         <Text fontSize='lg'>Games</Text>
         <Text fontSize='lg'>Music</Text>
         <Text fontSize='lg'>Publishing</Text>
    </Flex>
      </Box>
  <Spacer />
</Flex>
    </>
}