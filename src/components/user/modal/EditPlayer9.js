import { useState } from "react"
import ReactModal from "react-modal"
import { useModal } from "react-modal-hook"
import { customStyles } from "./customStyles"
import cc from "classcat";
import { selectAmidakuji, putPlayer9 } from "src/redux/amidaSlice";
import { useSelector } from "react-redux";

export const EditPlayer9 = () => {
    document.onkeypress = enter;
    function enter() {
        if (window.event.keyCode == 13) {
            return false;
        }
    }
    const [value, setValue] = useState("")
    const InputClassName = cc([
        "shadow-lg mt-2 block appearance-none w-full border border-grey-light hover:border-primary px-2 py-2 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm",
    ]);
    const SecondaryClassName = cc([
        "shadow-lg bg-transparent hover:bg-primary text-primary font-semibold hover:text-white border border-primary hover:border-transparent text-sm focus:outline-none rounded-3xl p-4 m-2",
    ]);
    const PrimaryClassName = cc([
        "shadow-lg bg-primary hover:bg-secondary text-white font-bold text-sm focus:outline-none rounded-3xl p-4 m-2",
    ]);
    const Admidakuji = useSelector(selectAmidakuji)
    const onSubmit = () => {
        const sendData = { ...Admidakuji, player9: value }
        putPlayer9(sendData)
        hideModal();
    }
    const [showModal, hideModal] = useModal(() => (
        <>
            <ReactModal
                isOpen
                style={customStyles}
                contentLabel="PlayerName"
                shouldCloseOnOverlayClick={true}
                onRequestClose={hideModal}
            >
                <form className="px-12 pt-12" onSubmit={onSubmit} autoComplete="off" >
                    <label htmlFor="playerName text-gray-700">お名前</label>
                    <input name="player9" className={InputClassName} autoFocus value={value} onChange={(e) => setValue(e.target.value)} required maxLength="12" />
                    <div className="mt-2 text-xs text-gray-700">※ 12文字以内でお願いします！</div>
                    <div className="flex flex-row justify-end w-full mt-8">
                        <button className={SecondaryClassName} onClick={hideModal}>キャンセル</button>
                        <button className={PrimaryClassName} type="submit">送信する</button>
                    </div>
                </form>
            </ReactModal>
        </>
    ), [value])

    return <p className="bg-primary text-white cursor-pointer writing-mode-vertical mx-auto py-6 px-1 border border-gray-200 leading-none　m-0 whitespace-nowrap" onClick={showModal}>選択する</p>
}
