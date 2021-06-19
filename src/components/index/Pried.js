import { useState, useCallback } from "react"
import AsyncCreatableSelect from 'react-select/creatable';


export const Pried = (props) => {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()
    const [value4, setValue4] = useState()
    const [value5, setValue5] = useState()
    const [value6, setValue6] = useState()
    const [value7, setValue7] = useState()
    const [value8, setValue8] = useState()
    const [value9, setValue9] = useState()
    const [value10, setValue10] = useState()
    const [options, setOptions] = useState([
        { value: '◎当たり', label: '◎当たり' },
        { value: '✕', label: '✕' },
    ]);

    const handleChange1 = useCallback((inputValue) => {
        setValue1(inputValue)
        if (inputValue !== null) { props.setPried1(inputValue.value) } else { props.setPried1("") }
    }, []);

    const handleCreate1 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue1(newValue);
            if (inputValue !== null) { props.setPried1(newValue.value) } else { props.setPried1("") }
        },
        [options]
    );

    const loadOptions1 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange2 = useCallback((inputValue) => {
        setValue2(inputValue)
        if (inputValue !== null) { props.setPried2(inputValue.value) } else { props.setPried2("") }
    }, []);

    const handleCreate2 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue2(newValue);
            if (inputValue !== null) { props.setPried2(newValue.value) } else { props.setPried2("") }
        },
        [options]
    );

    const loadOptions2 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange3 = useCallback((inputValue) => {
        setValue3(inputValue)
        if (inputValue !== null) { props.setPried3(inputValue.value) } else { props.setPried3("") }
    }, []);

    const handleCreate3 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue3(newValue);
            if (inputValue !== null) { props.setPried3(newValue.value) } else { props.setPried3("") }
        },
        [options]
    );

    const loadOptions3 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange4 = useCallback((inputValue) => {
        setValue4(inputValue)
        if (inputValue !== null) { props.setPried4(inputValue.value) } else { props.setPried4("") }
    }, []);

    const handleCreate4 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue4(newValue);
            if (inputValue !== null) { props.setPried4(newValue.value) } else { props.setPried4("") }
        },
        [options]
    );

    const loadOptions4 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange5 = useCallback((inputValue) => {
        setValue5(inputValue)
        if (inputValue !== null) { props.setPried5(inputValue.value) } else { props.setPried5("") }
    }, []);

    const handleCreate5 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue5(newValue);
            if (inputValue !== null) { props.setPried5(newValue.value) } else { props.setPried5("") }
        },
        [options]
    );

    const loadOptions5 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange6 = useCallback((inputValue) => {
        setValue6(inputValue)
        if (inputValue !== null) { props.setPried6(inputValue.value) } else { props.setPried6("") }
    }, []);

    const handleCreate6 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue6(newValue);
            if (inputValue !== null) { props.setPried6(newValue.value) } else { props.setPried6("") }
        },
        [options]
    );

    const loadOptions6 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange7 = useCallback((inputValue) => {
        setValue7(inputValue)
        if (inputValue !== null) { props.setPried7(inputValue.value) } else { props.setPried7("") }
    }, []);

    const handleCreate7 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue7(newValue);
            if (inputValue !== null) { props.setPried7(newValue.value) } else { props.setPried7("") }
        },
        [options]
    );

    const loadOptions7 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange8 = useCallback((inputValue) => {
        setValue8(inputValue)
        if (inputValue !== null) { props.setPried8(inputValue.value) } else { props.setPried8("") }
    }, []);

    const handleCreate8 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue8(newValue);
            if (inputValue !== null) { props.setPried8(newValue.value) } else { props.setPried8("") }
        },
        [options]
    );

    const loadOptions8 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange9 = useCallback((inputValue) => {
        setValue9(inputValue)
        if (inputValue !== null) { props.setPried9(inputValue.value) } else { props.setPried9("") }
    }, []);

    const handleCreate9 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue9(newValue);
            if (inputValue !== null) { props.setPried9(newValue.value) } else { props.setPried9("") }
        },
        [options]
    );

    const loadOptions9 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    const handleChange10 = useCallback((inputValue) => {
        setValue10(inputValue)
        if (inputValue !== null) { props.setPried10(inputValue.value) } else { props.setPried10("") }
    }, []);

    const handleCreate10 = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue10(newValue);
            if (inputValue !== null) { props.setPried10(newValue.value) } else { props.setPried10("") }
        },
        [options]
    );

    const loadOptions10 = (inputValue, callback) =>
        setTimeout(() => {
            callback(
                options.filter((item) =>
                    item.label.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }, 3000);

    return (
        <ul>
            {
                (() => {
                    const thTagCreate = [];
                    for (let i = 0; i < props.playerCount; i++) {
                        if (i == 0) {
                            thTagCreate.push(
                                <div key={i} colSpan="2">
                                    <label htmlFor="amida0" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida0"}
                                        instanceId={"amida0"}
                                        inputId={"amida0"}
                                        isClearable={true}
                                        value={value1}
                                        options={options}
                                        defaultValue={options[0]}
                                        onChange={handleChange1}
                                        onCreateOption={handleCreate1}
                                        cacheOptions
                                        loadOptions={loadOptions1}
                                    />
                                </div>)
                        } else if (i == 1) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida1" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida1"}
                                        instanceId={"amida1"}
                                        inputId={"amida1"}
                                        isClearable={true}
                                        value={value2}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange2}
                                        onCreateOption={handleCreate2}
                                        cacheOptions
                                        loadOptions={loadOptions2}
                                    />
                                </div>)
                        } else if (i == 2) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida2" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida2"}
                                        instanceId={"amida2"}
                                        inputId={"amida2"}
                                        isClearable={true}
                                        value={value3}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange3}
                                        onCreateOption={handleCreate3}
                                        cacheOptions
                                        loadOptions={loadOptions3}
                                    />
                                </div>)
                        } else if (i == 3) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida3" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida3"}
                                        instanceId={"amida3"}
                                        inputId={"amida3"}
                                        isClearable={true}
                                        value={value4}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange4}
                                        onCreateOption={handleCreate4}
                                        cacheOptions
                                        loadOptions={loadOptions4}
                                    />
                                </div>)
                        } else if (i == 4) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida4" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida4"}
                                        instanceId={"amida4"}
                                        inputId={"amida4"}
                                        isClearable={true}
                                        value={value5}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange5}
                                        onCreateOption={handleCreate5}
                                        cacheOptions
                                        loadOptions={loadOptions5}
                                    />
                                </div>)
                        } else if (i == 5) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida5" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida5"}
                                        instanceId={"amida5"}
                                        inputId={"amida5"}
                                        isClearable={true}
                                        value={value6}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange6}
                                        onCreateOption={handleCreate6}
                                        cacheOptions
                                        loadOptions={loadOptions6}
                                    />
                                </div>)
                        } else if (i == 6) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida6" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida6"}
                                        instanceId={"amida6"}
                                        inputId={"amida6"}
                                        isClearable={true}
                                        value={value7}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange7}
                                        onCreateOption={handleCreate7}
                                        cacheOptions
                                        loadOptions={loadOptions7}
                                    />
                                </div>)
                        } else if (i == 7) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida7" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida7"}
                                        instanceId={"amida7"}
                                        inputId={"amida7"}
                                        isClearable={true}
                                        value={value8}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange8}
                                        onCreateOption={handleCreate8}
                                        cacheOptions
                                        loadOptions={loadOptions8}
                                    />
                                </div>)
                        } else if (i == 8) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida8" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida8"}
                                        instanceId={"amida8"}
                                        inputId={"amida8"}
                                        isClearable={true}
                                        value={value9}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange9}
                                        onCreateOption={handleCreate9}
                                        cacheOptions
                                        loadOptions={loadOptions9}
                                    />
                                </div>)
                        } else if (i == 9) {
                            thTagCreate.push(
                                <div key={i} className="pt-4" colSpan="2">
                                    <label htmlFor="amida9" className="text-gray-700">アイテム {i + 1}</label>
                                    <AsyncCreatableSelect
                                        // id={"amida9"}
                                        instanceId={"amida9"}
                                        inputId={"amida9"}
                                        isClearable={true}
                                        value={value10}
                                        options={options}
                                        defaultValue={options[1]}
                                        onChange={handleChange10}
                                        onCreateOption={handleCreate10}
                                        cacheOptions
                                        loadOptions={loadOptions10}
                                    />
                                </div>)
                        }
                    }
                    return (
                        <li className="w-full">
                            {
                                thTagCreate.map((thTag) => {
                                    return thTag;
                                })
                            }
                        </li>
                    )
                })()
            }
        </ul>
    )
}
