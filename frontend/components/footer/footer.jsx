import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaAngellist, FaUserTie } from 'react-icons/fa'

const Footer = () => {
    const history = useHistory();

    return (
        <footer>
            { history.location.pathname === '/cart' ?
                <div>
                    <hr className="new-footer-line" />
                    <div className="new-footer">
                        <div className="currency">
                            <p>United States <span>|</span> English (US) <span>|</span> $ (USD)</p>
                        </div>
                        <div className="new-self-info">
                            <ul>
                                <li>© 2021 Subin Cho</li>
                                <li><a href="https://github.com/subinc1633/artisty" target="_blank">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/sc1633/" target="_blank">Linkedin</a></li>
                                <li><a href="https://angel.co/u/subin-cho" target="_blank">AngelList</a></li>
                                <li><a href="https://subincho.net" target="_blank">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            :
                <>
                    <div className="middle">
                        <div>
                            <ul>
                                <li><b>Site</b></li>
                                <li><Link to="/">Main Site</Link></li>
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
                                <li><b>Projects</b></li>
                                <li><Link to="/">Artisty</Link></li>
                                <li><a href="https://subinc1633.github.io/feline-fever/" target="_blank">Feline Fever</a></li>
                                <li><a href="https://pharm4ssist.herokuapp.com/#/" target="_blank">PharmAssist</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><b>Contact</b></li>
                                <li><a href="https://github.com/subinc1633/artisty" target="_blank">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/sc1633/" target="_blank">Linkedin</a></li>
                                <li><a href="https://angel.co/u/subin-cho" target="_blank">AngelList</a></li>
                                <li><a href="https://subincho.net" target="_blank">Portfolio</a></li>
                            </ul>
                            <br/>
                            <span className="contact-icons">
                                <a href="https://github.com/subinc1633/artisty" target="_blank"><FaGithub /></a> <a href="https://www.linkedin.com/in/sc1633/" target="_blank"><FaLinkedin /></a> <a href="https://angel.co/u/subin-cho" target="_blank"><FaAngellist /></a> <a href="https://subincho.net" target="_blank"><FaUserTie /></a>
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="currency">
                            <b>United States | English (US) | $ (USD)</b>
                        </div>
                        <div className="self-info">
                            <ul>
                                <li>© 2021 Subin Cho</li>
                                <li><a href="https://github.com/subinc1633/artisty" target="_blank">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/sc1633/" target="_blank">Linkedin</a></li>
                                <li><a href="https://angel.co/u/subin-cho" target="_blank">AngelList</a></li>
                                <li><a href="https://subincho.net" target="_blank">Portfolio</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </>
            }
        </footer>
    )
};

export default Footer;