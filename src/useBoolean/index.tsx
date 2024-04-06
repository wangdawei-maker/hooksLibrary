import { useMemo } from "react";
import { useToggle } from "..";
export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    set: (value: boolean) => void;
    toggle: () => void;
}



function useBoolean(defaultValue = false): [boolean, Actions] {
    const [state, { set, toggle }] = useToggle(!!defaultValue)

    const actions = useMemo(() => {
        const setTrue = () => set(true)
        const setFalse = () => set(false)

        return {
            setFalse,
            setTrue,
            set: (v) => set(!!v),
            toggle
        }

    }, [])


    return [state, actions]
}

export default useBoolean
