import postgres from 'postgres'

const DB = postgres(import.meta.env.VITE_DATABASE_URL)

export default DB
