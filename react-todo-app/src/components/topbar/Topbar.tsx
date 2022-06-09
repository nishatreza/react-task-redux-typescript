import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            TODO Redux App
          </a>
     
        </div>
        <div className="right">
          <div className="hamburger">
        List Todos
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
