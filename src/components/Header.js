import React from "react";
import Divyabhaskar from "../assets/images/divyabhaskar.png";
import "../assets/css/style.css";
import { NavLink } from "react-router-dom";
// import { Modal, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

    // let [show, setShow] = useState(false);

    // let handleClose = () => setShow(false);
    // let handleShow = () => setShow(true);

    // const searchData = (e) => {

    //     e.preventDefault();

    //     let searchRecord = {
    //         search: e.target.searchdata.value
    //     }

    //     window.localStorage.setItem("searchData", JSON.stringify(searchRecord.search));

    // }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={Divyabhaskar} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={"nav-item"}>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#02395a' : '#FFFFFF'
                                    })}
                                >Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink
                                    to="/video"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#e31e25' : '#FFFFFF'
                                    })}
                                >Video</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleShow}>Search</li> */}
                        </ul>
                    </div>
                    {/* <Modal show={show} className="search-box" onHide={handleClose}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="search-box" onSubmit={(e) => searchData(e)}>
                                <div className="search-input-icon">
                                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                                    <Form.Control
                                        type="search"
                                        name="searchdata"
                                        placeholder="વિષય, શહેર કે રાજ્ય સર્ચ કરો"
                                        className="search-bar"
                                        aria-label="Search"
                                    />
                                </div>
                                <Form.Control
                                    type="submit"
                                    value="Search"
                                    className="search-btn"
                                />
                            </Form>
                            <ul className="search-category">
                                {
                                    props.searchData.map((value, index) => {
                                        return (
                                            <li key={index}>{value}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Modal.Body>
                    </Modal> */}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;