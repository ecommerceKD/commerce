const body_email = (name: string, confirmationCode: string) => {
    return `
    <h2>Olá ${name}</h2>
    <p>Obrigado por se inscrever. Por favor, confirme seu email clicando no link abaixo</p>
    <a href=http://localhost:8980/confirme/${confirmationCode}> Clique Aqui</a>
    </div>`
}

export { body_email }