import styles from './index.module.scss'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
function App() {
  return (
    <div className={styles.App}>
          <Navbar />
          <h3>HomePage</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi voluptas praesentium impedit vitae deserunt sit unde et suscipit, est accusamus ipsum maiores atque consequatur quisquam minus, id incidunt cumque.
          Rerum reprehenderit iste repudiandae sequi dolorum eligendi culpa nesciunt natus iusto, delectus, eos voluptas nemo, ratione soluta doloribus excepturi accusamus porro minus ab maxime veritatis ipsa ipsam. Natus, harum voluptatibus!
          et harum quae voluptates, veritatis laborum eum quas. Molestiae, dolorem, rerum deserunt aut sunt adipisci iure id assumend.</p>
    </div>
  );
}

export default App;
