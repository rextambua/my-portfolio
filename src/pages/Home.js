import React from 'react';
import {Email, GitHub} from "@mui/icons-material";
import './Home.css'

function Home(props) {
    return (
        <div className='home'>
            <div className='about'>
                <h2> Hi, My name is Rex</h2>
                <div>
                    <p>A software developer for learning and creating</p>
                    <Email/>
                    <GitHub/>
                </div>
            </div>
            <div className='skills'>
                <h1>Skils</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>  - React/vue
                                - Redux / Redux Toolkit/Pinia
                                - TypeScript / JavaScript(ES6)
                                - HTML / CSS / Bootstrap
                                - REST API / HTTP
                                - Unit-tests
                                - Git
                                - Figma
                        </span>
                    </li>
                </ol>

            </div>
        </div>
    );
}

export default Home;