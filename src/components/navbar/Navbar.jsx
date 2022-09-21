import { NavLink } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Nav = styled("nav")`
  background-color: #430e91;
  color: white;
  padding: 0.15rem 2rem;
  border: none;
  height: 50px;
  display: flex;
  gap: 2rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    
    a {
      color: white;
      text-decoration: none;
      margin: 0;
      padding: 0;    
  
    }
  }
  

`;


const Navbar = () => {
  return (
        <Nav>
            <div>
                <NavLink href='/'> Home </NavLink>
            </div>
            <div>
                <NavLink href='/about'> About </NavLink>
            </div>
        </Nav>
      )

}


export default Navbar

// const Navbar = () => {
//     return (
//     <div>
//         <div>
//             <NavLink href='/'> Home </NavLink>
//         </div>
//         <div>
//             <NavLink href='/about'> About </NavLink>
//         </div>
//     </div>
//   )
// }

// export default Navbar