import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    cursor: pointer;
}
option{
    cursor: pointer;
}
select{
    cursor: pointer;
}
a{
    cursor: pointer;
    text-decoration: none;
}
.hidden{
    display: none;
}
body {
    background-color: var(--grey-4);
	font-family: 'Inter', sans-serif;
}

.loading {
  animation: spin 1s infinite;
  display: flex;
  width: 15px;
  height: 15px;
  border: 2px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}

`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const openModal = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const closeModal = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
`;
