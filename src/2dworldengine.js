

class 2dWorldEngine {
    constructor() {
        this.object_list = [];

        this.render = this.render.bind(this);

        render();
    }

    addObject(anObject) {
        this.object_list.push(anObject);
    }

    init() {

    }

    render() {
        const canvas = getElementById('canvas');
        this.ctx =  canvas.getContext('2d');
        this.ctx.fillStyle  = 'rgb(0,0,0)';
        this.fillRect(0,0,1000,700);
        this.object_list.forEach( (obj) => {
            obj.render(ctx);
        })
    }
}
