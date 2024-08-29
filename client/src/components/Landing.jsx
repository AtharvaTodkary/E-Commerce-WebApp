import React from "react";

export default function Landing() {
  return (
    <>
      <div className="col-md-12 d-flex justify-content-center">
        <div className="col-md-6 text-justify">
          <span className="fw-medium " style={{ fontSize: "110px", fontFamily: "revert" }}>Be inspired by the best.</span>
        </div>
        <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724095684/test/hd4kjtunzr2yebqvswnt.png" alt="" />
      </div>
      <div className="col-md-12 d-flex justify-content-center mt-5 mb-5">
        <div className="col-md-10 d-flex justify-content-evenly">
          <div className="p-3 rounded border">
            <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724096910/test/geepzmqyrts1lr2g9ft7.png" alt="Watch1" height={300} /><br />
            <h6 className="text-center p-2 fw-medium">Calvin Klein </h6>
          </div>
          <div className="p-3 rounded border">
            <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724097010/test/dmjuonjiftgtlulssicl.jpg" alt="Watch2" height={300} />
            <h6 className="text-center p-2 fw-medium">Vintage Omega Seamaster</h6>
          </div>
          <div className="p-3 rounded border">
            <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724098142/test/c4bifewwclnf9dzyxwj1.jpg" alt="Watch3" height={300} />
            <h6 className="text-center p-2 fw-medium">OUPINKE</h6>
          </div>
          <div className="p-3 rounded border">
            <img src="https://res.cloudinary.com/dz0k1nwka/image/upload/v1724098059/test/pffncm9rk8y55hswru0c.jpg" alt="Watch4" height={300} />
            <h6 className="text-center p-2 fw-medium">Rolex</h6>
          </div>
        </div>
      </div>
    </>
  );
}
