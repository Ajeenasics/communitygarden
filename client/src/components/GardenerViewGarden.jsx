import React, { useState, useEffect } from 'react';
import axios from '../BaseAPI/axiosInstance';
import '../assets/css/garderner.css';
import GardenerHomeNav from './GardenerHomeNav';

function GardenerViewGarden({url}) {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const gardenerId = localStorage.getItem("gardenerId");
  useEffect(() => {
    fetchPlots();
  }, []);

  const fetchPlots = async () => {
    try {
      const response = await axios.get('/gardener/'+gardenerId); // Make sure this endpoint is correct
      setPlots(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch plots');
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center text-danger mt-5">{error}</div>;

  return (
    <div className="garden-plot-view">
      <GardenerHomeNav />

      {/* Hero Section */}
      <div className="gardenergardenhero-section">
        <div className="hero-content text-white text-center">
          <h1>🌿 Garden Plot Overview</h1>
          <p>Explore available and active plots in your community garden</p>
        </div>
      </div>

      {/* Plot Cards */}
      <div className="container my-5">
        <div className="row">
          {plots.map((plot) => (
            <div className="col-md-6 col-lg-4 mb-4" key={plot._id || plot.id}>
              <div className="card plot-card shadow-sm">
                <img
                  src={`${url}/${plot.image.filename}`}
                  className="card-img-top"
                  alt={plot.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{plot.name}</h5>
                  <p className="card-text">
                    <strong>Size : </strong> {plot.size} <br />
                    <strong>plotName : </strong> {plot.plotName} <br />
                    <strong>location : </strong> {plot.location}</p>
                    {/*<span
                      className={`badge ${
                        plot.status === 'Active'
                          ? 'bg-success'
                          : plot.status === 'Available'
                          ? 'bg-primary'
                          : plot.status === 'Harvested'
                          ? 'bg-secondary'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {plot.status}
                    </span> 
                  </p>
                  <button className="btn btn-outline-success w-100 mt-2">
                    View Details
                  </button>*/}
                </div>
              </div>
            </div>
          ))}
          {plots.length === 0 && (
            <div className="col-12 text-center">
              <p>No plots found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GardenerViewGarden;
