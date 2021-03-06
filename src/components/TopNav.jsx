const TopNav = () => {

    return (
        <div className="top-nav">
            <div className="top-nav-wrap">
                <a href="/">
                    <div className='top-left-nav'>
                        <img src="https://i.imgur.com/lMuekL1.jpg" alt="owl"/>
                        <p>Laneia Murray</p>
                    </div>
                </a>
                <nav className='top-right-nav'>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a href="https://drive.google.com/file/d/1J0xX4s4rT-9OzCLmV78FDzew0vxs-F19/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </nav>
            </div>
        </div>
    )
}

export default TopNav