/* eslint-disable */
import React from "react";
import EditForm from "./../../ui/editForm";

const EditPage = ({ user }) => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <EditForm oneUserdata={user} />
                </div>
            </div>
        </div>
    );
};

export default EditPage;
