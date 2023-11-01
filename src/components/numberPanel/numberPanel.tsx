import { CalcBtn } from "../calcBtn/calcBtn"


export const NumberPanel = () => {
    
    const contents = [7,8,9, 4,5,6, 1,2,3, 0, ',']

    // console.log(contents)
    return (
        <div className="panel panel__number">
            {
                contents.map((item, idx) => <CalcBtn key={idx} content={item}/>)

            }
        </div>
    )
}