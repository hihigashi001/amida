import ReactModal from "react-modal"
import { useModal } from "react-modal-hook"
import { Button } from "src/components/shared/Button"
import { customStyles } from "./customStyles"
import { useForm } from "react-hook-form";
import cc from "classcat";

export const EditPlayer7 = (props) => {
    const InputClassName = cc([
        "shadow-lg mt-2 block appearance-none w-full border border-grey-light hover:border-primary px-2 py-2 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm",
      ]);
    const SecondaryClassName = cc([
        "shadow-lg bg-transparent hover:bg-primary text-primary font-semibold hover:text-white border border-primary hover:border-transparent text-sm focus:outline-none rounded-3xl p-4 m-2",
      ]);
    const PrimaryClassName = cc([
        "shadow-lg bg-primary hover:bg-secondary text-white font-bold text-sm focus:outline-none rounded-3xl p-4 m-2",
      ]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.setPlayer7(data.playerName);
        hideModal();
    }
    const [showModal, hideModal] = useModal(() => (
        <>
            <ReactModal
                isOpen
                style={customStyles}
                contentLabel="PlayerName"
            >
                <form className="px-12 pt-12" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="playerName">お名前</label>
                    <input className={InputClassName} autoFocus {...register("playerName", { required: true, maxLength: 20 })} />
                    <div className="flex flex-row justify-end w-full mt-12">
                        <button className={SecondaryClassName} onClick={hideModal}>キャンセル</button>
                        <button className={PrimaryClassName} type="submit">送信する</button>
                    </div>
                </form>
            </ReactModal>
        </>
    ))

    return <Button onClick={showModal}>選択する</Button>
}
