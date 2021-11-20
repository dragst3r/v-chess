import { useMediaQuery } from 'react-responsive'


export const useScreenSize = ()=>{
const isMobile= useMediaQuery({ query: '(max-width: 1224px)' })
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

return [isMobile,isPortrait]
}