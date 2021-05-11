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
                                    thTagCreate.push(<th key={i} colSpan="2"><p>{props.player1}</p></th>)
                                }
                            } else if (i == 1) {
                                if (props.player2 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer2 player2={props.player2} setPlayer2={props.setPlayer2}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player2}</th>)
                                }
                            } else if (i == 2) {
                                if (props.player3 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer3 player3={props.player3} setPlayer3={props.setPlayer3}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player3}</th>)
                                }
                            } else if (i == 3) {
                                if (props.player4 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer4 player4={props.player4} setPlayer4={props.setPlayer4}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player4}</th>)
                                }
                            } else if (i == 4) {
                                if (props.player5 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer5 player5={props.player5} setPlayer5={props.setPlayer5}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player5}</th>)
                                }
                            } else if (i == 5) {
                                if (props.player6 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer6 player6={props.player6} setPlayer6={props.setPlayer6}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player6}</th>)
                                }
                            } else if (i == 6) {
                                if (props.player7 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer7 player7={props.player7} setPlayer7={props.setPlayer7}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player7}</th>)
                                }
                            } else if (i == 7) {
                                if (props.player8 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer8 player8={props.player8} setPlayer8={props.setPlayer8}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player8}</th>)
                                }
                            } else if (i == 8) {
                                if (props.player9 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer9 player9={props.player9} setPlayer9={props.setPlayer9}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player9}</th>)
                                }
                            } else if (i == 9) {
                                if (props.player10 == "") {
                                    thTagCreate.push(<th key={i} colSpan="2"><EditPlayer10 player10={props.player10} setPlayer10={props.setPlayer10}/></th>)
                                } else {
                                    thTagCreate.push(<th key={i} colSpan="2">{props.player10}</th>)
                                }
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
