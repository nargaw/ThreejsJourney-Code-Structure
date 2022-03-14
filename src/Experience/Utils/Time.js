import EventEmitter from "./EventEmitter.js"

export default class Time extends EventEmitter 
{
    constructor()
    {
        super()

        //Setup
        this.start = Date.now()
        console.log(this.start)
        this.current = this.start //time stamp when experience started
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        //console.log(this.delta)
        this.current = currentTime
        this.elapsed = this.current - this.start
        //console.log(this.elapsed)

        this.trigger('tick')

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }
}