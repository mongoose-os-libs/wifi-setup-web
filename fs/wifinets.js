// WifiNets.js
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const WifiNets = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from your backend (Mongoose)
        fetch('/api/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data.categories))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    return (
        <select>
            {categories.map((wifinet) => (
                <option key={wifinet._id} value={wifinet._id}>
                    {wifinet.name}
                </option>
            ))}
        </select>
    );
};

export default WifiNets;
