import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoSearch } from 'react-icons/io5';
import NavBarLink from './nav_bar_links';

class NavigationBar extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const { currentUser, navCategories, logout, openModal } = this.props;
        
        const loggingOut = () => {
            logout();
            this.props.history.push('/');
        };
        
        return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to="/"><h2 className='artisty'>Artisty</h2></Link></li>
                    <li className='nav-searchbar'>
                        <input type='text' placeholder='Search for anything' />
                        <button className='nav-search-button' type='submit'><span><IoSearch /></span></button>
                    </li>
                <li>{currentUser ? <button onClick={() => loggingOut()}>Log out</button> : <button onClick={() => openModal('sign in')}>Sign in</button>}</li>
                <li><button className='cart'><IoCartOutline /></button></li>
            </ul><br/>
            <ul className='bottom-nav'>
                {
                    navCategories.map(category => (
                        <Link to={`/categories/${category.id}`}>
                            <NavBarLink key={category.id} category={category}/>
                        </Link>
                    )) 
                }
                <li>All Categories</li>
            </ul>
        </nav>
        )
    }
};

export default NavigationBar;