// CollegeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditCollege from './EditCollege';

const CollegeList = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editCollege, setEditCollege] = useState(null);

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get('http://localhost:8080/colleges');
                setColleges(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchColleges();
    }, []);

    // Delete college from backend and update UI
    const handleDeleteCollege = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/colleges/${id}`);
            setColleges(prevColleges => prevColleges.filter(college => college.id !== id));
            alert("College deleted successfully");
        } catch (err) {
            alert("Error deleting college");
        }
    };

    const handleUpdateCollege = (college) => {
        setEditCollege(college);
    };

    const handleUpdateSuccess = (updatedCollege) => {
        setColleges(prevColleges => prevColleges.map(college =>
            college.id === editCollege.id ? { ...college, ...updatedCollege } : college
        ));
        setEditCollege(null);
    };

    const handleCancelUpdate = () => {
        setEditCollege(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '20px'
    };

    const listStyle = {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        padding: 0,
        backgroundColor: '#f7f7f7',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.01)'
        }
    };

    const listItemStyle = {
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '10px',
        padding: '15px',
        boxShadow: '0 0 20px 10px gray',
        position: 'relative'
    };

    const titleStyle = {
        color: '#34495e',
        marginTop: 0
    };

    const paragraphStyle = {
        margin: '5px 0',
        color: '#7f8c8d'
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px 0'
    };

    const deleteButtonStyle = {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginRight: '10px'
    };

    const updateButtonStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Colleges</h1>
            <ul style={listStyle}>
                {colleges.map(college => (
                    <li key={college.id} style={listItemStyle}>
                        <h2 style={titleStyle}>College Name: {college.name}</h2>
                        <p style={paragraphStyle}>Address: {college.address}</p>
                        <p style={paragraphStyle}>Accreditation: {college.accreditation}</p>
                        <p style={paragraphStyle}>Established Date: {college.establishedDate}</p>
                        <div style={buttonContainerStyle}>
                            <button style={deleteButtonStyle} onClick={() => handleDeleteCollege(college.id)}>
                                Delete
                            </button>
                            <button style={updateButtonStyle} onClick={() => handleUpdateCollege(college)}>
                                Update
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {editCollege && (
                <EditCollege
                    college={editCollege}
                    onUpdate={handleUpdateSuccess}
                    onCancel={handleCancelUpdate}
                />
            )}
        </div>
    );
};

export default CollegeList;
