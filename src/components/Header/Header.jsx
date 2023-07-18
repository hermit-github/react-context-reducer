import React, { useContext } from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.scss'
import {FaShoppingCart} from 'react-icons/fa'
import Cart from '../../context/Context'
import CartItem from './CartItem'

const Header = () => {

    const {state:{cart}} = useContext(Cart)


  return (
    <Navbar bg='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <span className='logo'>Shopping Cart</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}} placeholder='Search for a product' className='m-auto'/>
            </Navbar.Text>
            <Nav>
                <Dropdown align={'end'}>
                    <Dropdown.Toggle variant='success'>
                        <Badge bg='success'>
                            <FaShoppingCart color='white' fontSize='25px'/>
                            {cart.length}
                        </Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth:370}}>
                        {cart.length ? cart.map(item => <CartItem item={item}/>):(<span style={{padding:10}}>Cart is Empty</span>)}
                        <Link to='/cart'>
                            <Button style={{width:'95%',margin:"0 10px"}}>
                                Go To Cart
                            </Button>
                        </Link>
                    </Dropdown.Menu>

                </Dropdown>
            </Nav>

        </Container>
    </Navbar>
  )
}

export default Header