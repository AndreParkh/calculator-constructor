interface calcBtnProps {
    content: number | string
}

export const CalcBtn = (props: calcBtnProps) => <p className="calc__btn">{props.content}</p>