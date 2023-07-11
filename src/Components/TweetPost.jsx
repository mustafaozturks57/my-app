
import randomcolor from 'randomcolor';
import { useEffect, useState } from 'react';







export default function TweetPost(props) {
  const { post } = props;

  const [color, setColor] = useState('');

 
  
  useEffect(() => {
    // Yalnızca bir kez çalışacak fonksiyon
    const randomColor = randomcolor();
    setColor(randomColor);
    
    // Burada yapmak istediğiniz işleri gerçekleştirin

  }, []);


   


  return (
    <>
    <div className="post"  >
          <div className="post_profile-image">
            <img  style={{color:color}} src="images/kuş.jpg" alt="java-logo" />
             
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3 style={{color:color,fontWeight:"bold"}} >
                  Yetkili
                  <span className="header-icon-section">
                    <span  style={{color:color,fontWeight:"bold"}} className="material-icons post_badge">verified</span>
                    @Admin
                  </span>
                </h3>
              </div>

              <div className="post_header-discription">
                <p><b> Bu bir Bilgilendirme Mesajıdır.İstediğiniz kadar Post ve Durum Paylaşabilir siniz. </b> </p>
                {/* <p>
                  Download now: <a href="https://social.ora.cl/6012KoqQ0">https://social.ora.cl/6012KoqQ0</a>
                  <br />
                  Release notes: <a href="https://social.ora.cl/6013KoqQF">https://social.ora.cl/6013KoqQF</a>
                  <br />
                  API Javadoc: <a href="https://social.ora.cl/6015KoqQN">https://social.ora.cl/6015KoqQN</a>
                  <br />
                  Features: <a href="https://social.ora.cl/6016KoqQ4">https://social.ora.cl/6016KoqQ4</a>
                </p> */}
              </div>
            </div>

            {/* <img src="images/post-image.jpeg" alt="java18" /> */}

            {/* <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
              <span className="material-icons">file_upload</span>
            </div> */}
          </div>
        </div>


      {post.map((map, index) => (
        <div className="post" key={index}>
          <div className="post_profile-image">
            <img src="images/kuş.jpg" alt="java-logo" />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3  style={{color:color,fontWeight:"bold"}} >
                 {map.name}
                  <span className="header-icon-section">
                    <span  style={{color:color,fontWeight:"bold"}} className="material-icons post_badge">verified</span>
                    @{map.name}
                  </span>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>{map.desc}</p>
                {/* <p>
                  Download now: <a href="https://social.ora.cl/6012KoqQ0">https://social.ora.cl/6012KoqQ0</a>
                  <br />
                  Release notes: <a href="https://social.ora.cl/6013KoqQF">https://social.ora.cl/6013KoqQF</a>
                  <br />
                  API Javadoc: <a href="https://social.ora.cl/6015KoqQN">https://social.ora.cl/6015KoqQN</a>
                  <br />
                  Features: <a href="https://social.ora.cl/6016KoqQ4">https://social.ora.cl/6016KoqQ4</a>
                </p> */}
              </div>
            </div>

            {/* <img src="images/post-image.jpeg" alt="java18" /> */}

            {/* <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
              <span className="material-icons">file_upload</span>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}
