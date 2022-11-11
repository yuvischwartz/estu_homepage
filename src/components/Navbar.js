import React from 'react'
import './Navbar.css';

function Navbar() {
return (
<>
    <div className={'nav-container'}>
        <div className={'wrapper'}>
            <nav>
                <div className={'logo'}>
                    <img className={'logo'} src={'images/logo.png'} alt='' />
                </div>
                <ul className='nav-items'>
                    <li className={'nav-item'}>
                        Our products
                        <img className={'vector'} src={'images/vector.svg'} alt=''/>
                    </li>
                    <li className={'nav-item'}>
                        About Us
                        <img className={'vector'} src={'images/vector.svg'} alt=''/>
                    </li>
                    <li className={'nav-item'}>Partners</li>
                </ul>
                <div className={'icons'}>
                    <div className={'flag'}>
                        <img className={'vector'} src={'images/flag.svg'} alt=''/>
                        <img className={'vector'} src={'images/vector.svg'} alt=''/>
                    </div>
                    <button className={'btn'}>be a partner</button>
                </div>
            </nav>
            </div>
    </div>

    {/* <div className={'bg-white w-full h-20'}>
        <ul className={'flex justify-between text-center py-8'}>
            <div><li>estu</li></div>
            <div>
                <li>Our products</li>
                <li>About Us</li>
                <li>Partners</li>
            </div>
            <div>
                <li>flag icon</li>
                <li>button</li>
            </div>
        </ul>
    </div> */}
</> 
 )
}

export default Navbar