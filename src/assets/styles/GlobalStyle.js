import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Raleway:400,600,700&subset=latin-ext');
*,*::before,*::after{
    box-sizing:border-box;
    -webkit-font-smoothing:antialised;
    -moz-osx-font-smoothing:grayscale;
    margin:0;
    padding:0;
}
html{
    font-size: 62.5%;
}
body{
    font-size:1.6rem;
}
`
export default GlobalStyle
