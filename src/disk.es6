let Device = require('spb25-device');

let random = (x=1) => Math.random() * x;

class Disk extends Device {
    next ([x, y], outerRadius=1, innerRadius=0) {
        let radius = random(outerRadius - innerRadius) + innerRadius,
            radian = random(2 * Math.PI);

        let deltaX = radius * Math.sin(radian),
            deltaY = radius * Math.cos(radian);

        return super.next([x + deltaX, y + deltaY]);
    }
}


module.exports = Disk;
