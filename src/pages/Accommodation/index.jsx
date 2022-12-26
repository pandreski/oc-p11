import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HostProfile from '../../components/HostProfile';
import Loader from '../../components/Loader';
import Rating from '../../components/Rating';
import Slider from '../../components/Slider';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';
import './_style.scss';

export default function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [pictures, setPictures] = useState([]);
  const [tags, setTags] = useState([]);
  const [hostName, setHostName] = useState('');
  const [hostPicture, setHostPicture] = useState('');
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('/__mocks__/logements.json')
      .then((res) => res.json())
      .then((jsonData) => {
        const objData = jsonData.find((elem) => elem.id === id);

        // Display 404 page if the accommodation id is not found
        if (typeof objData === 'undefined') {
          navigate('/not-found');
        }

        setData(objData);
        setPictures(objData.pictures);
        setTags(objData.tags);
        setHostName(objData.host.name);
        setHostPicture(objData.host.picture);
        setEquipments(objData.equipments);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="accommodation">
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <Slider slides={pictures} />
            <div className="info-wrapper">
              <div className="primary-info">
                <div className="title">{data.title}</div>
                <div className="location">{data.location}</div>
                <div className="tags">
                  {tags.map((tag) => <Tag label={tag} key={tag.toLowerCase()} />)}
                </div>
              </div>
              <div className="secondary-info">
                <Rating length={parseInt(data.rating, 10)} />
                <HostProfile name={hostName} imageUrl={hostPicture} />
              </div>
            </div>
            <div className="main-content">
              {data.description && <Collapse title="Description" body={data.description} />}
              {equipments && (
                <Collapse
                  title="Équipements"
                  body={(equipments.map((elem) => <p key={elem.toLowerCase()}>{elem}</p>))}
                />
              )}
            </div>
          </>
        )
      }
    </div>
  );
}
