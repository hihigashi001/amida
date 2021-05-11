import { EditPlayer1 } from "src/components/user/modal/EditPlayer1"
import { EditPlayer2 } from "src/components/user/modal/EditPlayer2"
import { EditPlayer3 } from "src/components/user/modal/EditPlayer3"
import { EditPlayer4 } from "src/components/user/modal/EditPlayer4"
import { EditPlayer5 } from "src/components/user/modal/EditPlayer5"
import { EditPlayer6 } from "src/components/user/modal/EditPlayer6"
import { EditPlayer7 } from "src/components/user/modal/EditPlayer7"
import { EditPlayer8 } from "src/components/user/modal/EditPlayer8"
import { EditPlayer9 } from "src/components/user/modal/EditPlayer9"
import { EditPlayer10 } from "src/components/user/modal/EditPlayer10"

export const PlayerHead = (props) => {
    return (
        <table className="w-full table-fixed">
            <tbody className="w-full">
            {
                    (() => {
                        const thTagCreate = [];
                        for (let i = 0; i < props.playerCount; i++) {
                            if (i == 0) {
                                if (props.player1 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer1 player1={props.player1} setPlayer1={props.setPlayer1}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player1}</th>)
                                }
                            } else if (i == 1) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer2 /></th>)
                            } else if (i == 2) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer3 /></th>)
                            } else if (i == 3) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer4 /></th>)
                            } else if (i == 4) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer5 /></th>)
                            } else if (i == 5) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer6 /></th>)
                            } else if (i == 6) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer7 /></th>)
                            } else if (i == 7) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer8 /></th>)
                            } else if (i == 8) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer9 /></th>)
                            } else if (i == 9) {
                                thTagCreate.push(<th key={i} colSpan="2"><EditPlayer10 /></th>)
                            }
                        }
                        return (
                            <tr className="w-full">
                                {
                                    thTagCreate.map((thTag) => {
                                        return thTag;
                                    })
                                }
                            </tr>
                        )
                    })()
                }
            </tbody>
        </table>
    )
}
