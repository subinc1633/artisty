import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import NavBarLink from './nav_bar_links';
import SearchBar from './search_bar';

const NavigationBar = (props) => {
    const { currentUser, navCategories, logout, openModal, fetchCategories } = props;
    const history = useHistory();

    useEffect(() => {
        fetchCategories();
    }, []);

    const signIn = () => {
        openModal('sign in');
    };

    const loggingOut = () => {
        logout();
    };

    const checkIfLoggedIn = () => {
        if (currentUser) {
            history.push('/cart');
        } else {
            signIn();
        }
    }

    return (
        <nav className="nav-bar">
            <ul className="top-nav">
                <li><Link to="/"><h2 className="artisty">Artisty</h2></Link></li>
                <SearchBar />
                <li>{currentUser ? <button onClick={() => loggingOut()}>Log out</button> : <button onClick={() => signIn()}>Sign in</button>}</li>
                <li><button className="cart" onClick={() => checkIfLoggedIn()}><IoCartOutline /></button></li>
            </ul><br/>
            <ul className="bottom-nav">
                {
                    navCategories.map((category, idx) => (
                        <NavBarLink key={idx} category={category}/>
                    ))
                }
                    <Link className="nav-bar-link" to="/categories"><li>All Categories</li></Link>
            </ul>
        </nav>
    )
}
// class NavigationBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchVal: ''
//         }
//     }

//     componentDidMount() {
//         this.props.fetchCategories();
//         this.props.fetchCart(this.props.currentUser.cart.id);
//     }

//     render() {
//         const { currentUser, navCategories, logout, openModal } = this.props;
        
//         const signIn = (e) => {
//             e.preventDefault();
//             openModal('sign in');
//         };

//         const loggingOut = () => {
//             logout();
//         };
        
//         return (
//         <nav className="nav-bar">
//             <ul className="top-nav">
//                 <li><Link to="/"><h2 className="artisty">Artisty</h2></Link></li>
//                 <SearchBar />
//                 <li>{currentUser ? <button onClick={() => loggingOut()}>Log out</button> : <button onClick={(e) => signIn(e)}>Sign in</button>}</li>
//                 <li><Link to="/cart"><button className="cart"><IoCartOutline /></button></Link></li>
//             </ul><br/>
//             <ul className="bottom-nav">
//                 {
//                     navCategories.map((category, idx) => (
//                         <NavBarLink key={idx} category={category}/>
//                     ))
//                 }
//                     <Link className="nav-bar-link" to="/categories"><li>All Categories</li></Link>
//             </ul>
//         </nav>
//         )
//     }
// };

export default NavigationBar;