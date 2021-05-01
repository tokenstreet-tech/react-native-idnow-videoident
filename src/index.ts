import { NativeModules } from 'react-native';

type IdnowVideoidentType = {
    start(a: number, b: number): Promise<number>;
};

const { IdnowVideoident } = NativeModules;

export default IdnowVideoident as IdnowVideoidentType;
