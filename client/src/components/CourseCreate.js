import React from "react";
import { withRouter } from "react-router-dom";

const CourseCreate = (props) => {
    return (
        <div className="course-create-form">
            <h2>Create a new course</h2>
            <form onSubmit={props.newCourse}>
                <p>Course Name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.courseForm.name}
                    onChange={props.handleFormChange}
                />
                <p>Course Description</p>
                <input
                    type="text"
                    name="description"
                    value={props.courseForm.description}
                    onChange={props.handleFormChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default withRouter(CourseCreate);