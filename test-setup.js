jest.useFakeTimers()
jest.mock('react-native-vector-icons/Ionicons', () => ({ select: jest.fn() }));
jest.mock('react-native-slider', () => 'Slider');
