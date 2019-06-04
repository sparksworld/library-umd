class Timer {
    constructor(x: number) {
        this.init(x)
    }
    init = (t: number) => new Promise(resolve => setTimeout(resolve, t))
}

export default Timer
export {
    Timer
}