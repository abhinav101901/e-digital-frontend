import React, { useRef, useState } from 'react';
import './Gform.css'
import defaultImage from '../../../../assests/upload-icon.png';


function Gform() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    document: 'select',
  });
  const [images, setImages] = useState([null, null, null]);
  const inputRefs = [useRef(null), useRef(null), useRef(null)];

  const labels = ['Photograph', 'Aadhar Front side', 'Aadhar Back side'];

  const handleImageClick = (index) => {
    inputRefs[index].current.click();
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...images];
      updatedImages[index] = imageUrl;
      setImages(updatedImages);
    }
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = {
      fullName: formData.fullName,
      contactNumber: formData.contactNumber,
      document: formData.document,
      images: images.filter((image) => image !== null),
    };

    const response = await fetch("https://e-digital-backend.vercel.app/upload", {
      method: "POST",
      body: JSON.stringify(formDataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormData({
      fullName: '',
      contactNumber: '',
      document: 'select',
    });
    // Display a submission confirmation message
    alert('Form submitted successfully!');
  };

  return (
    <div className='form-main'>

      <div className='form'>
        <img src="" alt="Form" />
      </div>

      <h2> Legal-Form</h2>
      <form className="form-detail" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleTextChange}
        /><br />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleTextChange}
        /><br />

        <label htmlFor="document">Document Need:</label>
        <select
          id="document"
          name="document"
          value={formData.document}
          onChange={handleTextChange}
        >
          <option value="Select">Select</option>
          <option value="Pan">Pan Card</option>
          <option value="Voter">Voter ID</option>
          <option value="doc3"></option>
          {/* <option value="doc12">आय / जाति प्रमाण पत्र</option>
        <option value="doc23"> जाति / निवास प्रमाण पत्र</option>
        <option value="doc13">आय / निवास प्रमाण पत्र</option>
        <option value="All-Doc">आय / जाति / निवास प्रमाण पत्र</option> */}
        </select><br />

        <div className='image-container'>
          {images.map((image, index) => (
            <div className='images' key={index} onClick={() => handleImageClick(index)}>
              <label htmlFor={`imageInput${index}`}>{labels[index]}</label>
              <img src={image || defaultImage} alt={`Image ${index}`} />
              <input
                type='file'
                id={`imageInput${index}`}
                ref={inputRefs[index]}
                onChange={(event) => handleImageChange(index, event)}
                style={{ display: 'none' }}
              />
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Gform

