const { Circle, Triangle, Square } = require('./shapes');

test('Circle render', () => {
    const shape = new Circle('blue');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle render', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square render', () => {
    const shape = new Square('blue');
    expect(shape.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="blue" />');
});
