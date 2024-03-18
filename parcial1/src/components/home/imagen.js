import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
function Imagen(props) {
    const params = useParams();

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/350" />
      </Card>
    </div>
  );
}

export default Imagen;