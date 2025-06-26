import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Project() {

 const boxStyle = {
    backgroundColor: '#fef9d7',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color:'black',
  };


  return (
  <div className="app-background">
    <>
      <div style={boxStyle}>
        <h2>MY PROJECTS</h2>
      </div>
    

    
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://www.cplace.com/wp-content/uploads/2024/12/Media-Only_1-scaled.jpeg" />
          <Card.Body>
            <Card.Title>PROJECT ON Artifical Inteligence </Card.Title>
            <Card.Text>
              This project is an AI-powered system designed to enhance road safety by detecting and classifying vehicles in real-time using computer vision. Built using YOLOv5 for object detection, the system accurately identifies vehicles, helmets, and seatbelts from live video streams. It integrates with Firebase for data storage and a mobile app built in React Native for real-time monitoring. The goal of this project is to reduce accidents on sharp turns and hairpin bends by providing drivers with early alerts based on oncoming vehicle types. This solution demonstrates my ability to apply AI models, cloud integration, and mobile technologies to solve real-world problems
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D" />
          <Card.Body>
            <Card.Title>TODO-LIST</Card.Title>
            <Card.Text>
             This is a simple yet effective To-Do List web application designed to help users manage daily tasks efficiently. Built using React for the front end, the app allows users to add, edit, delete, and mark tasks as complete. It features a clean user interface and real-time state management using React hooks. The project helped me strengthen my understanding of component-based architecture, state handling, and user interaction in modern web development. This To-Do List serves as a foundation for more complex productivity tools and showcases my ability to build responsive, user-friendly applications
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://uploads.sitepoint.com/wp-content/uploads/2019/04/155530806824.jpg" />
          <Card.Body>
            <Card.Title>GAME DEVELOPMENT</Card.Title>
            <Card.Text>
              This project is a 2D/3D game developed using Unity (C#) [or another engine like Godot, Unreal, etc.], designed to deliver an engaging and interactive gameplay experience. It features custom game mechanics, player controls, scoring systems, and immersive sound and visual effects. Through this project, I explored core game development concepts such as physics, animations, event handling, and scene management. This game reflects my creativity and technical skills in designing fun and functional gameplay while optimizing performance and user experience. It also strengthened my problem-solving abilities and passion for interactive digital storytelling.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  </div>
  );
}
export default Project;