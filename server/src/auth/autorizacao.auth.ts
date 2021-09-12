async function handleAuth(user: string, password: string): Promise<string> {
    const user_db = "admin" // buscar user no banco de dados
    const pass_db = "admin" // buscar password no banco de dados
    const id = "id_user" // id do usuário no banco de dados
    
    if ((user === user_db) && (password === pass_db)) {
        return id
    }

    return null
}

export { handleAuth }