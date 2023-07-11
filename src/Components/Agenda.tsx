export default function Agenda(){

   return(
<>
<nav >
        <div className="nav_logo-wrapper">
            <img className="nav_logo" src="images/kuş.jpg" style={{marginRight:"2em"}} />
            <h3>Palavra</h3>
        </div>

        <div className="Menu_options active">
  <span className="material-icons">home</span>
  <h2>Ana Sayfa</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">tag</span>
  <h2>Keşfet</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">group</span>
  <h2>Topluluk</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">notifications</span>
  <h2>Bildirimler</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">email</span>
  <h2>Mesajlar</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">bookmark</span>
  <h2>Yer İşaretleri</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">person</span>
  <h2>Profil</h2>
</div>

<div className="Menu_options">
  <span className="material-icons">more_horiz</span>
  <h2>Daha Fazla</h2>
</div>

<button className="tweet_btn">Bağır </button>



    </nav>

</>

   )

}