import { CalcBtn } from "../calcBtn/calcBtn"

export const ActionsPanel = () => {

    return (
        <div className="panel panel__actions">
                <CalcBtn content={'/'} ></CalcBtn>
                <CalcBtn content={'x'} ></CalcBtn>
                <CalcBtn content={'-'} ></CalcBtn>
                <CalcBtn content={'+'} ></CalcBtn>
        </div>
    )
}
