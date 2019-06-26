import { keyframes } from "styled-components";
export const appearBottom = keyframes`
0%{
  transform: translateY(100%);
  opacity: 0;
}
33%{
  opacity:0;
}
100%{
  transform: translateY(0%);
  opacity: 1;
}
`;
export const appearTop = keyframes`
0%{
  transform: translateY(-100%);
  opacity: 0;
}
33%{
  opacity:0;
}
100%{
  transform: translateY(0%);
  opacity: 1;
}
`;
export const appearLeft = keyframes`
0%{
  transform: translateX(-100%);
  opacity: 0;
}
33%{
  opacity:0;
}
100%{
  transform: translateX(0%);
  opacity: 1;
}
`;
export const appearRight = keyframes`
0%{
  transform: translateX(100%);
  opacity: 0;
}
33%{
  opacity:0;
}
100%{
  transform: translateX(0%);
  opacity: 1;
}
`;
export const appear = keyframes`
0%{

  opacity: 0;
}
100%{

  opacity: 1;
}
`;
