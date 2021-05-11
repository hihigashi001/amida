import ReactModal from "react-modal"
import { useModal } from "react-modal-hook"
import { Button } from "src/components/shared/Button"
import { customStyles } from "./customStyles"

export const EditPlayer8 = () => {
    const [showModal, hideModal] = useModal(() => (
        <>
            <ReactModal
                isOpen
                style={customStyles}
                contentLabel="PlayerName"
            >
                <p>Player8</p>
                <Button onClick={hideModal}>閉じる</Button>
            </ReactModal>
        </>
    ))

    return <Button onClick={showModal}>選択する</Button>
}
