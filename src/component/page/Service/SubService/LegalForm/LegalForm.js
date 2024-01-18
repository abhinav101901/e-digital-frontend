import './LegalForm.css';
import React, { useRef, useState } from 'react';
import form1 from '../../../../assests/form1.jpeg';
import defaultImage from '../../../../assests/upload-icon.png';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    document: 'आय_परमाण_पत्र',
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

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: JSON.stringify(formDataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setFormData({
      fullName: '',
      contactNumber: '',
      document: 'doc1',
    });
    setImages([null, null, null])
    // Display a submission confirmation message
    alert('Form submitted successfully!');
  };

  return (
    <div className='form-main'>

      <div className='form'>
        <img src={form1} alt="Form" />
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

          <option value="doc1">आय प्रमाण पत्र</option>
          <option value="doc2">जाति प्रमाण पत्र</option>
          <option value="doc3">निवास प्रमाण पत्र</option>
          <option value="doc12">आय / जाति प्रमाण पत्र</option>
          <option value="doc23"> जाति / निवास प्रमाण पत्र</option>
          <option value="doc13">आय / निवास प्रमाण पत्र</option>
          <option value="All-Doc">आय / जाति / निवास प्रमाण पत्र</option>
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
  );
};

export default Form;
