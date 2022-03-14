import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //listen for all resources loaded
        this.resources.on('ready', () => 
        {
            console.log('resources are ready')

            //setup
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()    
        })
    }

    update()
    {
        if(this.fox)
        {
            this.fox.update()
        }   
    }
}