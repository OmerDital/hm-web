import { render } from '@testing-library/react';
import Greeting, { getPartOfTheDay, greetings } from '.';

describe('ui tests', () => {
  test('component actually renderd', () => {
    render(<Greeting />);
  });
});

describe('logic tests', () => {
  test('get appropriate greeting in morning', () => {
    expect(getPartOfTheDay(9)).toBe(greetings.morningGreeting);
  });
  test('get appropriate greeting in afternoon', () => {
    expect(getPartOfTheDay(13)).toBe(greetings.afternoonGreeting);
  });
  test('get appropriate greeting in night', () => {
    expect(getPartOfTheDay(21)).toBe(greetings.nightGreeting);
  });
});