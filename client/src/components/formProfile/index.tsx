import { useState, useEffect, useContext, FormEvent } from 'react';
import { UserContext } from "../../context/UserContext"
import { axiosApi } from '../../config/axios.config'

import './index.scss'

export default function FormProfile() {
    const { user } = useContext(UserContext)

    const [idUser, setIdUser] = useState("");
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")
    const [cep, setCep] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState("")

    const [styleEmail, setStyleEmail] = useState({})
    const [msgEmail, setMsgEmail] = useState('Email para alterar senha')

    const [styleSubmit, setStyleSubmit] = useState({})
    const [msgSubmit, setMsgSubmit] = useState('Salvar')


    useEffect(() => {
        if (!user) return
        setCelular(user.numero_telefone1)
        setLogradouro(user.rua_usuario)
        setEstado(user.estado_usuario)
        setBairro(user.bairro_usuario)
        setCidade(user.cidade_usuario)
        setEmail(user.email_usuario)
        setNumero(user.num_usuario)
        setNome(user.nome_usuario)
        setCep(user.cep_usuario)
        setIdUser(user._id)
    }, [user])

    async function handlerPutUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await axiosApi({
                method: 'PUT',
                url: `/user/${idUser}`,
                data: {
                    nome_usuario: nome,
                    email_usuario: email,
                    senha1_usuario: user.senha1_usuario,
                    senha2_usuario: user.senha2_usuario,
                    rua_usuario: logradouro,
                    bairro_usuario: bairro,
                    cidade_usuario: cidade,
                    estado_usuario: estado,
                    num_usuario: numero,
                    cep_usuario: cep,
                    tipo_telefone: user.tipo_telefone,
                    numero_telefone1: celular,
                    numero_telefone2: user.numero_telefone2,
                }
            })
            setStyleSubmit({ background: '#81d87c' })
            setMsgSubmit('Sucesso!')
        } catch (error) {
            setStyleSubmit({ background: '#d87c7c' })
            setMsgSubmit('Ops!!!')
            console.log(error)
        }
        setTimeout(() => {
            setStyleSubmit({})
            setMsgSubmit('Salvar')
        }, 3000)
    }

    async function handlerEmailPass() {
        try {
            await axiosApi({
                method: 'POST',
                url: `new_pass/email/${idUser}`
            })
            setStyleEmail({ background: '#81d87c' })
            setMsgEmail('Email enviado com sucesso!!!')
        } catch (error) {
            setStyleEmail({ background: '#d87c7c' })
            setMsgEmail('Desculpe, houve um erro!!!')
        }
        setTimeout(() => {
            setStyleEmail({})
            setMsgEmail('Email para alterar senha')
        }, 5000)
    }


    //Efeito de subir as label do Form
    useEffect(() => {
        //Não tente entender, apenas aceite que funciona
        const labels = document.querySelectorAll('.label-data')
        const inputs = document.querySelectorAll('.input-data')

        inputs.forEach((input) => {
            labels.forEach((label) => {
                if (label.getAttribute('for') === input.getAttribute('id')) {
                    if (input.getAttribute('value')) {
                        label.classList.add("focus")
                    }
                    else {
                        label.classList.remove("focus")
                    }
                }
            })
        })

    }, [nome, email, celular, cep, cidade, logradouro, bairro, numero])

    return (
        <form onSubmit={(e) => { handlerPutUser(e) }} id="form-data">
            <fieldset className="fieldset-data">

                <div className="content-data">
                    <label htmlFor="nome-data" className="label-data">Nome </label>
                    <input
                        required
                        type="text"
                        className="input-data"
                        id="nome-data"
                        value={nome}
                        onChange={(e) => { setNome(e.target.value) }}
                    />
                </div>

                <div className="content-data">
                    <label htmlFor="email-data" className="label-data" >Email </label>
                    <input
                        required
                        type="email"
                        className="input-data"
                        id="email-data"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div className="content-inputs">
                    <div className="content-data">
                        <label htmlFor="telefone-data" className="label-data" > Celular </label>
                        <input
                            required
                            minLength={10}
                            maxLength={11}
                            type="tel"
                            className="input-data"
                            id="telefone-data"
                            value={celular}
                            onChange={(e) => { setCelular(e.target.value.replace(/[^0-9]/g, "")) }}
                        />
                    </div>

                    <div className="content-data">
                        <span
                            className="input-data"
                            id="senha-data"
                            onClick={handlerEmailPass}
                            style={styleEmail}
                        >
                            {msgEmail}
                        </span>
                    </div>

                </div>
            </fieldset>

            <fieldset className="fieldset-data">
                <div className="content-inputs">

                    <div className="content-data">
                        <label htmlFor="cep-data" className="label-data" >CEP </label>
                        <input
                            required
                            type="text"
                            maxLength={8}
                            minLength={8}
                            className="input-data"
                            id="cep-data"
                            value={cep}
                            onChange={(e) => { setCep(e.target.value.replace(/[^0-9]/g, "")) }}
                        />
                    </div>

                    <div className="content-data">
                        <label htmlFor="cidade-data" className="label-data" >Cidade </label>
                        <input
                            required
                            type="text"
                            className="input-data"
                            id="cidade-data"
                            value={cidade}
                            onChange={(e) => { setCidade(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="content-inputs">
                    <div className="content-data">
                        <label htmlFor="bairro-data" className="label-data" >Bairro </label>
                        <input
                            required
                            type="text"
                            className="input-data"
                            id="bairro-data"
                            value={bairro}
                            onChange={(e) => { setBairro(e.target.value) }}
                        />
                    </div>

                    <div className="content-data">
                        <label htmlFor="estado-data" className="label-data" >Estado </label>
                        <input
                            required
                            type="text"
                            className="input-data"
                            id="estado-data"
                            value={estado}
                            onChange={(e) => { setEstado(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="content-inputs">
                    <div className="content-data">
                        <label htmlFor="rua-data" className="label-data" >Logradouro </label>
                        <input
                            required
                            type="text"
                            className="input-data"
                            id="rua-data"
                            value={logradouro}
                            onChange={(e) => { setLogradouro(e.target.value) }}
                        />
                    </div>

                    <div className="content-data">
                        <label htmlFor="numero-data" className="label-data" >Numero </label>
                        <input
                            required
                            type="text"
                            className="input-data"
                            id="numero-data"
                            value={numero}
                            onChange={(e) => { setNumero(e.target.value) }}
                        />
                    </div>
                </div>
            </fieldset>
            <input type="submit" value={msgSubmit} style={styleSubmit} />
        </form>
    )
}



















    // const cepApi = require('cep-promise'); //Essa api não funciona corretamente com o Import

    // const [idUser,] = useState('614a0b5a59bd994c3c515833')

    // async function handlerGetUser() {
    //     const { data } = await axiosApi({
    //         method: "GET",
    //         url: `user/${idUser}`
    //     })

    //     setNome(data[0].nome_usuario)
    //     setEmail(data[0].email_usuario)
    //     setCelular(data[0].numero_telefone1)
    //     setCep(data[0].cep_usuario)
    //     setCidade(data[0].cidade_usuario)
    //     setLogradouro(data[0].rua_usuario)
    //     setBairro(data[0].bairro_usuario)
    //     setNumero(data[0].num_usuario)

    //     console.log(data[0])
    // }



    // //Preenchimento automático do endereço
    // useMemo(async () => {
    //     if (cep.length === 8) {
    //         try {
    //             const result = await cepApi(cep)
    //             setCidade(result.city)
    //             setLogradouro(result.street)
    //             setBairro(result.neighborhood)
    //             console.log(result)

    //         } catch (error) {
    //             setCidade('')
    //             setLogradouro('')
    //             setBairro('')
    //         }
    //     } else {
    //         setCidade('')
    //         setLogradouro('')
    //         setBairro('')
    //     }

    // }, [cep])


// nome_usuario
// email_usuario
// senha1_usuario
// senha2_usuario

// //Endereço
// rua_usuario
// bairro_usuario
// cidade_usuario
// estado_usuario
// num_usuario
// cep_usuario

// //Telefone
// tipo_telefone ['Celular', 'Fixo']
// numero_telefone1
// numero_telefone2