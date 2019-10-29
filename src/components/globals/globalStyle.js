import { createGlobalStyle } from "styled-components"
import bgPattern from "../../images/bg-pattern.png"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Aller Light";
  src: url("/fonts/Aller_Light/Aller_Lt.eot");
  src: url("/fonts/Aller_Light/Aller_Lt.eot");
  src: url("/fonts/Aller_Light/Aller_Lt.woff") format("woff"),
  url('/fonts/Aller_Light/Aller_Lt.woff2') format('woff2'),
      url("/fonts/Aller_Light/Aller_Lt.ttf") format("truetype"),
      url("/fonts/Aller_Light/Aller_Lt.svg#Aller_Light") format("svg");
  font-weight: normal;
  font-style: normal;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
em,
img,
ins,
kbd,
q,
s,
small,
strong,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
article,
aside,
canvas,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: white;
  background-image: url(${bgPattern});
  background-repeat: repeat;
  background-size: 30%; 
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.4;
  font-family: "Aller Light";
}

main {
  margin-top: 63.5px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
`
export default GlobalStyle
