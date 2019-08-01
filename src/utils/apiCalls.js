import { URL } from '../config';

function getToken() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('no auth token');
  return `Bearer ${token}`;
}

export async function apiLogin(payload) {
  const res = await fetch(`${URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}

export async function apiGetMyCribs() {
  const res = await fetch(`${URL}/cribs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
  });
  return await res.json();
}

export async function apiAddCrib(payload) {
  const res = await fetch(`${URL}/crib`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: payload,
  });
  return await res.json();
}

export async function apiDeleteCrib(payload) {
  console.log(payload);
  const res = await fetch(`${URL}/crib`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: payload,
  });
  return await res.json();
}
