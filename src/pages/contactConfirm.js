import { useCallback } from "react"
import { useRouter } from 'next/router'
//componets
import { Button } from "src/components/shared/Button"
// layout
import { UserLayout } from "src/layouts/UserLayout"
// redux
import { useDispatch, useSelector } from "react-redux"
import { setDatas, selectFormData } from "src/redux/contactSlice"
import { useForm } from "react-hook-form"

export const contactConfirm = () => {
    const router = useRouter()
    const FormData = useSelector(selectFormData)
    const dispatch = useDispatch()

    const initData = {
        name: "",
        mail: "",
        contents: "",
    }

    const { register } = useForm();

    const hendleCancel = (e) => {
        e.preventDefault();
        router.push("/contact")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setDatas(initData));
        router.push("/description")
    }

    return (
        <UserLayout>
            <div className="mb-16">
                <div className="my-4 flex justify-center">
                    <h1 className="text-gray-700">お問合わせ内容の確認</h1>
                </div>
                <div className="flex justify-center">
                    <form className="mt-4 p-4">
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="name">お名前</label>
                            <div className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm">
                                {FormData.name}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="mail">メールアドレス</label>
                            <div className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm">
                                {FormData.mail}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="contents">お問合わせ内容</label>
                            <textarea className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm" cols="40" rows="10" id="noter-text-area" name="textarea"
                                defaultValue={FormData.contents}
                                disabled
                                {...register("contents")}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white border border-primary hover:border-transparent text-sm focus:outline-none rounded-3xl p-4 m-2" onClick={hendleCancel}>前の画面に戻る</button>
                            <button className="bg-primary hover:bg-secondary text-white font-bold text-sm focus:outline-none rounded-3xl p-4 m-2" onClick={onSubmit}>送信する</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout >
    )
}

export default contactConfirm;