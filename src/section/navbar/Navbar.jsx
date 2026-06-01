import data from './data';
import styled from 'styled-components';
const Ul = styled.ul`
list-style: none;
margin:0;
border:1px solid var(--color-primary);
box-shadow: 0 0 4px var(--color-primary);
background-color:var(--color-primary);
display:flex;
justify-content:center;
z-index:15;

li {
  padding:10px 30px;

  
}
a{
  color:var(--color-light);
  font-size:1.6rem;
  
}
li:hover{
  transition:all 0.3s linear;
  background:var(--color-light);

}
li:hover a{
  color:var(--color-primary);
}
@media (max-width :768px){
  border:1px solid var(--color-primary);
   box-shadow: 0 0 7px  var(--color-primary);
  margin:0;
  flex-direction:column;
  background:var(--color-primary);
  position:fixed;
  transform:${props => props.open ? "translateX(0)" : "translateX(100%)"};
  top:0;
  right:0;
  
  justify-content:left;
  transition: all 0.3s linear;
  height:100vh;
  width:80%;
  padding-top:3.5rem;
  li a{
    color:#fff;
    display:flex;
    justify-content:center;

   
  }
  li:hover{
    border:1px solid var(--color-light);
    border-radius:10px;
  }
  li{
    width:80%;
    
  }
}

`

const Navbar = ({ open }) => {
  return (
    <Ul open={open} className='nav__menu sticky-top'>
      {
        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
    </Ul>
  );
};

export default Navbar;