import db from '../database/db_connect.js'

export const findAll = async () => await db('SELECT * FROM posts ORDER BY id ASC')

export const create = async (titulo, url, descripcion) =>
  await db('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *;', [titulo, url, descripcion])

export const updateLikeById = async (id) =>
  await db('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;', [id])

export const deleteById = async (id) =>
  await db('DELETE FROM posts WHERE id = $1 RETURNING *;', [id])