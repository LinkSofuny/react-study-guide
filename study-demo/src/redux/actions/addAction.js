
export const addAction = data => ({type: 'add', payload: data})

// 异步
export const addActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: 'add', payload: data})
        }, time)
    }
}