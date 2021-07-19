
const initState = 0

export default function addReudcer (prevState = initState, action) {
    const { type, payload } = action
    switch (type) {
        case 'add':
            return prevState + payload
        default:
            return prevState // （初始化的时候，无指令， 返回默认值）
    }
}