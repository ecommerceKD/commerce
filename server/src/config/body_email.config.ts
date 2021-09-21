const body_confirm_email = (name: string, confirmationCode: string) => {
    return `
    <h2>Olá ${name}</h2>
    <p>Obrigado por se inscrever. Por favor, confirme seu email clicando no link abaixo</p>
    <a href=http://localhost:8980/confirme/${confirmationCode}> Clique Aqui</a>
    </div>`
}

const body_redefinition_pass = (name: string, id: string) => {
    return `
    <h2>Olá ${name}</h2>
    <p>Clique no link abaixo para alterar sua senha</p>
    <a href=http://localhost:8980/new_pass/${id}> Clique Aqui</a>
    </div>`
}

export { body_confirm_email, body_redefinition_pass }