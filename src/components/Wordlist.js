var randomWordList = [
    "apple",
    "pear",
    "orange",
    "grapefruit",
    "mandarin",
    "lime",
    "nectarine",
    "apricot",
    "peach",
    "plum",
    "banana",
    "mango",
    "strawberry",
    "raspberry",
    "blueberry",
    "kiwifruit",
    "passionfruit",
    "watermelon",
    "rockmelon",
    "honeydewmelon",
    "tomato",
    "avocado"
]

function wordGenerator() {
    return randomWordList[Math.floor(Math.random() * randomWordList.length)]
}

export {wordGenerator}