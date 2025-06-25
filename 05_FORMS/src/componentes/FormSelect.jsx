import './FirsForm.css'
import { useState } from 'react'

export default function FormSelect(){

    const [select, setSelect] = useState()

    return(
        <div>
            <form>
                <label>Selecione sua opção:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="servidor">Servidor</option>
                        <option value="diretor">Diretor</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>A opção escolhida foi: {select}</p>

        </div>
    )
}