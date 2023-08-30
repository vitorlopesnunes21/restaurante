import style from './Buscador.module.scss'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props) {
    return (
        <div>
            <input className={style.buscador}
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
            />
        </div>
    )
}