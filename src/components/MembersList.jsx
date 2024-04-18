import React, { useState } from "react";
import "./memberslist.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from 'react-bootstrap';
import Members from "./Members";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Noteslist from "./Noteslist";
import Tabspage from "./Tabspage";
function MembersList() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        profile: '',
        name: '',
        email: '',
        status: '',
        phone: ''
    });
    console.log(formData);

    const handleClose = () => {
        setShow(false);
        setFormData({
            profile: '',
            name: '',
            email: '',
            status: '',
            phone: ''
        });
    };

    const handleShow = () => setShow(true);

    const handleSave = async () => {
        try {
            const response = await fetch('https://core.teemify.ai/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Member created successfully');
               
                handleClose();
               toast.success('member added successfully')
            } else {
                console.error('Failed to create member');
            }
        } catch (error) {
            console.error('Error creating member:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profile: e.target.files[0] });
    };

    return (
        <div className="container ">
              <Tabspage/>
            <div className="memberslist">
              
                <p className="heading">Members</p>
                <div className="buttons">
                    <button onClick={handleShow}>add new</button>
                    <button>import members</button>
                    <button>export members</button>
                </div>
                <div className="filter">
                    <button style={{backgroundColor:"#6f5cc3",color:"white"}}>filter</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="blog__addblog-input">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="blog__addblog-input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="blog__addblog-input">
                            <label htmlFor="status">Status</label>
                            <select name='status' id='status' value={formData.status} onChange={handleChange}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="blog__addblog-input">
                            <label htmlFor="file">Upload Your Image</label>
                            <input type="file" name='file' id='file' onChange={handleFileChange} />
                        </div>
                        <div className="blog__addblog-input" >
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name='phone'
                                id='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
            <Members />
            <Noteslist/>
            <ToastContainer />
        </div>
    );
}

export default MembersList;
