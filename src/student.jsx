import PropTypes from "prop-types";

function Student(pr) {
  return (
    <div className="student">
      <p>Name: {pr.name}</p>
      <p>Age: {pr.age}</p>
      <p>Student: {pr.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

Student.defaultProps = {
  name: "Saleh",
  age: 25,
  isStudent: true
};

export default Student;
