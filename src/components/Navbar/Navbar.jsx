import React,{useState,useEffect} from 'react'
import { FaTimes,FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../GlobalStyles'
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLink,
  NavItemBtn

} from './Navbar.elements'
const Navbar = () => {

    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true); 

    const handleClick = () =>{
      setClick(!click);
    }

    //close mobile menu
    const closeMobileMenu=()=>{
      setClick(false);
    }

    const shoButton = () =>{
      if(window.innerWidth <= 860){
        setButton(false);
      }else{
        setButton(true);
      }
    }

    useEffect( () =>{
      shoButton();
    } ,[]);

     window.addEventListener('resize',shoButton);


    return (
      <>  
        <IconContext.Provider value={{color:'#fff'}}>
           <Nav>
            <NavbarContainer>
              <NavLogo onClick={closeMobileMenu} to='/'>
                <NavIcon />
                ABEBE
              </NavLogo>

              <MobileIcon
                onClick={handleClick}
              >
                {click ? <FaTimes/> :<FaBars/>}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLink to='/'>Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to='/services'>Services</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to='/product'>Product</NavLink>
                </NavItem>

                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to='/sign-up'>
                      <Button primary>
                        Sign Up
                      </Button>
                    </NavBtnLink>
                  ):(
                    <NavBtnLink to='/sign-up'primary >
                      <Button fontBig primary>
                        Sign Up
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    )
     
      
  
}

export default Navbar
