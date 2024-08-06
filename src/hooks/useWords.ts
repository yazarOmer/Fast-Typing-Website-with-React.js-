import { faker } from "@faker-js/faker"
import { useState } from "react"

const generateWords = (count: number) => {
    return faker.word.words(count).toLowerCase()
}

const useWords = (count: number) => {
    const [words, setWords] = useState<string>(generateWords(count))

    const updateWords = () => {
        setWords(generateWords(count))
    }

    return { words, updateWords}
}

export default useWords