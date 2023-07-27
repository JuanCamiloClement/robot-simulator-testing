const juanCamilo3000 = require('./robot');

describe('Robot validations',() => {
    test('Should return message with invalid position',() => {
        const message = 'Invalid position';
        const robot = juanCamilo3000([11,3],'north');
        expect(robot.positionMessage).toBe(message)
    });
    test('Should return message with robot in valid position',() => {
        const message = 'Robot in valid position';
        const robot = juanCamilo3000([5,4],'north');
        expect(robot.positionMessage).toBe(message);
    })
    test('Should return message with invalid orientation',() => {
        const message = 'Invalid orientation';
        const robot = juanCamilo3000([9,3],'noth');
        expect(robot.orientationMessage).toBe(message)
    });
    test('Should return meesage with robot in valid orientation',() => {
        const message = 'Robot in valid orientation';
        const robot = juanCamilo3000([4,5],'north');
        expect(robot.orientationMessage).toBe(message);
    })
});

describe('Robot movements in place',() => {
    test('Should show robot looking east from north',() => {
        const expectedOrientation = 'east';
        const robot = juanCamilo3000([7,3],'north');
        robot.turnRight();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking south from east',() => {
        const expectedOrientation = 'south';
        const robot = juanCamilo3000([7,3],'east');
        robot.turnRight();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking west from south',() => {
        const expectedOrientation = 'west';
        const robot = juanCamilo3000([7,3],'south');
        robot.turnRight();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking north from west',() => {
        const expectedOrientation = 'north';
        const robot = juanCamilo3000([7,3],'west');
        robot.turnRight();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking west from north',() => {
        const expectedOrientation = 'west';
        const robot = juanCamilo3000([7,3],'north');
        robot.turnLeft();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking south from west',() => {
        const expectedOrientation = 'south';
        const robot = juanCamilo3000([7,3],'west');
        robot.turnLeft();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking east from south',() => {
        const expectedOrientation = 'east';
        const robot = juanCamilo3000([7,3],'south');
        robot.turnLeft();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
    test('Should show robot looking north from east',() => {
        const expectedOrientation = 'north';
        const robot = juanCamilo3000([7,3],'east');
        robot.turnLeft();
        const result = robot.getPosition();
        expect(result.orientation).toBe(expectedOrientation);
    });
});

describe('Robot movements in Y or X axis',() => {
    test('Should advance in Y axis',() => {
        const place = { position: [7,4], orientation: 'north' };
        const robot = juanCamilo3000([7,3],'north');
        robot.advance();
        const result = robot.getPosition();
        console.log(result);
        expect(result).toMatchObject(place);
    });
    test('Should go back in Y axis',() => {
        const place = { position: [7,2], orientation: 'south' };
        const robot = juanCamilo3000([7,3],'south');
        robot.advance();
        const result = robot.getPosition();
        console.log(result);
        expect(result).toMatchObject(place);
    });
    test('Should advance in X axis',() => {
        const place = { position: [8,3], orientation: 'east' };
        const robot = juanCamilo3000([7,3],'east');
        robot.advance();
        const result = robot.getPosition();
        console.log(result);
        expect(result).toMatchObject(place);
    });
    test('Should go back in X axis',() => {
        const place = { position: [6,3], orientation: 'west' };
        const robot = juanCamilo3000([7,3],'west');
        robot.advance();
        const result = robot.getPosition();
        expect(result).toMatchObject(place);
    });
});

describe('Robot ability to follow a string command',() => {
    test('Should show a position of 9,4 and be looking west',() => {
        const place = { position: [9,4], orientation: 'west'};
        const robot = juanCamilo3000([7,3],'north');
        robot.move('RAALAL');
        const result = robot.getPosition();
        expect(result).toMatchObject(place);
    })
})