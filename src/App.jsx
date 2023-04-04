import Container from "./components/Container";
import './styles/App.css';

function App() {
  const info = {
    imgSrc: '/images/image-qr-code.png',
    title: 'Improve your front-end skills by building projects',
    description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
  }
  
  return (
    <div className="body">
      <Container 
        {...info}
      />
    </div>
  );
}

export default App;
