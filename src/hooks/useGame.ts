import { useCallback, useEffect, useState } from "react"
import useWords from "./useWords"
import useTimer from "./useTimer"
import useTyping from "./useTyping"
import { countErrors } from "../utils"

export type State = "start" | "run" | "finish"

const useGame = () => {
    const [state, setState] = useState<State>("start")
    const { words, updateWords } = useWords(15)
    const { timeLeft, startCountdown, resetCountdown} = useTimer(30)
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTyping(state !== "finish")

    const [errors, setErrors] = useState(0)

    const isStarting = state === "start" && cursor > 0
    const areWordsFinished = cursor === words.length

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor)
        setErrors((prev) => prev + countErrors(typed, wordsReached))

    }, [typed, words, cursor])

    useEffect(() => {
        if (isStarting) {
            setState("run")
            startCountdown()
        }
    }, [isStarting, startCountdown, cursor])

    useEffect(() => {
        if (!timeLeft) {
            setState("finish")
            sumErrors()
        }
    }, [timeLeft, sumErrors])

    useEffect(() => {
        if (areWordsFinished) {
            sumErrors()
            updateWords()
            clearTyped()
        }
    }, [
        cursor, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors
    ])

    const restart = useCallback(() => {
        resetCountdown()
        resetTotalTyped()
        setState("start")
        setErrors(0)
        updateWords()
        clearTyped()
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped])

    return { state, setState, words, timeLeft, startCountdown, resetCountdown, typed, restart, errors, totalTyped }
}

export default useGame