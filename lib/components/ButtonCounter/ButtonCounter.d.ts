import { h } from 'preact';
interface IButtonCounterProps {
    name: string;
    onClicked?: (e: number) => void;
}
export declare const ButtonCounter: ({ name, onClicked }: IButtonCounterProps) => h.JSX.Element;
export {};
