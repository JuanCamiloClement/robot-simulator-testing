const juanCamilo3000 = ([x,y],direction) => {

    const validOrientations = ['north','east','south','west'];

    let position = [x,y];
    let orientation = direction;

    let positionMessage,orientationMessage;

    function validatePosition() {
        try {
            if (x > 10 || x < 0 || y > 10 || y < 0) {
                throw new Error('Invalid position')
            } else {
                positionMessage = 'Robot in valid position';
            }
        } catch(error) {
            positionMessage = error.message;
        }
    };
    validatePosition();

    function validateOrientation() {
        try {
            if (!validOrientations.includes(orientation)) {
                throw new Error('Invalid orientation')
            } else {
                orientationMessage = 'Robot in valid orientation';
            }
        } catch(error) {
            orientationMessage = error.message
        }
    };
    validateOrientation();

    const getPosition = () => {
        return {
            position: [x,y],
            orientation
        }
    }

    const turnRight = () => {
        if (orientation === 'north') {
            orientation = 'east';
            return;
        } else if (orientation === 'east') {
            orientation = 'south';
            return;
        } else if (orientation === 'south') {
            orientation = 'west';
            return;
        } else if (orientation === 'west') {
            orientation = 'north';
            return;
        }
    }

    const turnLeft = () => {
        if (orientation === 'north') {
            orientation = 'west';
        } else if (orientation === 'west') {
            orientation = 'south';
        } else if (orientation === 'south') {
            orientation = 'east';
        } else if (orientation === 'east') {
            orientation = 'north';
        }
    }

    const advance = () => {
        if (orientation === 'north') {
            y += 1;
        } else if (orientation === 'east') {
            x += 1;
        } else if (orientation === 'south') {
            y -= 1;
        } else if (orientation === 'west') {
            x -= 1;
        } 
    }

    const move = (instructions) => {
        const array = instructions.split("");
        array.map((element) => {
            if (element === 'R') {
                turnRight();
            } else if (element === 'L') {
                turnLeft();
            } else if (element === 'A') {
                advance();
            }
        });
    }

    return {
        position,
        orientation,
        positionMessage,
        orientationMessage,
        getPosition,
        turnRight,
        turnLeft,
        advance,
        move
    }
}

module.exports = juanCamilo3000;