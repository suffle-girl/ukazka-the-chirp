import { render } from '@czechitas/render';
import '../global.css';
import './profil.css';
import './index.css';

const params = new URLSearchParams(window.location.search);
const id = params.get("user");
console.log(id)

const response = await fetch (`http://localhost:4000/api/users/${id}`);
const json = await response.json();
const user = json.data;


document.querySelector('#root').innerHTML = render(
    <div className="container">
        <h1>Profil uživatele</h1>
        <p>Jméno: {user.name}</p>
        <p>Uživatelské jméno: @{user.handle}</p>
        <p>Bio: {user.bio}</p>
        <img src={`http://localhost:4000${user.avatar}`} alt={user.name} />
    </div>
  );