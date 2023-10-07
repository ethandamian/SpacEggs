import "../App.css";


export function PopularPackages({imagen,text}){
  return(
    <div className="box">
      <img src={imagen} 
      style={{
          width: 180,
          height: 180, 
          margin: 5
      }}
      >
      </img>
      <div className="detalles">
        detalles
      </div>
      {text}$
    </div>
  )
}
