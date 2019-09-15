import React, { useEffect, useState } from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import api from '../services/api';
import heart_solid from '../assets/heart-solid.svg';
import times_solid from '../assets/times-solid.svg';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }
        loadUser();
    },
        [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },
        })
        setUsers(users.filter(user => user._id !== id));
    }
    async function handleDisLike(id) {
        await api.post(`/devs/${id}/deslikes`, null, {
            headers: { user: match.params.id },
        })
        setUsers(users.filter(user => user._id !== id));
    }
    return (
        <div className="main-container">
            <Link to='/'>
                <img src={logo} alt="Tindev" />
            </Link>
     

            {users.length > 0 ? (
                <ul>
                    {users.map(users => (
                        <li key={users._id}>
                            <img src={users.avatar} alt="{users.name}" />
                            <footer>
                                <strong>{users.name}</strong>
                                <p>{users.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button onClick={() => handleLike(users._id)}>
                                    <img src={heart_solid} alt="Like" />
                                </button>
                                <button onClick={() => handleDisLike(users._id)}>
                                    <img src={times_solid} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="empty">
                        Acabou :(
                    </div>
                )}
        </div>
    )
}