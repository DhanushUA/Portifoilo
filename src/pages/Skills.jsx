function Skills() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{color:'#000066', marginBottom: '1rem'}}>
                <h1>SKILLS</h1>
            </div>
            <div style={{ maxWidth: 700, textAlign: 'center', marginBottom: '2rem' }}>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>HTML5 &amp; CSS3</li>
                    <li>Node.js</li>
                    <li>Git &amp; GitHub</li>
                    <li>Responsive Design</li>
                    <li>REST APIs</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
            <div style={{color:'#000066'}}>
                <h2>My Qualifications</h2>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li>Bachelor of Technology in Computer Science and Engineering</li>
                    <li>University: Toc H Institue of Science and Technology, Kochi</li>
                    <li>Year of Graduation: 2026</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills