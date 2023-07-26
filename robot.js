const juanCamilo3000 = {
    position: [7,3],
    orientation: 'north',
    turnRight: () => {
        if (juanCamilo3000.orientation === 'north') {
            juanCamilo3000.orientation = 'east';
        } else if (juanCamilo3000.orientation === 'east') {
            juanCamilo3000.orientation = 'south';
        } else if (juanCamilo3000.orientation === 'south') {
            juanCamilo3000.orientation = 'west';
        } else if (juanCamilo3000.orientation === 'west') {
            juanCamilo3000.orientation = 'north';
        }
    },
    turnLeft: () => {
        if (juanCamilo3000.orientation === 'north') {
            juanCamilo3000.orientation = 'west';
        } else if (juanCamilo3000.orientation === 'west') {
            juanCamilo3000.orientation = 'south';
        } else if (juanCamilo3000.orientation === 'south') {
            juanCamilo3000.orientation = 'east';
        } else if (juanCamilo3000.orientation === 'east') {
            juanCamilo3000.orientation = 'north';
        }
    },
    advance: () => {
        if (juanCamilo3000.orientation === 'north') {
            juanCamilo3000.position[1] += 1;
        } else if (juanCamilo3000.orientation === 'east') {
            juanCamilo3000.position[0] += 1;
        } else if (juanCamilo3000.orientation === 'south') {
            juanCamilo3000.position[1] -= 1;
        } else if (juanCamilo3000.orientation === 'west') {
            juanCamilo3000.position[0] -= 1;
        } 
    }
}

const move = (string) => {
    const array = string.split("");
    array.map((element) => {
        if (element === 'R') {
            juanCamilo3000.turnRight();
        } else if (element === 'L') {
            juanCamilo3000.turnLeft();
        } else if (element === 'A') {
            juanCamilo3000.advance();
        }
    });
    return juanCamilo3000.position;
}

const instructions = 'RAALA';

console.log(move(instructions));