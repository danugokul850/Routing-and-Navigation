import'./Home.css';
import {Link}   from "react-router";

export default function Home() {
  
    return(
      <div className='home-page'>
        <div className="navbar">
          <div className='logo'>
            <img src="https://logowik.com/content/uploads/images/vector-ornament-buddha6784.logowik.com.webp" width={"60px"} height={'60px'} style={{borderRadius:"50%"}}/>
            <h4>Learn & Admire</h4>
          </div>
          <div className='options'>
            {/* Home */}
            <button>Home</button>
            {/* Kalam */}
                <div className='kalamg'>
                    <button>Kalam
                        <div className='dropdown1'>
                          <ul>
                          <Link to="/biography" className='Link'><li>Biography</li></Link>
                          <Link to="/achievements" className='Link'><li>Achievements</li></Link>
                          <Link to="/quotes" className='Link'><li>Famous Quotes</li></Link>
                          <Link to="/journey" className='Link'><li>Life Journey</li></Link>
                          </ul>     
                        </div>
                    </button>
            </div>
            
            {/* Ronaldo */}
            <div className='ronaldo'>
             <button>Ronaldo
                <div className='dropdown2'>
                <ul>
                            <a href='https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Early_life'><li>Biography</li></a>
                            <a href='https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Career_statistics'><li>Career Status</li></a>
                            <a href='https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Honours'><li>Achievements & Awards</li></a>
                            <a href='https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Goal_celebrations'><li>Records & Highlights</li></a>
                 </ul>
                    
                </div>
             </button>
            </div>
            {/* Login */}
            <div className='logout'>
              <button>Log out
                <div className='dropdown3'>
                  <ul>
                            <li>Profile</li>
                            <li>Setting</li>
                            <li>Help</li>
                  </ul>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* body */}
        <div className='content1'>
          <img id='student' src='https://img.freepik.com/premium-vector/school-library-studying-together_723224-2123.jpg'/>
        </div>
        <div className="welcome-section">
          <h2><span className="script-text">Welcome</span> to</h2>
          <h1>Learn & Admire</h1>
          <p>Explore Inspiring Lives of Legends with Simplicity</p>
        </div>
        <div className='about'>
        <p>
            This platform is dedicated to exploring the inspiring lives of legendary personalities 
            like <strong>Dr. APJ Abdul Kalam</strong> and <strong>Cristiano Ronaldo</strong>. 
          </p>
          <p>
            Navigate through the menu to learn more about their journeys, achievements, 
            and the values that made them icons in their fields.
          </p>
          <p>
            Click on "Kalam" or "Ronaldo" in the navbar to get started!
          </p>

          <br/>
          <p>Whether you're here to seek motivation, learn something new, or just admire greatness — you're in the right place.</p> 
          <p>From humble beginnings to global fame, their stories show what hard work, vision, and persistence can truly achieve.</p>
          <br/>
          <p>
    📖 Take a moment to explore their biographies, get inspired by their famous quotes, and discover key moments that changed the world through their efforts.
  </p>
  
        </div>

        </div>
    )
}