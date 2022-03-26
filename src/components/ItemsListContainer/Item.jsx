import {Link} from 'react-router-dom'
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react"
import dai from "../../imgs/icons/dai.png"

export const Item = ({id,img,category,price,name}) => {
    return  (

        <div className='col-md-3'>
            <Link to ={`/detail/${id}`} style={{textDecoration:'inherit', color:'inherit'}}>
                <Box >   
                    <Box style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                        backgroundColor="white"
                        padding={6}
                        position="relative"
                        margin={50}
                        width={250}
                        height={300}
                    >
                        <Stack>
                            <Stack
                                style={{border:'1px solid #9c9c9c', borderRadius: '10px! important'}}
                                height="32px"
                                width="70px"
                                alignItems="center"
                                backgroundColor="primary.600"
                                borderRadius={9999}
                                borderWidth={1}
                                color="primary.500"
                                direction="row"
                                fontSize="sm"
                                fontWeight="100"
                                justifyContent="center"
                                position ="absolute"
                                right={6}
                                spacing={4}
                            >
                                <Text style={{marginBottom:"0px", fontWeight:"bold"}}>{price}</Text>
                                <Image height={15} src={dai}></Image>
                            </Stack>
                            <Center>
                                <Image objectFit="contain" marginTop={10} src={img} height={200} width={300}></Image>
                            </Center>
                            <Stack alignItems="flex-start" spacing={-10}>
                                <Text >{category.charAt(0).toUpperCase()+category.slice(1)}</Text>
                                <Text fontWeight="bold">{name}</Text>
                            </Stack>
                        </Stack>   
                    </Box>
                </Box>
            </Link>
        </div>
    )
} 

export default Item
