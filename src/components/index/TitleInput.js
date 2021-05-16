export const TitleInput = (props) => {
    return (
        <div className="py-2 px-4 inline-flex items-center justify-center rounded text-sm">
            <div className="flex items-center rounded-full border border-gray-500 px-4">
                <input
                    className="rounded-l-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-none"
                    type="text"
                    placeholder="タイトル"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}