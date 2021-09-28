import { useState } from 'react'
import { AiOutlineDelete, AiFillInfoCircle } from '../../icons'

import './index.scss'



interface infoProfileInterface {
    order: boolean;       //É um pedido ou um Endereço
    atributo1?: string,   //Numero do pedido ou Nome do endereço
    atributo2?: string,   //Descrição do pedido ou Nome da cidade
    atributo3?: string,   //Data do pedido ou Logradouro do endereço
    atributo4?: string,   //Valor do pedido ou CEP do endereço
}

export default function InfoProfile(props: infoProfileInterface) {
    const [deleteIcon, setDeleteIcon] = useState(false)

    function alertDelete() {
        deleteIcon ? setDeleteIcon(false) : setDeleteIcon(true)
    }

    return (
        props.order ?
            <div className="card-order-info">
                <p>Pedido: {props.atributo1} </p>
                <p>Descrição: {props.atributo2}</p>
                <p>Data: {props.atributo3}</p>
                <p>Valor: {props.atributo4}</p>
            </div>
            :
            <div className="card-address-info">
                <div className="address-infos">
                    <p>Endereço: {props.atributo1} </p>
                    <p>Cidade: {props.atributo2}</p>
                    <p>Logradouro: {props.atributo3}</p>
                    <p>CEP: {props.atributo4}</p>
                </div>

                <div className="icons-address">
                    {
                        deleteIcon ?
                            <div className="content-alert-delete-address" onClick={alertDelete} >
                                <small>Clique para confirma! </small>
                                <AiFillInfoCircle className="address-info-delete" />
                            </div> :
                            <AiOutlineDelete className="address-delete" onClick={alertDelete} />
                    }
                </div>
            </div>
    )
}