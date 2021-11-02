import React from 'react';

function Profile({ name, tag, location, avatar, stats }) {
    return (
    <div>
        <div>
            <img
                src= {avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">1000</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">2000</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">3000</span>
            </li>
        </ul>
        </div>
    )
}

export default Profile;