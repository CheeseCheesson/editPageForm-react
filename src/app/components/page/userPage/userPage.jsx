/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import Qualities from "../../ui/qualites";
import { Link, Route } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <>
                <div>
                    <h1> {user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <Qualities qualities={user.qualities} />
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h2>Rate: {user.rate}</h2>
                    <button
                        onClick={handleClick}
                        className="btn btn-primary btn-sm btn-dark m-1"
                    >
                        Вернуться
                    </button>

                    <Link
                        className="btn btn-primary btn-sm btn-primary m-1"
                        to={{
                            pathname: `/users/${userId}/edit`,
                            propsSearch: user
                        }}
                    >
                        Изменить
                    </Link>
                </div>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
