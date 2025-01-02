import React from "react";
import '../../assets/css/Form.css';

const Form = () => {
    return (
        <footer className="footer">
            <div>
                <h2 style={{ textAlign: 'center', color: '', fontSize: '24px', marginBottom: '20px' }}>
                    "The future depends on what we do in the present."
                </h2>
                <form>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter your name" 
                            required 
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input 
                            type="number" 
                            name="pn" 
                            id="pn" 
                            placeholder="Enter your phone number" 
                            required 
                        />
                    </label>
                    <label>
                        Email ID:
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px', color: '#555' }}>
                    
                </p>
            </div>
        </footer>
    );
};

export default Form;
