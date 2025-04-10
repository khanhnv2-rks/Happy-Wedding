import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentItem } from "../redux/photoSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchPhotos } from "../api/api";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleClick = (item) => {
    dispatch(setCurrentItem(item));
    navigate(`/happy/${item.id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Danh sách ảnh Test 123</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <span onClick={() => handleClick(item)}>
              <Link to={`/happy/${item.id}`}>Name: {item.name}</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
