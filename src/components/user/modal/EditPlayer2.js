import ReactModal from "react-modal"
import { useModal } from "react-modal-hook"
import { Button } from "src/components/shared/Button"
import { customStyles } from "./customStyles"

export const EditPlayer2 = () => {
    const [showModal2, hideModal2] = useModal(() => (
        <>
            <ReactModal
                isOpen
                style={customStyles}
                contentLabel="PlayerName"
            >
                <p>Player2</p>
                <Button onClick={hideModal2}>閉じる</Button>
            </ReactModal>
        </>
    ))

    return <Button onClick={showModal2}>選択する</Button>
}
