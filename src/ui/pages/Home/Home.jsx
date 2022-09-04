import './Home.css';
import imgr from '../../../assets/imgr.png';
import Navbar from '../../components/Navbar/Navbar';

export function Home() {
    return (
      <div className='home'>
        <div className="home1">
          <div className="home-first">
            <Navbar />
          </div>
          <div className="home-second">
            <div className="title-sub">
              <div className="title">
                <p> Our Mission</p>
              </div>
              <div className="subtitle">
                <p>Providing secure food <br/> and sustainable agriculture</p>
              </div>
            </div>
            <div className="imgchad">
              <img className='imgr' src={imgr} alt="" />
            </div>
            <div className="bouge-bar">
              <div className="bouge">
                <div className="project">
                  <p>PROJECT</p>
                </div>
                <div className="content-1">
                  <p className='head1'> Venenatis mattis pulvinar lectus</p>
                  <p className='body1'>Malesuada egestas nam cursus massa. Cum iaculis dignissim enim eget est. Id neque, pretium ultricies tortor, tincidunt consectetur id. </p>
                  <button className='learnM'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;