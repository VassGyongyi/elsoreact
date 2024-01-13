export default function Kartya(props) {
    function kattintas(){
        console.log(props.obj.id)
        props.kattintas(props.obj.id)
    }
  return (
    <div className="col-sm-6">
      <div className="card-header">Kutya</div>
      <h3>{props.obj.nev}</h3>

      <div className="card-body">
        <img
          className="img-thumbnail"
          src={props.obj.img}/>
      </div>
      <div className="card-footer">
        <div>
          <h3>A kutya kora: {props.obj.kor} éves</h3>
        </div>
        <button type="button" onClick={kattintas} className="btn btn-success">Vigyél haza!</button>
      </div>
    </div>
  );
}
