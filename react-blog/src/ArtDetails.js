import { useParams } from 'react-router-dom'; 

const ArtDetails = () => {
  const { id } = useParams();

  return (
    <div className="art-details">
      <h2> Article #{ id }</h2>
    </div>
  );
}

export default ArtDetails;
