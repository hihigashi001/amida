import ReactModal from "react-modal"
import { useModal } from "react-modal-hook"
import { Button } from "src/components/shared/Button"
import { customStyles } from "./customStyles"

export const EditPlayer10 = () => {
    const [showModal, hideModal] = useModal(() => (
        <>
            <ReactModal
                isOpen
                style={customStyles}
                contentLabel="PlayerName"
            >
                <p>Player10</p>
                <Button onClick={hideModal}>閉じる</Button>
            </ReactModal>
        </>
    ))

    return <Button onClick={showModal}>選択する</Button>
}
