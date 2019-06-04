declare class Timer {
    constructor(x: number);
    init: (t: number) => Promise<unknown>;
}
export default Timer;
export { Timer };
