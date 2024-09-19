import React, { useState } from 'react';
import axios from 'axios';

const EditCollege = ({ college, onUpdate, onCancel }) => {
    const [updatedCollege, setUpdatedCollege] = useState({
        name: college.name,
        address: college.address,
        accreditation: college.accreditation,
        establishedDate: college.establishedDate,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCollege((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log('Updating college:', college.id, updatedCollege); // Log for debugging
            await axios.put(`http://localhost:8080/colleges/${college.id}`, updatedCollege);
            onUpdate(updatedCollege);
        } catch (err) {
            console.error('Error updating college:', err);
        }
    };

  

    // Internal CSS styles
    const styles = {
        container: {
            marginTop: '20px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
            color: '#333',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        input: {
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
        },
        button: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
        },
        cancelButton: {
            backgroundColor: '#6c757d',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Edit College</h2>
            <form style={styles.form} onSubmit={handleSubmitUpdate}>
                <input
                    type="text"
                    name="name"
                    placeholder="College Name"
                    value={updatedCollege.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={updatedCollege.address}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="accreditation"
                    placeholder="Accreditation"
                    value={updatedCollege.accreditation}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="date"
                    name="establishedDate"
                    placeholder="Established Date"
                    value={updatedCollege.establishedDate}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Update College</button>
                <button
                    type="button"
                    onClick={onCancel}
                    style={{ ...styles.button, ...styles.cancelButton }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditCollege;
