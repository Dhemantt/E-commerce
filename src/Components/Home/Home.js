import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={style.checkAlbums}>
        <h1 style={{color: '#fff', fontSize: '40px'}}>Get our Albums</h1>
        <button className={style.btnGetAlbums}>
          <i class="fa-regular fa-circle-play"></i>
        </button>
      </div>
      <section className={style.tours}>
        <div className={style.tourItem}>
          <span className={style.tourdate}>JUL16</span>
          <span className={style.tourplace}>DETROIT, MI</span>
          <span className={style.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
        <div className={style.tourItem}>
          <span className={style.tourdate}>JUL19</span>
          <span className={style.tourplace}>TORONTO,ON</span>
          <span className={style.tourspecplace}>BUDWEISER STAGE</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
        <div className={style.tourItem}>
          <span className={style.tourdate}>JUL 22</span>
          <span className={style.tourplace}> BRISTOW, VA</span>
          <span className={style.tourspecplace}>JIGGY LUBE LIVE</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
        <div className={style.tourItem}>
          <span className={style.tourdate}>JUL 29</span>
          <span className={style.tourplace}>PHOENIX, AZ</span>
          <span className={style.tourspecplace}> AK-CHIN PAVILION</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
        <div className={style.tourItem}>
          <span className={style.tourdate}>AUG 2</span>
          <span className={style.tourplace}>LAS VEGAS, NV</span>
          <span className={style.tourspecplace}>T-MOBILE ARENA</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
        <div className={style.tourItem}>
          <span className={style.tourdate}>AUG 7</span>
          <span className={style.tourplace}>CONCORD, CA</span>
          <span className={style.tourspecplace}> CONCORD PAVILION</span>
          <button className={style.buyBtn}>BUY TICKETS</button>
        </div>
      </section>
    </>
  );
};

export default Home;
