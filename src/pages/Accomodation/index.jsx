import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider';
import './_style.scss';

export default function Accomodation() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('/__mocks__/logements.json')
      .then((res) => res.json())
      .then((jsonData) => {
        const objData = jsonData.find((elem) => elem.id === id);
        setData(objData);
        setPictures(objData.pictures);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  console.log(data);

  return (
    <div className="accomodation">
      {
        isLoading ? (
          <Loader />
        ) : (
          <Slider slides={pictures} />
        )
      }
    </div>
  );
}
