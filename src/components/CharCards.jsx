import  '../styles/CharCards.css'

export default ({name,img_url,gender,hair,origin,species,status}) =>{
    console.log(name)
  return (
    <div className="cardSection">
        <div className='cardImage'>
         <img src={img_url}/>
        </div>
        <div className='charData'>
            <h2>{name}</h2>
            <h4><span className='charGender'>Gender:</span> {gender}</h4>
            <h4><span>Hair:</span> {hair}</h4>
            <h4><span>Origin:</span> {origin}</h4>
            <h4><span>Species:</span> {species}</h4>
            <h4><span>Status:</span> {status}</h4>
        </div>
    </div>
  );
};
