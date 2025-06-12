import {createContext} from 'react';
import TimeContext from './TimeContext'

const ReactAudioContext = createContext(new AudioContext());
export default ReactAudioContext;