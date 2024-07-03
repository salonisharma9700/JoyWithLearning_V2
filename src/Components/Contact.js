// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import '../cssfiles/play.css';

// const Contact = ({ onSubmit }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({});

//     const validateField = (name, value) => {
//         let error = '';
//         if (name === 'email') {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(value)) {
//                 error = 'Please enter a valid email.';
//             }
//         } else if (!value.trim()) {
//             error = 'This field is required.';
//         }
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//         validateField(name, value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let formValid = true;
//         let newErrors = {};

//         Object.keys(formData).forEach((field) => {
//             validateField(field, formData[field]);
//             if (!formData[field].trim()) {
//                 formValid = false;
//                 newErrors[field] = 'This field is required.';
//             }
//         });

//         if (formValid) {
//             try {
//                 const emailParams = {
//                     from_name: formData.name,
//                     from_email: formData.email,
//                     message: formData.message,
//                 };
//                 const serviceId = 'service_v1786bs'; 
//                 const templateId = 'template_cavtrlg';
//                 const userId = '3NQW95XFCjHuG4uZl';

//                 const response = await emailjs.send(serviceId, templateId, emailParams, userId);
//                 console.log('Email sent successfully:', response);

            
//                 setFormData({
//                     name: '',
//                     email: '',
//                     message: '',
//                 });
//                 setErrors({});
//                 onSubmit && onSubmit(); 
//             } catch (error) {
//                 console.error('Email sending failed:', error);
//             }
//         } else {
//             setErrors(newErrors);
//             console.log('Please fix the errors before submitting.');
//         }
//     };

//     return (
//         <div className='uploadform'>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-9">
//                         <div className="form-container">
//                             <h3>Help us improve with your valuable feedback.</h3>
//                             <form   className="col-sm-9" onSubmit={handleSubmit}>
//                                 <div className={`form-group ${errors.name ? 'has-error' : ''}`} >
//                                     <label htmlFor="name">Name:</label>
                                    
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         className= {`form-control ${errors.name ? 'is-invalid' : ''}`}
//                                         value={formData.name}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your name"
//                                         required
//                                     />
//                                     {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//                                 </div>
//                                 <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
//                                     <label htmlFor="email">Email:</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                                 </div>
//                                 <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
//                                     <label htmlFor="message">Message/Feedback:</label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         rows="4"
//                                         className={`form-control ${errors.message ? 'is-invalid' : ''}`}
//                                         value={formData.message}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your message or feedback"
//                                         required
//                                     ></textarea>
//                                     {errors.message && <div className="invalid-feedback">{errors.message}</div>}
//                                 </div>
//                                 <button type="submit" className="button">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../cssfiles/play.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

const Contact = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [showModal, setShowModal] = useState(false);

    const validateField = (name, value) => {
        let error = '';
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = 'Please enter a valid email.';
            }
        } else if (!value.trim()) {
            error = 'This field is required.';
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formValid = true;
        let newErrors = {};

        Object.keys(formData).forEach((field) => {
            validateField(field, formData[field]);
            if (!formData[field].trim()) {
                formValid = false;
                newErrors[field] = 'This field is required.';
            }
        });

        if (formValid) {
            try {
                const emailParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                };
                const serviceId = 'service_v1786bs'; 
                const templateId = 'template_cavtrlg';
                const userId = '3NQW95XFCjHuG4uZl';

                const response = await emailjs.send(serviceId, templateId, emailParams, userId);
                console.log('Email sent successfully:', response);

                setModalTitle('Success');
                setModalMessage('Thank you for submitting your feedback.');
                setShowModal(true);

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                setErrors({});
                onSubmit && onSubmit(); 
            } catch (error) {
                console.error('Email sending failed:', error);
                setModalTitle('Error');
                setModalMessage('Failed to submit your feedback. Please try again later.');
                setShowModal(true);
            }
        } else {
            setErrors(newErrors);
            console.log('Please fix the errors before submitting.');
        }
    };

    return (
        <div className='uploadform'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-9">
                        <div className="form-container">
                            <h3>Help us improve with your valuable feedback.</h3>
                            <form className="col-sm-9" onSubmit={handleSubmit}>
                                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                                    <label htmlFor="message">Message/Feedback:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Enter your message or feedback"
                                        required
                                    ></textarea>
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                                <button type="submit" className="button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>{modalMessage}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
