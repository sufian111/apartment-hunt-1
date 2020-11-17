import React from "react";
import bed1 from "../../../../images/logos/bed 1.png";
import bath1 from "../../../../images/logos/bath 1.png";
import mapMarker from "../../../../images/logos/map-marker-alt-solid 1.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Hotels = ({ hotel }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 400, friction: 40 },
  }));
  const { img, name, location, bed, bath, price, _id } = hotel;
  return (
    <div className="col-md-4 col-sm-12 mt-2 mb-2">
      <div className="card-deck">
        <div className="card">
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <img src={img} className="card-img-top" alt="..." />
          </animated.div>

          <div className="card-body">
            <h4
              style={{ color: "#16322E" }}
              className="card-title font-weight-bold"
            >
              {name}
            </h4>
            <small className="card-text text-muted">
              <strong>
                <img height="20px" src={mapMarker} alt="" /> {location}
              </strong>
            </small>
            <div className="d-flex justify-content-between">
              <small className="card-text text-muted">
                <strong>
                  <img height="20px" src={bed1} alt="" /> {bed}
                </strong>
              </small>
              <small className="card-text text-muted">
                <strong>
                  <img height="20px" src={bath1} alt="" /> {bath}
                </strong>
              </small>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <h4 className="font-weight-bold" style={{ color: "#16322E" }}>
                ${price}
              </h4>

              <Link to={`/services/${_id}`}>
                <button className="btn button">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
