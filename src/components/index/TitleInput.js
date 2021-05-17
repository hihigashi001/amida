export const TitleInput = (props) => {
    return (
        <>
            <label className="text-gray-700">タイトル</label>
            <input
                className="appearance-none w-full border border-primary hover:border-primary p-4 rounded placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover text-sm"
                type="text"
                placeholder="【無しでもOK】タイトルを決める"
                value={props.value}
                onChange={props.onChange}
            ></input>
        </>
    )
}