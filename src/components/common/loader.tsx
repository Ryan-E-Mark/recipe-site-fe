import { FC } from "react"
import { Oval } from "react-loader-spinner"

export const Loader: FC = () => {
    return (
        <Oval
            height="60"
            width="60"
            secondaryColor="#ecfccb"
            color="#bef264"
          />
    )
}