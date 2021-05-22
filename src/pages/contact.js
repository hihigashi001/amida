import { useCallback } from "react"
import { useRouter } from 'next/router'
// layout
import { UserLayout } from "src/layouts/UserLayout"
// redux
import { useDispatch, useSelector } from "react-redux"
import { setDatas, selectFormData } from "src/redux/contactSlice"
import { useForm } from "react-hook-form"

export const contact = () => {
    const router = useRouter()
    const FormData = useSelector(selectFormData)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();
    const hendleCancel = (e) => {
        e.preventDefault();
        router.push("/description")
    }
    const onSubmit = useCallback((data) => {
        dispatch(setDatas(data));
        router.push("/contactConfirm")
    }, []);

    return (
        <UserLayout>
            <div className="mb-16">
                <div className="my-4 flex justify-center">
                    <h1 className="text-gray-700">お問合わせ</h1>
                </div>
                <div className="flex justify-center">
                    <form className="mt-4 p-4">
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="name">お名前</label>
                            <input
                                className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm"
                                type="text"
                                placeholder="例：井本　達也"
                                defaultValue={FormData.name}
                                {...register("name", { required: true, maxLength: 50 })}
                            />
                            {errors.name && <span className="text-red-400 text-xs">※入力チェック</span>}
                        </div>
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="mail">メールアドレス</label>
                            <input
                                className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm"
                                type="email"
                                placeholder="例：mailaddress@example.co.jp"
                                defaultValue={FormData.mail}
                                {...register("mail", { required: true, maxLength: 50, pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ })}
                            />
                            {errors.mail && <span className="text-red-400 text-xs">※入力チェック</span>}
                        </div>
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="contents">お問合わせ内容</label>
                            <textarea className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm" cols="40" rows="10" id="noter-text-area" name="textarea"
                                defaultValue={FormData.contents}
                                {...register("contents", { required: true, })}
                            />
                            {errors.contents && <span className="text-red-400 text-xs">※入力チェック</span>}
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white border border-primary hover:border-transparent text-sm focus:outline-none rounded-3xl p-4 m-2" onClick={hendleCancel}>前の画面に戻る</button>
                            <button className="bg-primary hover:bg-secondary text-white font-bold text-sm focus:outline-none rounded-3xl p-4 m-2" onClick={handleSubmit(onSubmit)}>入力確認画面へ</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout >
    )
}

export default contact;