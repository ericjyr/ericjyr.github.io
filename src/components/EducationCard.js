import { Col } from "react-bootstrap";

export const EducationCard = ({ institute, description, imgUrl }) => {
  return (
    <Col size={12} sm={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{institute}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}