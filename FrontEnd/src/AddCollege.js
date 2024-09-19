// AddCollege.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddCollege = () => {
    const [newCollege, setNewCollege] = useState({
        name: '',
        address: '',
        accreditation: '',
        establishedDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCollege(prev => ({ ...prev, [name]: value }));
    };

    const handleAddCollege = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/colleges', newCollege);
            setNewCollege({ name: '', address: '', accreditation: '', establishedDate: '' });
            alert("added SUcessfully")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Add New College</h1>
            <form onSubmit={handleAddCollege} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="College Name"
                    value={newCollege.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newCollege.address}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="accreditation"
                    placeholder="Accreditation"
                    value={newCollege.accreditation}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="date"
                    name="establishedDate"
                    placeholder="Established Date"
                    value={newCollege.establishedDate}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Add College</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    input: {
        padding: '0.75rem',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.2s ease-in-out'
    },
    input: {
        padding: '0.75rem',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.2s ease-in-out'
    },
    button: {
        padding: '0.75rem',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out'
    }
};

export default AddCollege;
