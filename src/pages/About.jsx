function About() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="aboutme" style={{color:'#000066', marginBottom: '1rem'}}><h1> ABOUT ME!</h1></div>
            <div style={{ maxWidth: 700, textAlign: 'center', marginBottom: '2rem' }}>
                <p>
                    I'm a passionate and driven developer with a strong interest in building innovative and impactful digital experiences I enjoy solving real-world problems through technology and constantly strive to learn and grow in the dynamic field of software development My current focus is on mastering full-stack development and working on meaningful projects that combine creativity logic and user-centered design Whether it's front-end interfaces or back-end logic I take pride in writing clean efficient and maintainable code Outside of coding I enjoy exploring new tools collaborating with like-minded individuals and continuously expanding my skills
                </p>
            </div>
            <div style={{color:'#000066'}}>
                <h2> CONTACT </h2>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li>Email: Uadhansuh@gmail.com</li>
                    <li>Phone: +123-456-7890</li>
                    <li>
                        LinkedIn: <a href="https://www.linkedin.com/in/dhanush-a-339823253/" target="_blank" rel="noopener noreferrer"> Dhanush A</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/DhanushUA" target="_blank" rel="noopener noreferrer">Dhanush A</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default About