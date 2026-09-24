const API_URL = "https://dragonball-api.com/api";

export async function getCharacters(page = 1, limit = 12, name = "") {
  const params = new URLSearchParams();

  if (name) {
    params.set("name", name);
  } else {
    params.set("page", page);
    params.set("limit", limit);
  }

  const response = await fetch(
    `${API_URL}/characters?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("No se pudieron obtener los personajes");
  }

  return response.json();
}

export async function getCharacter(id) {
  const response = await fetch(`${API_URL}/characters/${id}`);

  if (!response.ok) {
    throw new Error("No se pudo obtener el personaje");
  }

  return response.json();
}

export async function getPlanets(page = 1, limit = 12, name = "") {
  const params = new URLSearchParams();

  if (name) {
    params.set("name", name);
  } else {
    params.set("page", page);
    params.set("limit", limit);
  }

  const response = await fetch(
    `${API_URL}/planets?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("No se pudieron obtener los planetas");
  }

  return response.json();
}

export async function getPlanet(id) {
  const response = await fetch(`${API_URL}/planets/${id}`);

  if (!response.ok) {
    throw new Error("No se pudo obtener el planeta");
  }

  return response.json();
}