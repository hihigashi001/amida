import { useCallback } from "react"
//componets
import { Button } from "src/components/shared/Button"
// layout
import { UserLayout } from "src/layouts/UserLayout"
// redux
import { useDispatch } from "react-redux"
import { setDatas } from "src/redux/contactSlice"
import { useForm } from "react-hook-form"

export const contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();
    const onSubmit = useCallback((data) => {
        dispatch(setDatas(data));
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
                                {...register("mail", { required: true, maxLength: 50, pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ })}
                            />
                            {errors.mail && <span className="text-red-400 text-xs">※入力チェック</span>}
                        </div>
                        <div className="text-gray-700 mb-4">
                            <label htmlFor="contents">お問合わせ内容</label>
                            <textarea className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm" cols="40" rows="10" id="noter-text-area" name="textarea"
                                {...register("contents", { required: true })}
                            />
                            {errors.mail && <span className="text-red-400 text-xs">※入力チェック</span>}
                        </div>
                        <div className="flex justify-center">
                            <Button className="p-4 my-8" onClick={handleSubmit(onSubmit)}>入力確認画面へ</Button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout >
    )
}

export default contact;