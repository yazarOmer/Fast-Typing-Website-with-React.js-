import { useEffect, useRef, useState } from "react"

const useTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds)
    const intervalRef = useRef<number | null>(null)

    const startCountdown = () => {
        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => prev -1)
        }, 1000)
    }

    const resetCountdown = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        setTimeLeft(seconds)
    }

    useEffect(() => {
        if (!timeLeft && intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }, [timeLeft, intervalRef])

    return { timeLeft, startCountdown, resetCountdown}
}

export default useTimer