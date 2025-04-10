import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../api/api";
import GoogleMap from "./GoogleMap";
import { useDispatch, useSelector } from "react-redux";

const PhotoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.photos);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchPhotos());
    }
  }, [dispatch, list.length]);

  useEffect(() => {
    const found = list.find((photo) => photo.id.toString() === id);
    setPhoto(found);
  }, [list, id]);

  if (loading) return <p>Đang tải...</p>

  if (!photo)
    return (
      <div style={{ padding: "20px" }}>Không tìm thấy dữ liệu với ID {id}</div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết hình ảnh - ID: {photo.id}</h2>
      <img src="/logo192.png" alt={photo.name} />
      <p>
        <strong>Name:</strong> {photo.name}
      </p>

      <GoogleMap />
    </div>
  );
};

export default PhotoDetail;
