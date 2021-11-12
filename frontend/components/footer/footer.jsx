import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => (
    <footer>
        <div className='middle'>
            <div>
                <ul>
                    <li><b>Site</b></li>
                    <li><Link to='/'>Sitemap</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Technologies</b></li>
                    <li>Ruby on Rails</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Contact</b></li>
                    <li><a href='https://github.com/subinc1633/artisty'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/sc1633/'>Linkedin</a></li>
                </ul>
            </div>
        </div>
        <div className='bottom'>
            <div className='currency'>
                <b>United States | English (US) | $ (USD)</b>
            </div>
            <div className='self-info'>
                <ul>
                    <li>© 2021 Subin Cho</li>
                    <li><a href='https://github.com/subinc1633/artisty'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/sc1633/'>Linkedin</a></li>
                </ul>
                
            </div>
        </div>
    </footer>
);

export default footer;