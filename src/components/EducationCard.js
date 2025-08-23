import { Col } from "react-bootstrap";

export const EducationCard = ({ title, description, description1 , description2 , imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">         
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span> {description2}<br></br>{description} <br></br> {description1}</span>
           
        </div>
      </div>
    </Col>
  )
}
