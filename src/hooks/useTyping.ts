import { useCallback, useEffect, useRef, useState } from "react"

const isKeyAllowed = (code: string) => {
    return (
        code.startsWith("Key") || code.startsWith("Digit") || code == "Backspace" || code == "Space"
    )
}

const useTyping = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0)
    const [typed, setTyped] = useState("")
    const totalTyped = useRef(0)

    const keydownHandler = useCallback(({ key, code } : KeyboardEvent) => {
        if (!enabled || !isKeyAllowed(code)) {
            return
        }

        switch (key) {
            case "Backspace":
                setTyped((prev) => prev.slice(0,-1))
                setCursor((prev) => prev - 1)
                totalTyped.current -= 1
                break;
            default:
                setTyped((prev) => prev.concat(key))
                setCursor((prev) => prev + 1)
                totalTyped.current += 1
        }
    },[enabled])

    const clearTyped = () => {
        setTyped("")
        setCursor(0)
    }

    const resetTotalTyped = () => {
        totalTyped.current = 0
    }

    useEffect(() => {
        window.addEventListener("keydown", keydownHandler)

        return () => {
            window.removeEventListener("keydown", keydownHandler)
        }
    },[keydownHandler])

    return {
        typed, cursor, clearTyped, resetTotalTyped, totalTyped: totalTyped.current
    }
}

export default useTyping