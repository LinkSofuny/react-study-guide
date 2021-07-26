
export const addAction = data => ({type: 'add', payload: data})

// 异步
export const addActionAsync = (data, time = 1000) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: 'add', payload: data})
        }, time)
    }
}